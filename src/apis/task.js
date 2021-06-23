import axiosService from "./../common/axiosService";
import { API_ENDPOINT } from "./../constants/index";
import qs from "query-string";
const url = "tasks";
//http://localhost3000/tasks METHOD: GET
export const getList = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};
//http://localhost3000/tasks METHOD: POST
export const addTask = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};
//http://localhost3000/tasks/:id METHOD: PUT
export const updateTask = (data,id) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${id}`, data);
}
//http://localhost3000/tasks/:id METHOD: DELETE
export const deleteTask = (id) => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${id}`);
}

