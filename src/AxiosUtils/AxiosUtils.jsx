import axios from "axios";
import { BaseUrl } from "../constants/constants";

const createAxioxClient = (baseURL) =>{
    const client = axios.create({
        baseURL,
        timeout: 8000,
        timeoutErrorMessage: "Request timeout Please Try Again!!!"
    })
    return client
}

const attatToken = (req, tokenName) =>{
    let authToken = localStorage.getItem('token')
    const accesstoken = JSON.parse(authToken);
    if (accesstoken){
        req.headers.Authorization = `Bearer ${accesstoken.access}`;
    }
    return req
}

const userAxiosInstant = createAxioxClient(BaseUrl)
userAxiosInstant.interceptors.request.use(async (req) =>{
    const modifiedReq = attatToken(req, 'token')
    return modifiedReq
})

export {userAxiosInstant}