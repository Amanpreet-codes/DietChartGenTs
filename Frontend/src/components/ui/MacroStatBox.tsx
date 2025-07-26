type MacroStatBoxProps = {
    label: string;
    value: number;
    colorClass: string;
    unit?: string;
};

export default function MacroStatBox({
    label,
    value,
    colorClass,
    unit = "g"
}: MacroStatBoxProps){
    return(
        <div className="p-3 bg-card rounded-lg border text-center">
            <div className={`text-2xl font-bold ${colorClass}`}>
                {value}
                {unit !== "" ? unit: ""}
            </div>
            <div className="text-sm text-muted-foreground">{label}</div>
        </div>
    );
}