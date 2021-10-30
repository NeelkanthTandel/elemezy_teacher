export const SET_TOKEN = "SET_TOKEN";
export const SET_CSRF = "SET_CSRF";
export const SET_NAME = "SET_NAME";
export const SET_EMAIL = "SET_EMAIL";
export const SET_CLASS_ID_LIST = "SET_CLASS_ID_LIST";

export const setToken = (token) => {
   return { type: SET_TOKEN, token };
};

export const setCSRF = (CSRF) => {
   return { type: SET_CSRF, CSRF };
};

export const setName = (name) => {
   return { type: SET_NAME, name };
};

export const setEmail = (email) => {
   return { type: SET_EMAIL, email };
};

export const setClassIdList = (class_id_list) => {
   return { type: SET_CLASS_ID_LIST, class_id_list };
};
