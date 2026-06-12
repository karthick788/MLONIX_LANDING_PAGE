import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import logoImage from "../../../Images/MLONIX_NEW_LOGO-removebg-preview.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-mx py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logoImage} alt="MLONIX" className="h-7 w-7 object-contain" />
              <span className="font-display text-lg font-semibold tracking-tight text-[#0060EB]">MLONIX</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Your electricity bill knows your water level. We just learned to read it.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Headquartered in India
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-foreground">Team</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Platform</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/product" className="text-muted-foreground hover:text-foreground">Product</Link></li>
              <li><Link to="/technology" className="text-muted-foreground hover:text-foreground">Technology</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Request Demo</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MLONIX. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a aria-label="Email" href="mlonix.offcial2026@gmail.com" className="text-muted-foreground hover:text-foreground"><Mail className="h-4 w-4" /></a>
            <a aria-label="LinkedIn" href="#" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            <a aria-label="Twitter" href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-4 w-4" /></a>
            <a aria-label="GitHub" href="#" className="text-muted-foreground hover:text-foreground"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
