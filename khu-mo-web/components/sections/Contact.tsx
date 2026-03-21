"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getDictionary, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

const interestValues = ["general", "product", "events", "trade"] as const;
type InterestValue = (typeof interestValues)[number];

type ContactValues = {
  name: string;
  email: string;
  phone?: string;
  interest: InterestValue;
  message: string;
};

function inferInterestFromQuery(interestParam: string | null): ContactValues["interest"] {
  if (!interestParam) {
    return "general";
  }

  const value = interestParam.toLowerCase();
  if (value.includes("event")) {
    return "events";
  }
  if (value.includes("trade") || value.includes("wholesale")) {
    return "trade";
  }
  if (value.includes("product") || value.includes("reserve") || value.includes("copper")) {
    return "product";
  }
  return "general";
}

type ContactProps = {
  locale: Locale;
};

export function Contact({ locale }: ContactProps) {
  const t = getDictionary(locale);
  const contactSchema = z.object({
    name: z.string().trim().min(2, t.contact.validation.name),
    email: z.string().trim().email(t.contact.validation.email),
    phone: z.string().trim().optional(),
    interest: z.enum(interestValues),
    message: z.string().trim().min(10, t.contact.validation.message),
  });
  const searchParams = useSearchParams();
  const initialInterest = useMemo(
    () => inferInterestFromQuery(searchParams.get("interest")),
    [searchParams],
  );
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: initialInterest,
      message: "",
    },
  });

  useEffect(() => {
    setValue("interest", initialInterest);
  }, [initialInterest, setValue]);

  async function onSubmit(values: ContactValues) {
    setSubmitState("idle");
    setSubmitMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(payload?.error ?? "Failed");
      }

      reset({
        name: "",
        email: "",
        phone: "",
        interest: initialInterest,
        message: "",
      });
      setSubmitState("success");
    } catch {
      setSubmitState("error");
      setSubmitMessage(t.contact.error);
    }
  }

  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title}>
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-base leading-7 text-mineral-white/85">
            {t.contact.intro}
          </p>
          <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded border border-mineral-white/15">
            <Image src={siteConfig.contact.backgroundImage} alt="" fill className="object-cover" />
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-mineral-white" htmlFor="name">
                {t.contact.labels.name}
              </label>
              <input
                id="name"
                className="min-h-11 w-full rounded border border-mineral-white/20 bg-charcoal px-3 text-mineral-white placeholder:text-mineral-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                {...register("name")}
              />
              {errors.name ? (
                <p className="mt-1 text-xs text-red-300">{errors.name.message}</p>
              ) : null}
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-mineral-white" htmlFor="email">
                {t.contact.labels.email}
              </label>
              <input
                id="email"
                type="email"
                className="min-h-11 w-full rounded border border-mineral-white/20 bg-charcoal px-3 text-mineral-white placeholder:text-mineral-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                {...register("email")}
              />
              {errors.email ? (
                <p className="mt-1 text-xs text-red-300">{errors.email.message}</p>
              ) : null}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-mineral-white" htmlFor="phone">
              {t.contact.labels.phone}
            </label>
            <input
              id="phone"
              className="min-h-11 w-full rounded border border-mineral-white/20 bg-charcoal px-3 text-mineral-white placeholder:text-mineral-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              placeholder={t.contact.placeholders.phone}
              {...register("phone")}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-mineral-white" htmlFor="interest">
              {t.contact.labels.interest}
            </label>
            <select
              id="interest"
              className="min-h-11 w-full rounded border border-mineral-white/20 bg-charcoal px-3 text-mineral-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              {...register("interest")}
            >
              {interestValues.map((option) => (
                <option key={option} value={option}>
                  {t.contact.options[option]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-mineral-white" htmlFor="message">
              {t.contact.labels.message}
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded border border-mineral-white/20 bg-charcoal px-3 py-2 text-mineral-white placeholder:text-mineral-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              {...register("message")}
            />
            {errors.message ? (
              <p className="mt-1 text-xs text-red-300">{errors.message.message}</p>
            ) : null}
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? t.contact.buttonSending : t.contact.buttonIdle}
          </Button>

          {submitState === "success" ? (
            <p className="text-sm text-green-300">{t.contact.success}</p>
          ) : null}
          {submitState === "error" ? (
            <p className="text-sm text-red-300">{submitMessage}</p>
          ) : null}
        </form>
      </div>
    </Section>
  );
}
