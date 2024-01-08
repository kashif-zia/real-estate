/* The above code is a React component that is using the dynamic import to load the react-apexcharts
library. */
import dynamic from "next/dynamic";
import React from "react";
import { agentSalesData } from "../../../../../data/chartData";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesByAgent = () => {
  return (
    <div className='col-xl-5 col-md-6'>
      <div className='common-card sales-agent'>
        <div className='common-header'>
          <h5>Sales by agent</h5>
        </div>
        <Chart options={agentSalesData?.options} series={agentSalesData?.series} type='bar' height={375} id='agent-sales' />
      </div>
    </div>
  );
};

export default SalesByAgent;
