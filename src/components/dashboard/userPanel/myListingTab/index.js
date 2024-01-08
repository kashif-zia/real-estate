import React from "react";
import GridView from "../../../listing/gridView/grid/GridView";

const MyListingTab = () => {
  return (
    <div className='dashboard-content'>
      <div className='tab-listing' id='listing'>
        <div className='property-section'>
          <div className='property-grid-2 ratio_63'>
            <GridView size={2} gridType={"list-view"} gridBar={true} userPanel={true} myList={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListingTab;
