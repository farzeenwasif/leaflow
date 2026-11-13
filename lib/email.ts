import "server-only";
import { siteConfig } from "@/data/site";

/**
 * Minimal Resend client (REST API, no SDK).
 * Docs: https://resend.com/docs/api-reference/emails/send-email
 *       https://resend.com/docs/api-reference/contacts/create-contact
 *
 * Environment variables (see .env.example):
 *  - RESEND_API_KEY        required — https://resend.com/api-keys
 *  - CONTACT_TO_EMAIL      where contact messages are delivered (defaults to siteConfig.email)
 *  - RESEND_FROM_EMAIL     sender; defaults to Resend's test sender, which can only deliver
 *                          to the email address of your Resend account until you verify a domain
 *  - RESEND_SEGMENT_ID     optional segment that newsletter subscribers are added to
 */

const API = "https://api.resend.com";

type Result = { ok: true } | { ok: false; error: string };

function config() {
  const apiKey = process.env.RESEND_API_KEY;
  return {
    apiKey,
    to: process.env.CONTACT_TO_EMAIL || siteConfig.email,
    from: process.env.RESEND_FROM_EMAIL || `${siteConfig.name} <onboarding@resend.dev>`,
    segmentId: process.env.RESEND_SEGMENT_ID,
  };
}

async function resend(path: string, body: unknown, apiKey: string): Promise<Response> {
  return fetch(`${API}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
}

async function errorMessage(res: Response) {
  try {
    const data = (await res.json()) as { message?: string; name?: string };
    return data.message || data.name || `HTTP ${res.status}`;
  } catch {
    return `HTTP ${res.status}`;
  }
}

/** Escapes user input before it is placed inside an HTML email. */
export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type EmailInput = { subject: string; html: string; text: string; replyTo?: string };

/** Sends a notification to the site owner. */
export async function sendToOwner({ subject, html, text, replyTo }: EmailInput): Promise<Result> {
  const { apiKey, to, from } = config();
  if (!apiKey) return { ok: false, error: "RESEND_API_KEY is not set" };

  const res = await resend("/emails", { from, to, subject, html, text, ...(replyTo ? { reply_to: replyTo } : {}) }, apiKey);
  return res.ok ? { ok: true } : { ok: false, error: await errorMessage(res) };
}

/** Adds (or keeps) a newsletter subscriber in Resend Contacts. */
export async function addSubscriber(email: string): Promise<Result> {
  const { apiKey, segmentId } = config();
  if (!apiKey) return { ok: false, error: "RESEND_API_KEY is not set" };

  const res = await resend(
    "/contacts",
    { email, unsubscribed: false, ...(segmentId ? { segments: [{ id: segmentId }] } : {}) },
    apiKey,
  );
  if (res.ok) return { ok: true };

  const error = await errorMessage(res);
  // Re-subscribing an existing contact is not a failure for the visitor.
  if (/already exists/i.test(error)) return { ok: true };
  return { ok: false, error };
}
