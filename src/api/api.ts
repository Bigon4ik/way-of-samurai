import axios from 'axios';


const instace = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '1b6ec0fa-0d78-4647-9fbf-7f7f08013c0f'}
})

export const usersAPI = {
    getUsers(currentPage:any, pageSize: any) {
        return instace.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => response.data)
    },
    follow(userId:number){
        return instace.post(`follow/${userId}`,)
    },
    unFollow(userId:number){
        return instace.delete(`follow/${userId}`,)
    },
}
export const authAPI = {
    me(){
        return instace.get(`auth/me`)
    },
    login(email:string,password:string,rememberMe:boolean=false){
        return instace.post(`auth/login`,{email,password,rememberMe})
    },logout(){
        return instace.delete(`auth/login`)
    },

}
export const profileAPI = {
    getProfile(userId:number){
        return instace.get(`profile/` + userId)
    },
    getStatus(userId:number){
        return instace.get(`profile/status/` + userId)
    },
    updateStatus(status:string){
        return instace.put(`profile/status/`,{status} )
    }
}
