import {
   SET_TOKEN,
   SET_CSRF,
   SET_NAME,
   SET_EMAIL,
   SET_CLASS_ID_LIST,
} from "../actions/user";

const initialState = {
   token: "",
   CSRF: "",
   name: "",
   email: "",
   class_id_list: "",
};

// const getToken = async () => {
//    initialState.token = await AsyncStorage.getItem("token");
// };

// getToken();

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_TOKEN:
         return { ...state, token: action.token };
      case SET_CSRF:
         return { ...state, CSRF: action.CSRF };
      case SET_NAME:
         return { ...state, name: action.name };
      case SET_EMAIL:
         return { ...state, email: action.email };
      case SET_CLASS_ID_LIST:
         return { ...state, class_id_list: action.class_id_list };
      default:
         return state;
   }
};

export default userReducer;
