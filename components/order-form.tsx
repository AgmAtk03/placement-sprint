"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { contact, formatInr, skus } from "@/lib/site";

const LEAD_KEY = "ps-lead";

export type Lead = {
  name: string;
  whatsapp: string;
  college: string;
  course: string;
  semester: string;
  email: string;
  parentPays: boolean;
  bump: boolean;
};

export function readLead(): Partial<Lead> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(LEAD_KEY);
    return raw ? (JSON.parse(raw) as Lead) : null;
  } catch {
    return null;
  }
}

export function OrderForm() {
  const router = useRouter();
  const [bump, setBump] = useState(false);
  const [parentPays, setParentPays] = useState(false);
  const [error, setError] = useState("");

  const total = skus.starter.price + (bump ? skus.bump.price : 0);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const whatsapp = String(data.get("whatsapp") ?? "").trim();
    const college = String(data.get("college") ?? "").trim();
    const course = String(data.get("course") ?? "").trim();
    const semester = String(data.get("semester") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    if (!name || !whatsapp || !college || !course || !semester) {
      setError("Fill name, WhatsApp, college, course, and semester — we use these for delivery, not ads.");
      return;
    }

    const lead: Lead = {
      name,
      whatsapp,
      college,
      course,
      semester,
      email,
      parentPays,
      bump,
    };
    sessionStorage.setItem(LEAD_KEY, JSON.stringify(lead));
    const sku = bump ? "starter-bump" : "starter";
    router.push(`/checkout?sku=${sku}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" placeholder="First name is enough" />
        <Field
          label="WhatsApp number"
          name="whatsapp"
          placeholder="10-digit mobile"
          inputMode="tel"
        />
        <Field label="College" name="college" placeholder="College / university" />
        <div className="space-y-1.5">
          <Label htmlFor="course">Course</Label>
          <select
            id="course"
            name="course"
            defaultValue="CSE"
            className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-base md:text-sm"
          >
            <option>CSE</option>
            <option>BCA</option>
            <option>BBA</option>
            <option>IT / allied</option>
            <option>Other undergrad</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="semester">Semester</Label>
          <select
            id="semester"
            name="semester"
            defaultValue="6"
            className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-base md:text-sm"
          >
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <Field
          label="Email (optional)"
          name="email"
          placeholder="If a parent wants the receipt"
          type="email"
        />
      </div>

      <label className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-3 text-sm">
        <Checkbox
          checked={parentPays}
          onCheckedChange={(v) => setParentPays(v === true)}
          className="mt-0.5"
        />
        <span>
          A parent is paying. We will keep the WhatsApp thread with the student;
          parent can be copied on the first note if email is given.
        </span>
      </label>

      <label className="flex items-start gap-3 rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 p-4">
        <Checkbox
          checked={bump}
          onCheckedChange={(v) => setBump(v === true)}
          className="mt-0.5"
        />
        <span className="text-sm leading-6">
          <strong>Order bump · +{formatInr(skus.bump.price)}</strong>
          <br />
          {skus.bump.name}. {skus.bump.blurb}
        </span>
      </label>

      {error ? (
        <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          Total today{" "}
          <span className="text-xl font-semibold">{formatInr(total)}</span>
        </p>
        <Button type="submit" className="h-12 rounded-xl px-6 text-base font-semibold">
          Continue to mock checkout
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Demo only — next screen is a Razorpay / Stripe placeholder. Prefer
        WhatsApp?{" "}
        <a
          href={contact.starter}
          className="font-medium underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          DM the kit
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  inputMode,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        inputMode={inputMode}
        className="h-11 text-base"
      />
    </div>
  );
}
