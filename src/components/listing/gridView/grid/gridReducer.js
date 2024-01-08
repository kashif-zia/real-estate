const initialGrid = {
  gridSize: "",
  gridStyle: "",
  toPage: 1,
  totalPages: "",
  productCount: "",
};

const gridReducer = (state, action) => {
  switch (action.type) {
    case "gridSize":
      return { ...state, gridSize: action.payload };
    case "gridStyle":
      return { ...state, gridStyle: action.payload };
    case "toPage":
      return { ...state, toPage: action.payload };
    case "totalPages":
      return { ...state, totalPages: action.payload };
    case "productCount":
      return { ...state, productCount: action.payload };
    default:
      return state;
  }
};

export { gridReducer, initialGrid };
