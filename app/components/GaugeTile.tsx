
import { GaugeChart } from "@/components/gauge-chart";

type GaugeTileProps = {
  value: number;
  label: string;
};

export function GaugeTile({ value, label }: GaugeTileProps) {
  return (
    <div className="bg-white rounded-md shadow-sm p-3 flex items-center justify-center">
      <GaugeChart value={value} label={label} />
    </div>
  );
}
