import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as SectionHeader } from "./Section-C6O3MsTN.mjs";
import { m as Mail, n as MapPin, o as CircleCheck, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, l as literalType } from "../_libs/zod.mjs";
const schema = objectType({
  name: stringType().trim().min(1, "Name is required").max(100),
  email: stringType().trim().email("Enter a valid email").max(255),
  organization: stringType().trim().max(120).optional().or(literalType("")),
  audience: stringType().min(1, "Select an option"),
  message: stringType().trim().min(1, "Message is required").max(1e3)
});
const audiences = [
  "Municipal Organization",
  "Research Institution",
  "Enterprise",
  "Strategic Partner",
  "Investor"
];
function Contact() {
  const [errors, setErrors] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors = {};
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-background py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mx grid gap-14 lg:grid-cols-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "Work With Us",
          title: "Let's build groundwater intelligence together.",
          description: "We work with municipal organizations, research institutions, enterprises, strategic partners and investors aligned with our mission."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-10 space-y-5 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@mlonix.com", className: "hover:underline", children: "mlonix.offcial2026@gmail.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "India" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-6 sm:p-8", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10 text-teal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold text-foreground", children: "Thank you" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-sm text-muted-foreground", children: "Your message has been received. A member of the MLONIX team will be in touch shortly." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "grid gap-5 sm:grid-cols-2", noValidate: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name", error: errors.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", error: errors.email }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Organization", name: "organization", optional: true, error: errors.organization }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "audience", className: "text-xs font-medium text-foreground", children: "I represent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            id: "audience",
            name: "audience",
            defaultValue: "",
            className: "h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select an audience" }),
              audiences.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a, children: a }, a))
            ]
          }
        ),
        errors.audience && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.audience })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "text-xs font-medium text-foreground", children: "How can we help?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            id: "message",
            name: "message",
            rows: 5,
            className: "rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
            placeholder: "Tell us briefly about your use case or interest."
          }
        ),
        errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.message })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "submit",
          className: "sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: [
            "Request Demo ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] }) }) })
  ] }) });
}
function Field({
  label,
  name,
  type = "text",
  optional,
  error
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: name, className: "text-xs font-medium text-foreground", children: [
      label,
      " ",
      optional && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "(optional)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id: name,
        name,
        type,
        className: "h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: error })
  ] });
}
export {
  Contact as C
};
