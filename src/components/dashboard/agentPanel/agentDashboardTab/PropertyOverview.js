import React from "react";
import { MoreHorizontal } from "react-feather";
import Img from "../../../../libs/utils/BackgroundImageRatio";

const PropertyOverview = () => {
  return (
    <div className='col-xl-8 xl-60 col-md-12'>
      <div className='common-card property-overview'>
        <div className='common-header'>
          <h5>Property overview</h5>
        </div>
        <div className='table-responsive'>
          <table className='table table-bordernone'>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='d-flex'>
                    <Img src='/assets/images/property/2.jpg' className='img-fluid' alt='' />
                    <h6>Orchard House</h6>
                  </div>
                </td>
                <td>Sold</td>
                <td>15/2/22</td>
                <td>
                  <span className='label label-light label-success'>Paid</span>
                </td>
                <td>
                  <MoreHorizontal />
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex'>
                    <Img src='/assets/images/property/3.jpg' className='img-fluid' alt='' />
                    <h6>Neverland</h6>
                  </div>
                </td>
                <td>Sold</td>
                <td>8/9/22</td>
                <td>
                  <span className='label label-light label-success'>Paid</span>
                </td>
                <td>
                  <MoreHorizontal />
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex'>
                    <Img src='/assets/images/property/4.jpg' className='img-fluid' alt='' />
                    <h6>Sea Breezes</h6>
                  </div>
                </td>
                <td>Sold</td>
                <td>26/10/22</td>
                <td>
                  <span className='label label-light label-success'>Paid</span>
                </td>
                <td>
                  <MoreHorizontal />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;
