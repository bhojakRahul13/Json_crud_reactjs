import axios from "axios";

// creating global instance for the axios to call apis
export const AXIOS_INSTANCE = axios.create();
AXIOS_INSTANCE.defaults.headers["Content-Type"] = "application/json";



// Private apis
// const token = localStorage.getItem("authToken");
// AXIOS_INSTANCE.defaults.headers.common["Authorization"] = `Bearer ${token}`;
