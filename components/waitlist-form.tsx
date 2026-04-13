"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type FormValues = z.infer<ReturnType<typeof buildSchema>>

function buildSchema(t: (key: string) => string) {
  return z.object({
    name: z.string().trim().min(1, { message: t("validation.required") }),
    email: z
      .string()
      .trim()
      .min(1, { message: t("validation.required") })
      .email({ message: t("validation.email") }),
    specialty: z.string().trim().min(1, { message: t("validation.required") }),
  })
}

export function WaitlistForm() {
  const t = useTranslations("waitlist")
  const schema = useMemo(() => buildSchema(t), [t])
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [serverMsg, setServerMsg] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", specialty: "" },
  })

  async function onSubmit(values: FormValues) {
    setStatus("idle")
    setServerMsg(null)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (res.status === 503) {
        setStatus("error")
        setServerMsg(t("errorNotConfigured"))
        return
      }
      if (!res.ok) {
        setStatus("error")
        setServerMsg(t("error"))
        return
      }
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
      setServerMsg(t("error"))
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-border/60 bg-muted/20 p-6 text-center">
        <p className="text-sm text-foreground">{t("success")}</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      <div className="space-y-2">
        <Label htmlFor="waitlist-name">{t("fields.name")}</Label>
        <Input
          id="waitlist-name"
          autoComplete="name"
          aria-invalid={!!form.formState.errors.name}
          {...form.register("name")}
        />
        {form.formState.errors.name ? (
          <p className="text-xs text-destructive">
            {form.formState.errors.name.message}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="waitlist-email">{t("fields.email")}</Label>
        <Input
          id="waitlist-email"
          type="email"
          autoComplete="email"
          aria-invalid={!!form.formState.errors.email}
          {...form.register("email")}
        />
        {form.formState.errors.email ? (
          <p className="text-xs text-destructive">
            {form.formState.errors.email.message}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="waitlist-specialty">{t("fields.specialty")}</Label>
        <Input
          id="waitlist-specialty"
          autoComplete="organization-title"
          aria-invalid={!!form.formState.errors.specialty}
          {...form.register("specialty")}
        />
        {form.formState.errors.specialty ? (
          <p className="text-xs text-destructive">
            {form.formState.errors.specialty.message}
          </p>
        ) : null}
      </div>

      {status === "error" && serverMsg ? (
        <p className="text-sm text-destructive" role="alert">
          {serverMsg}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="h-10 w-full rounded-none bg-[#0B1F3A] text-[#F5F4F0] hover:bg-[#0B1F3A]/85 sm:w-auto sm:min-w-[200px]"
      >
        {form.formState.isSubmitting ? t("submitting") : t("submit")}
      </Button>
    </form>
  )
}
