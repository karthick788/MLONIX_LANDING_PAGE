import { SectionHeader } from "./Section";

const team = [
  { name: "Founding Team", role: "Engineering & Research", bio: "Cross-disciplinary engineers and researchers driving the platform forward." },
  { name: "Advisory Network", role: "Water & Environment", bio: "Domain experts contributing scientific and policy perspective." },
  { name: "Partners", role: "Institutional Collaborators", bio: "Working alongside agencies and institutions on validation programs." },
];

export function Team() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24">
      <div className="container-mx">
        <SectionHeader
          eyebrow="Team"
          title="Built by Engineers and Problem Solvers"
          description="A team focused on building real, durable infrastructure for environmental intelligence."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-semibold text-primary">
                {m.name
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{m.name}</h3>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
