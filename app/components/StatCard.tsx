
type StatCardProps = {
  label: string;
  value: string | number;
  headerClassName?: string;
  bodyClassName?: string;
  valueClassName?: string;
};

export function StatCard({
  label,
  value,
  headerClassName = "bg-[#4CAF50] text-white",
  bodyClassName = "bg-white",
  valueClassName = "text-4xl font-bold text-foreground",
}: StatCardProps) {
  return (
    <div className="text-center">
      <div
        className={`py-2 rounded-t-md text-sm font-medium ${headerClassName}`}
      >
        {label}
      </div>
      <div
        className={`border border-t-0 border-border rounded-b-md py-4 ${bodyClassName}`}
      >
        <span className={valueClassName}>{value}</span>
      </div>
    </div>
  );
}
