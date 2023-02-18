const initialState = {
  user: [],
  stats: [],
  projects: [],
  items: [],
  expenseTypes: [],
  suppliers: [],
  employees: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'ADD_STATS':
      return {
        ...state,
        stats: action.payload,
      };
      case 'ADD_PRO':
      return {
        ...state,
        projects: action.payload,
      };
      case 'ADD_ITEMS':
      return {
        ...state,
        items: action.payload,
      };
      case 'ADD_EXTYPES':
      return {
        ...state,
        expenseTypes: action.payload,
      };
      case 'ADD_SUP':
      return {
        ...state,
        suppliers: action.payload,
      };
      case 'ADD_EMP':
      return {
        ...state,
        employees: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
