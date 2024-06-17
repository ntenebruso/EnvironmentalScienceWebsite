"use client";

import { EChartsOption } from "echarts";

export const ewasteGeneratedGraph: EChartsOption = {
    xAxis: {
        type: "category",
        data: [
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
        ],
        name: "Year",
        nameLocation: "middle",
        nameGap: 25,
    },
    yAxis: {
        type: "value",
        name: "E-waste generated (million metric tons)",
        nameLocation: "middle",
        nameGap: 35,
    },
    series: [
        {
            data: [
                33.8, 35.8, 37.8, 39.8, 44.4, 46.4, 48.2, 50, 51.8, 53.6, 57.6,
                59.8, 61.6,
            ],
            type: "bar",
            label: {
                show: true,
            },
        },
    ],
    title: {
        show: true,
        text: "E-Waste Generated Worldwide from 2010-2022",
        textStyle: {
            color: "#fff",
        },
        subtext: "Source: Bruna Alves",
    },
};

export const ewasteCountryGraph: EChartsOption = {
    xAxis: {
        type: "value",
        name: "E-Waste Produced (Megatons)",
        nameLocation: "middle",
        nameGap: 25,
    },
    yAxis: {
        type: "category",
        data: ["Asia", "The Americas", "Europe", "Africa", "Oceania"],
        name: "Country",
        nameLocation: "middle",
        nameGap: 120,
        inverse: true,
    },
    series: [
        {
            data: [24.9, 13.1, 12, 2.9, 0.7],
            type: "bar",
            label: {
                show: true,
            },
            itemStyle: {
                color: "#16a34a",
            },
        },
    ],
    title: {
        show: true,
        text: "Continents Producing the Most E-Waste",
        textStyle: {
            color: "#fff",
        },
        subtext: "Source: 2020 E-Waste Monitor",
    },
    grid: {
        containLabel: true,
    },
};

export const ewasteCapitaGraph: EChartsOption = {
    xAxis: {
        type: "value",
        name: "E-Waste Produced (kg)",
        nameLocation: "middle",
        nameGap: 25,
    },
    yAxis: {
        type: "category",
        data: ["Europe", "Oceania", "The Americas", "Asia", "Africa"],
        name: "Country",
        nameLocation: "middle",
        nameGap: 120,
        inverse: true,
    },
    series: [
        {
            data: [16.2, 16.1, 13.3, 5.6, 2.5],
            type: "bar",
            label: {
                show: true,
            },
            itemStyle: {
                color: "#16a34a",
            },
        },
    ],
    title: {
        show: true,
        text: "Continents Producing the Most E-Waste Per Capita",
        textStyle: {
            color: "#fff",
        },
        subtext: "Source: 2020 E-Waste Monitor",
    },
    grid: {
        containLabel: true,
    },
};

export const ewasteTypeGraph: EChartsOption = {
    darkMode: true,
    title: {
        text: "E-Waste Generation by Type",
        textStyle: {
            color: "#fff",
        },
    },
    legend: {
        top: 30,
        textStyle: {
            color: "#fff",
        },
    },
    tooltip: {
        valueFormatter: (value) => value + " Mt",
    },
    dataset: {
        source: [
            ["Type", "Generated"],
            ["Temperature exchange equipment", 10.8],
            ["Screens and monitors", 6.7],
            ["Lamps", 0.9],
            ["Large equipment", 13.1],
            ["Small equipment", 17.4],
            ["IT & telecommunications devices", 4.7],
        ],
    },
    series: [
        {
            type: "pie",
            top: 50,
            label: {
                show: true,
                formatter: "{b}\n{d}%",
            },
        },
    ],
};
