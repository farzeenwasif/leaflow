/** Shared types + validation for the contact and newsletter forms. */

export type FormStatus = "idle" | "success" | "error";

export type ContactField = "lastName" | "firstName" | "phone" | "email" | "message";

export type ContactState = {
  status: FormStatus;
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
};

export type NewsletterState = {
  status: FormStatus;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s().-]{7,}$/;

const str = (v: FormDataEntryValue | null) => (typeof v === "string" ? v.trim() : "");

export function isValidEmail(email: string) {
  return EMAIL_RE.test(email);
}

export function validateContact(formData: FormData) {
  const data = {
    lastName: str(formData.get("lastName")),
    firstName: str(formData.get("firstName")),
    phone: str(formData.get("phone")),
    email: str(formData.get("email")),
    message: str(formData.get("message")),
  };

  const errors: ContactState["errors"] = {};
  if (!data.lastName) errors.lastName = "Please enter your last name.";
  if (!data.firstName) errors.firstName = "Please enter your first name.";
  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (!isValidEmail(data.email)) errors.email = "Please enter a valid email address.";
  if (data.message.length < 10) errors.message = "Your message should be at least 10 characters.";
  if (data.message.length > 5000) errors.message = "Your message is too long.";

  return Object.keys(errors).length ? { success: false as const, errors } : { success: true as const, data };
}
