import axiosInstance from "../utils/apiConfig/apiConfig";

export const fetchAllProuducts = () => {
  return axiosInstance.get("/products/categories");
};
export const getAllProducts = (number: number) => {
  return axiosInstance.get(`/products/?limit=${number}`);
};
export const getAllProductsLimit = () => {
  return axiosInstance.get("/products");
};
