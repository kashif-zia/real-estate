/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
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
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const propertiesBySlug = /* GraphQL */ `
  query PropertiesBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    propertiesBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listPropertyByUserId = /* GraphQL */ `
  query ListPropertyByUserId(
    $ownerId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertyByUserId(
      ownerId: $ownerId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
