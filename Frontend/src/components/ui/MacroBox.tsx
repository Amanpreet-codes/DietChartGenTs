type MacroBoxProps = {
  label: string;
  value: number;
  color: string;
};

export default function MacroBox({ label, value, color }: MacroBoxProps) {
  return (
    <div className="p-2 bg-muted/50 rounded border">
      <div className={`font-semibold ${color}`}>{value}g</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
