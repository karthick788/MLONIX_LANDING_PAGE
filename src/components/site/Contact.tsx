import { useState } from "react";
import { Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { SectionHeader } from "./Section";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  organization: z.string().trim().max(120).optional().or(z.literal("")),
  audience: z.string().min(1, "Select an option"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const audiences = [
  "Municipal Organization",
  "Research Institution",
  "Enterprise",
  "Strategic Partner",
  "Investor",
];

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0]?.toString();
        if (k && !fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="container-mx grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Work With Us"
            title="Let's build groundwater intelligence together."
            description="We work with municipal organizations, research institutions, enterprises, strategic partners and investors aligned with our mission."
          />

          <ul className="mt-10 space-y-5 text-sm">
            <li className="flex items-start gap-3 text-foreground">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href="mailto:hello@mlonix.com" className="hover:underline">mlonix.offcial2026@gmail.com</a>
            </li>
            <li className="flex items-start gap-3 text-foreground">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>India</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <CheckCircle2 className="h-10 w-10 text-teal" />
                <h3 className="font-display text-2xl font-semibold text-foreground">Thank you</h3>
                <p className="max-w-md text-sm text-muted-foreground">
                  Your message has been received. A member of the MLONIX team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
                <Field label="Full name" name="name" error={errors.name} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <Field label="Organization" name="organization" optional error={errors.organization} />
                <div className="flex flex-col gap-2">
                  <label htmlFor="audience" className="text-xs font-medium text-foreground">
                    I represent
                  </label>
                  <select
                    id="audience"
                    name="audience"
                    defaultValue=""
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="" disabled>Select an audience</option>
                    {audiences.map((a) => <option key={a} value={a}>{a}</option>)}
                  </select>
                  {errors.audience && <p className="text-xs text-destructive">{errors.audience}</p>}
                </div>
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-medium text-foreground">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Tell us briefly about your use case or interest."
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Request Demo <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", optional, error,
}: { label: string; name: string; type?: string; optional?: boolean; error?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs font-medium text-foreground">
        {label} {optional && <span className="text-muted-foreground">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
