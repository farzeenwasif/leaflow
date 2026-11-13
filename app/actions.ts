"use server";

import { redirect } from "next/navigation";
import { siteConfig } from "@/data/site";
import { addSubscriber, escapeHtml, sendToOwner } from "@/lib/email";
import { isValidEmail, validateContact, type ContactState, type NewsletterState } from "@/lib/contact";

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field.
  if (formData.get("company_website")) return { status: "success", message: "Thanks! We'll be in touch shortly." };

  const result = validateContact(formData);
  if (!result.success) {
    return { status: "error", message: "Please check the highlighted fields.", errors: result.errors };
  }

  const { firstName, lastName, email, phone, message } = result.data;
  const rows: [string, string][] = [
    ["Name", `${firstName} ${lastName}`],
    ["Email", email],
    ["Phone", phone || "—"],
  ];
  const sent = await sendToOwner({
    subject: `New contact request from ${firstName} ${lastName}`,
    replyTo: email,
    text: [...rows.map(([k, v]) => `${k}: ${v}`), "", message].join("\n"),
    html: `
      <h2 style="font-family:sans-serif">New message from your website</h2>
      <table style="font-family:sans-serif;font-size:14px">
        ${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td>${escapeHtml(v)}</td></tr>`).join("")}
      </table>
      <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;border-left:3px solid #2ed47a;padding-left:12px">${escapeHtml(message)}</p>
      <p style="font-family:sans-serif;font-size:12px;color:#999">Reply to this email to answer ${escapeHtml(firstName)} directly.</p>`,
  });

  if (!sent.ok) {
    console.error("[contact] email delivery failed:", sent.error);
    return {
      status: "error",
      message: `Sorry, we couldn't send your message right now. Please email us at ${siteConfig.email}.`,
    };
  }

  // Outside any try/catch, as required by `redirect`.
  redirect("/contact/sent");
}

export async function subscribeNewsletter(_prev: NewsletterState, formData: FormData): Promise<NewsletterState> {
  const email = typeof formData.get("email") === "string" ? String(formData.get("email")).trim() : "";
  if (!isValidEmail(email)) return { status: "error", message: "Please enter a valid email address." };

  // 1) Store the subscriber in Resend Contacts (needs a "Full access" API key).
  const saved = await addSubscriber(email);
  if (!saved.ok) console.warn("[newsletter] could not save contact in Resend:", saved.error);

  // 2) Always email the owner too, so no sign-up is lost even if (1) is unavailable.
  const notified = await sendToOwner({
    subject: "New newsletter subscriber",
    text: `${email} just subscribed to the ${siteConfig.name} newsletter.${saved.ok ? "" : " (Not saved in Resend Contacts — add it manually.)"}`,
    html: `<p style="font-family:sans-serif">${escapeHtml(email)} just subscribed to the ${escapeHtml(siteConfig.name)} newsletter.</p>${
      saved.ok ? "" : `<p style="font-family:sans-serif;color:#999;font-size:12px">Not saved in Resend Contacts — add it manually.</p>`
    }`,
  });
  if (!notified.ok) console.warn("[newsletter] owner notification failed:", notified.error);

  if (!saved.ok && !notified.ok) {
    return { status: "error", message: "Sorry, we couldn't subscribe you right now. Please try again later." };
  }

  return { status: "success", message: "You're subscribed — welcome aboard!" };
}
