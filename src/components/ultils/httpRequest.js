import axios from "axios";

console.log(process.env);

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

export const get = async (path ,options = {}) =>{
    const response = await httpRequest.get(path, options);
    return response.data
}
export const post = async (path ,options = {}) =>{
    const response = await httpRequest.post(path, options);
    return response.data
}
export const get2 = async (path ,options = {}) =>{
    const response = await httpRequest.delete(path, options);
    return response.data
}

export default httpRequest