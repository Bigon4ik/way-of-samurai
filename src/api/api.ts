import axios from 'axios';


const instace=axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{"API-KEY":"1b6ec0fa-0d78-4647-9fbf-7f7f08013c0f"}
})

export const usersAPI={
    getUsers(currentPage: any, pageSize: any){
    return instace.get(`users?page=${currentPage}&count=${pageSize}`, {

    })
        .then(response => response.data)
}}
