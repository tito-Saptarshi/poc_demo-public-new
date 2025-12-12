import Link from "next/link";

export function HomePageCard({
   app: { name, href, active },
}: {
  app: { name: string; href: string; active: boolean };
}) {
  return (
    <Link
      key={name}
      href={href}
      className={`p-4 md:p-6 rounded-lg border text-center transition-colors ${
        active
          ? "bg-card border-border hover:bg-accent text-foreground"
          : "bg-muted text-muted-foreground cursor-not-allowed"
      }`}
    >
        <span className="text-sm md:text-base font-medium">{name}</span>
    </Link>
  );
}
