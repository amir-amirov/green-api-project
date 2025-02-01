import axios from "axios";

// export const accessToken = "token";

// export const authAccessTokenHeaderName = "Authorization";

// const navigate = useNavigate();

const baseService = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// export const saveTokens = (access_token: string) => {
//   store.dispatch(authActions.setToken(access_token));
// };

// export const setAuthHeader = (access_token: string) => {
//   baseService.defaults.headers.common[
//     authAccessTokenHeaderName
//   ] = `Bearer ${access_token}`;
// };

// export const clearToken = () => {
//   baseService.defaults.headers.common[authAccessTokenHeaderName] = "";
//   store.dispatch(authActions.removeToken());
// };

// export const handleLogout = () => {
//   console.log("Logging out...");

//   store.dispatch(userActions.removeUserDetails());

//   // Clear the Authorization header
//   delete baseService.defaults.headers.common["Authorization"];

//   // Optionally, redirect the user (if using React Router)
//   const navigate = useNavigate();
//   navigate("/"); // Ensure this matches your app's routing
// };

// baseService.interceptors.response.use(
//   (response) => {
//     // console.log("Response", response);
//     // console.log("Response Status:", response.status);
//     // console.log("Response Message:", response.data.message);

//     if (response.data.data && response.data.data[accessToken]) {
//       saveTokens(response.data.data[accessToken]);
//       setAuthHeader(response.data.data[accessToken]);
//     }
//     return response;
//   },
//   async (error) => {
//     console.log("Error: ", error.message);
//     console.log("Error message: ", error.response.data.message);

//     if (error.response?.status === 401) {
//       console.log("Error logout");
//       handleLogout();
//     }
//     return Promise.reject(error);
//   }
// );

// baseService.interceptors.request.use(
//   (config) => {
//     console.log("Request sent:", config);
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default baseService;
