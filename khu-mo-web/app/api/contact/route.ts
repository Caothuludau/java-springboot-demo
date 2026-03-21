import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .optional()
    .or(z.literal("")),
  interest: z.enum(["general", "product", "events", "trade"]),
  message: z.string().trim().min(10, "Please share a bit more detail."),
});

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { name, email, phone, interest, message } = parsed.data;
  const trimmedPhone = phone?.trim();

  const leadPayload = {
    name,
    email,
    phone: trimmedPhone ? trimmedPhone : undefined,
    interest,
    message,
    createdAt: new Date().toISOString(),
  };

  // v1 stub: log server-side payload. v1.1 can forward to webhook/Spring API.
  console.info("[contact-lead]", leadPayload);

  return NextResponse.json({ ok: true });
}
