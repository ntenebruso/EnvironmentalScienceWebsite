"use client";

import { init, EChartsOption, ECharts } from "echarts";
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface EChartProps {
    option: EChartsOption;
}

export default function EChart({
    option,
    ...props
}: EChartProps & React.HTMLAttributes<HTMLDivElement>) {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let chart: ECharts | undefined;

        if (chartRef.current != null) {
            chart = init(chartRef.current);
            chart.setOption(option);
        }

        function resizeChart() {
            chart?.resize();
        }

        window.addEventListener("resize", resizeChart);

        return () => {
            chart?.dispose();
            window.removeEventListener("resize", resizeChart);
        };
    }, []);

    return (
        <div
            {...props}
            className={cn("h-full w-full", props.className)}
            ref={chartRef}
        ></div>
    );
}
