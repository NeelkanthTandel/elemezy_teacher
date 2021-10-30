import { API_URL } from "../keys";

const getCSRFToken = async (token) => {
   try {
      const response = await fetch(`${API_URL}/csrf`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + token,
         },
      });
      // const data = await response.json();
      // console.log(token);
      if (JSON.parse(JSON.stringify(response)).ok) {
         return JSON.parse(JSON.stringify(response))
            .headers.map["set-cookie"].split(";")[0]
            .split("=")[1];
      } else {
         return false;
      }
   } catch (err) {
      console.log("csrf: ", err);
   }
};

export default getCSRFToken;
