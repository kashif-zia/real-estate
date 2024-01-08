import React from 'react'
import { graphqlOperation,GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import {Storage} from "@aws-amplify/storage"
import { createProperty }from "../../graphql/mutations"
import { API } from 'aws-amplify'
const createPropertyMutation = `#graphql
mutation CreateProperty($input: CreatePropertyInput!) {
    createProperty(input: $input) {
      id
      title
      slug
      description
      property_purpose
      property_category
      propety_type
      property_price
      monthly_rent
      max_rooms
      baths
      kitchens
      beds
      city
      area
      gallery
      video
      features {
        main {
          flooring
          electricity_backup
          built_in_year
          parking_spaces
          floors
          floors_in_building
          lobby_in_building
          number_of_units
          elevators
          central_air_conditioning
          public_parking
          double_glazed_windows
          underground_parking
          waste_disposal
          central_heating
          service_elevators_in_building
          furnished
        }
        plot {
          nearby_water_resources
          disputed
          possesion
          sui_gas
          electricity
          tube_wells
          irrigation
          perimeter_fencing
          accessible_by_road
          boundary_wall
          boundary_lines
          land_fertility
          furnished
        }
        bussiness {
          broadban_internet_access
          cable_tv_ready
          intercom
          atm_machine
          mediaroom_in_building
          conference_room_in_building
        }
        community {
          swimming_pool
          lawn
          medical_center
          gym
          kids_play_area
          day_care_center
          mosque
          bbq_area
          community_center
        }
        healthcare {
          swimming_pool
          lawn
          jacuzzi
          sauna
        }
        nearby {
          schools
          hospitals
          shopping_malls
          restaurants
          airport_distance
          public_transport_service
        }
        other {
          emergency_exit
          cctv
          free_wifi
          free_parking
          air_conditioning
        }
      }
      contact_info {
        email
        landline
        mobile
      }
      address {
        address
        city
        landmark
        zipcode
      }
      createdAt
      ownerId
      updatedAt
    }
  }
`
const values = {
    "ownerId": "f764ea88-d011-70e6-1044-ae85fc79ca30",
    "property_purpose": "sell",
    "property_category": "",
    "propety_type": "house",
    "property_price": 2800,
    "monthly_rent": null,
    "max_rooms": "3",
    "beds": "4",
    "kitchens": "3",
    "baths": "3",
    "area": 85,
    "title": "as",
    "description": "asas",
    "address": {
        "address": "DHA Phase 3",
        "city": "Karachi",
        "landmark": "Baghbanpura",
        "zipcode": "54810"
    },
    "contact_info": {
        "email": "hamza2.idenbrid@gamil.com",
        "landline": "",
        "mobile": "03114340230"
    },
    "video": "https://www.youtube.com/shorts/ziy75XQ09y4",
    "features": {
        "main": {
            "flooring": "",
            "electricity_backup": "",
            "built_in_year": null,
            "parking_spaces": null,
            "floors": null,
            "floors_in_building": null,
            "lobby_in_building": null,
            "number_of_units": null,
            "elevators": null,
            "central_air_conditioning": false,
            "public_parking": false,
            "double_glazed_windows": false,
            "underground_parking": false,
            "waste_disposal": false,
            "central_heating": false,
            "service_elevators_in_building": false,
            "furnished": false
        },
        "plot": {
            "nearby_water_resources": false,
            "disputed": false,
            "possesion": false,
            "sui_gas": false,
            "electricity": false,
            "tube_wells": false,
            "irrigation": false,
            "perimeter_fencing": false,
            "accessible_by_road": false,
            "boundary_wall": false,
            "boundary_lines": false,
            "land_fertility": false
        },
        "bussiness": {
            "broadban_internet_access": false,
            "cable_tv_ready": false,
            "intercom": false,
            "atm_machine": false,
            "mediaroom_in_building": false,
            "conference_room_in_building": null
        },
        "community": {
            "swimming_pool": false,
            "lawn": false,
            "medical_center": false,
            "gym": false,
            "kids_play_area": false,
            "day_care_center": false,
            "mosque": false,
            "bbq_area": false,
            "community_center": false
        },
        "healthcare": {
            "swimming_pool": false,
            "lawn": false,
            "jacuzzi": false,
            "sauna": false
        },
        "nearby": {
            "schools": false,
            "hospitals": false,
            "shopping_malls": false,
            "restaurants": false,
            "airport_distance": null,
            "public_transport_service": false
        },
        "other": {
            "emergency_exit": true,
            "cctv": false,
            "free_wifi": false,
            "free_parking": false,
            "air_conditioning": false
        }
    },
    "slug": "as"
}

const ApiTest = () => {

const handleAPI = async () => {
    try{

        // const apicall = await API.graphql({query:createProperty,variables:{input:values},authMode:GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
        const apicall = await API.graphql({...graphqlOperation(createPropertyMutation,{input: values}), authMode:GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS})
        console.log(apicall,"api res")
    }
    catch(err){
        console.log(err,"api error")
    }
}


  return (
    <div className='container'>
        <button onClick={handleAPI} className='btn-primary btn'>CLick</button>
    
    </div>
  )
}

export default ApiTest
