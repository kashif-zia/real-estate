import React, { Fragment } from "react";

const PropertyLabel = ({ property_purpose, featured, status }) => {

  return (
    <>

    
          <Fragment>
           {property_purpose == "sell" ?
              <div>
                <span className='label label-primary'>Sale</span>
              </div>
            :
          
              <div>
                <span className='label label-danger'>Rent</span>
              </div>
           } 
         
              {featured && <div>
                <span className='label label-success'>Featured</span>
              </div>}
            
            
             {status && status == "active"  ?
             <div>
                <span className='label label-shadow'> Active</span>
              </div> :
             <div>
                <span className='label label-shadow'>In Active</span>
              </div>
              }
           
          </Fragment>
        
    </>
  );
};

export default PropertyLabel;
