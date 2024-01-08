import dynamic from "next/dynamic";
import React from "react";
import { availablePropertyData } from "../../../../../data/chartData";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AvailableProperty = () => {
  return (
    <div className='col-xl-4 xl-40 col-md-6'>
      <div className='common-card available-property'>
        <div className='common-header'>
          <h5>Available property</h5>
        </div>
        <div className='radial-property'>
          <div id='radial'>
            <Chart options={availablePropertyData.options} series={availablePropertyData.series} type='radialBar' id='radial' height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableProperty;
