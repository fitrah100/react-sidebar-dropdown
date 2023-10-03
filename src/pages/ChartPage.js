import React from "react";
import {Chart} from "react-google-charts";


export const data   =[
    ["Year","Total Customer","Total Expenses"],
    ["2020",1000,4000],
    ["2021",3000,4601],
    ["2022",1500,5000],
    ["2023",4000,9000]
];

export const Options={
        title: "Customer Expense",
        subtitle: "Customer Expenses 2020-2023",
        legend: {
            position: 'right',
            alignment: 'center',
            textStyle: {
                color: 'black',
                fontSize: 14,
            }
        },
        fontName: 'Roboto',
        fontSize: 20
};

const ChartPage = () =>{
    return(
        <div className="chart">
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data}
                options={Options}
            />
         </div>
    );
};
export default ChartPage;