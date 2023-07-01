import axiosInstance from "../utils/apiConfig/apiConfig";

export const fetchAllProuducts = () => {
  return axiosInstance.get("/products/categories");
};
