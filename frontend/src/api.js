import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response)
);

const startSearch = async () => {
  return await instance.get("/apps").then((res) => {
    return res.data;
  });
};

const searchKeyword = async (keyword) => {
  return await instance.get(`/apps/${keyword}`).then((res) => {
    console.log("resdata", res.data);
    return res.data;
  });
};

export { startSearch, searchKeyword };
