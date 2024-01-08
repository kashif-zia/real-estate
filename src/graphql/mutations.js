/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      avatar
      name
      gender
      birthday
      address
      city
      state
      zipcode
      bio
      email
      phone_number
      role
      email_verified
      status
      createdAt
      updatedAt
      username
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      avatar
      name
      gender
      birthday
      address
      city
      state
      zipcode
      bio
      email
      phone_number
      role
      email_verified
      status
      createdAt
      updatedAt
      username
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      avatar
      name
      gender
      birthday
      address
      city
      state
      zipcode
      bio
      email
      phone_number
      role
      email_verified
      status
      createdAt
      updatedAt
      username
      __typename
    }
  }
`;
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
      id
      title
      slug
      description
      property_purpose
      property_category
      propety_type
      property_price
      price_unit
      monthly_rent
      max_rooms
      baths
      kitchens
      beds
      city
      area
      area_unit
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
          __typename
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
          __typename
        }
        bussiness {
          broadban_internet_access
          cable_tv_ready
          intercom
          atm_machine
          mediaroom_in_building
          conference_room_in_building
          __typename
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
          __typename
        }
        healthcare {
          swimming_pool
          lawn
          jacuzzi
          sauna
          __typename
        }
        nearby {
          schools
          hospitals
          shopping_malls
          restaurants
          airport_distance
          public_transport_service
          __typename
        }
        other {
          emergency_exit
          cctv
          free_wifi
          free_parking
          air_conditioning
          __typename
        }
        __typename
      }
      contact_info {
        email
        landline
        mobile
        __typename
      }
      address {
        address
        city
        landmark
        zipcode
        __typename
      }
      status
      createdAt
      ownerId
      owner {
        id
        avatar
        name
        gender
        birthday
        address
        city
        state
        zipcode
        bio
        email
        phone_number
        role
        email_verified
        status
        createdAt
        updatedAt
        username
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
      id
      title
      slug
      description
      property_purpose
      property_category
      propety_type
      property_price
      price_unit
      monthly_rent
      max_rooms
      baths
      kitchens
      beds
      city
      area
      area_unit
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
          __typename
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
          __typename
        }
        bussiness {
          broadban_internet_access
          cable_tv_ready
          intercom
          atm_machine
          mediaroom_in_building
          conference_room_in_building
          __typename
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
          __typename
        }
        healthcare {
          swimming_pool
          lawn
          jacuzzi
          sauna
          __typename
        }
        nearby {
          schools
          hospitals
          shopping_malls
          restaurants
          airport_distance
          public_transport_service
          __typename
        }
        other {
          emergency_exit
          cctv
          free_wifi
          free_parking
          air_conditioning
          __typename
        }
        __typename
      }
      contact_info {
        email
        landline
        mobile
        __typename
      }
      address {
        address
        city
        landmark
        zipcode
        __typename
      }
      status
      createdAt
      ownerId
      owner {
        id
        avatar
        name
        gender
        birthday
        address
        city
        state
        zipcode
        bio
        email
        phone_number
        role
        email_verified
        status
        createdAt
        updatedAt
        username
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
      id
      title
      slug
      description
      property_purpose
      property_category
      propety_type
      property_price
      price_unit
      monthly_rent
      max_rooms
      baths
      kitchens
      beds
      city
      area
      area_unit
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
          __typename
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
          __typename
        }
        bussiness {
          broadban_internet_access
          cable_tv_ready
          intercom
          atm_machine
          mediaroom_in_building
          conference_room_in_building
          __typename
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
          __typename
        }
        healthcare {
          swimming_pool
          lawn
          jacuzzi
          sauna
          __typename
        }
        nearby {
          schools
          hospitals
          shopping_malls
          restaurants
          airport_distance
          public_transport_service
          __typename
        }
        other {
          emergency_exit
          cctv
          free_wifi
          free_parking
          air_conditioning
          __typename
        }
        __typename
      }
      contact_info {
        email
        landline
        mobile
        __typename
      }
      address {
        address
        city
        landmark
        zipcode
        __typename
      }
      status
      createdAt
      ownerId
      owner {
        id
        avatar
        name
        gender
        birthday
        address
        city
        state
        zipcode
        bio
        email
        phone_number
        role
        email_verified
        status
        createdAt
        updatedAt
        username
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
