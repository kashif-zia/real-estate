export const InputForm = [
  { name: "propertyStatus", label: "Property Status", size: "12", options: ["Property Status", "For Rent", "For Sale"] },
  { name: "propertyType", label: "Property Type", size: "12", options: ["Property Type", "Apartment", "Family House", "Cottage", "Condominium"] },
  { name: "maxRooms", label: "Rooms", size: "6", options: ["Max Rooms", 1, 2, 3, 4, 5, 6] },
  { name: "bed", label: "Bed", size: "6", options: ["Bed", 1, 2, 3, 4] },
  { name: "bath", label: "Bath", size: "6", options: ["Bath", 1, 2, 3, 4] },
  { name: "agencies", label: "Agencies", size: "6", options: ["Agencies", "Lincoln", "Blue Sky", "Zephry", "Premiere"] },
];

export const createPropertyInputForms = [
  { name: "propertyType", label: "Property Type", size: "12", options: ["Property Type", "Apartment", "Family House", "Cottage", "Condominium"], validation: { required: true } },
  { name: "propertyStatus", label: "Property Status", size: "12", options: ["Property Status", "For Rent", "For Sale"], validation: { required: true } },
  { name: "propertyPrice", label: "Property Price", placeHolder: "$2800", validation: { required: true } },
  { name: "maxRooms", label: "Rooms", size: "6", options: ["Max Rooms", 1, 2, 3, 4, 5, 6], validation: { required: true } },
  { name: "bed", label: "Bed", size: "6", options: ["Bed", 1, 2, 3, 4], validation: { required: true } },
  { name: "bath", label: "Bath", size: "6", options: ["Bath", 1, 2, 3, 4], validation: { required: true } },
  { name: "propertyArea", label: "Property Area", placeHolder: "85 Sq Ft", validation: { required: true } },
  { name: "propertyPrice", label: "Property Price", placeHolder: "$2800", validation: { required: true } },
  { name: "agencies", label: "Agencies", size: "6", options: ["Agencies", "Lincoln", "Blue Sky", "Zephry", "Premiere"], validation: { required: true } },
];
