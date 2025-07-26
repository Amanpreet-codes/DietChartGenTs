import {
  CardContent,
  CardHeader,
  CardTitle,
  Card,
  CardFooter
} from "@/components/ui/card"
import { Pie, PieChart } from "recharts";
import {
    type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  value: {
    label: "Value",
  },
  Protein: {
    label: "Protein",
    color: "var(--chart-1)",
  },
  Fat: {
    label: "Fat",
    color: "var(--chart-2)",
  },
  Carbs: {
    label: "Carbs",
    color: "var(--chart-3)"
  }
} satisfies ChartConfig

export default function MacroPieChart({data,title,footer}:{data:any[], title:string,footer?:React.ReactNode}){
    return(
            <Card>
                <CardContent className="flex-1 pb-0">
                <CardHeader className="items-center pb-0">
                    <CardTitle>{title}</CardTitle>
                 </CardHeader>
                <ChartContainer
                    config={chartConfig}
                    className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] w-full max-w-[350px] pb-0"
                    >
                <PieChart width={350} height={250}>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie data={data} dataKey="value" label nameKey="name" />
                </PieChart>
                </ChartContainer>
            </CardContent>
            {footer && (
                <CardFooter className="flex-col gap-2 text-sm">
                    {footer}
                </CardFooter>
            )}
            </Card>
    )
}