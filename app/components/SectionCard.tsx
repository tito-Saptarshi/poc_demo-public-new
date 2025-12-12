
type SectionCardProps = {
  title: string;
  children: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
};

export function SectionCard({
  title,
  children,
  headerClassName = "bg-[#4CAF50] text-white",
  bodyClassName = "",
}: SectionCardProps) {
  return (
    <div className="mt-6">
      <div
        className={`text-center py-2 rounded-t-md font-semibold text-base ${headerClassName}`}
      >
        {title}
      </div>
      <div
        className={`border border-t-0 border-border rounded-b-md p-4 ${bodyClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
