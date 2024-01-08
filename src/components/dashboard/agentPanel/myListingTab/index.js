import React, { useEffect, useState } from "react";
import GridView from "../../../listing/gridView/grid/GridView";
import { API, graphqlOperation } from "aws-amplify";
import {listPropertyByUserId} from "../../../../graphql/queries"
import { useSelector } from "react-redux";
const MyListingTab = () => {
  const [userProperties, setUserProperties] = useState([])
  const auth = useSelector((state)=>state.auth)
  const getPropertiesAPI = async() =>{
    try{
      console.log(auth, "user auth")
      const propertyAPI = await API.graphql({query:listPropertyByUserId,variables:{ownerId:auth.id}})
      const propertiesbyID = propertyAPI.data.listPropertyByUserId.items
      setUserProperties(propertiesbyID)
      console.log(propertiesbyID,"propertyAPI")
    }
    catch(err){
      console.log(err,"GET PROPERTY API ERR")
    }
  }

  useEffect(()=>{
    getPropertiesAPI()
  },[])
  return (
    <div className='dashboard-content'>
      <div className='tab-listing' id='listing'>
        <div className='property-section'>
          <div className='property-grid-2 ratio_63'>
            <GridView userProperties={userProperties} size={2} gridType={"list-view"} gridBar={true} userPanel={true} myList={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListingTab;
