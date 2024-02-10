import requests from "./http";

const AdminServices = {
    loginAdmin(body: any) {
		return requests.post(`/auth/login`, body);
    },
    addUser(body: any)
    {
        return requests.post(`/users`, body)
    },
    userid(id: String) {
        return requests.get(`/users/${id}`);
    },

    updateProfile(id: String, body: any,) {
        return requests.patch(`/users/${id}`, body);
    },
    deleteUser(id: String) {
        return requests.del(`/users/${id}`);
    },
    // alluser() {
    //     return requests.get(`/users?offset=0&limit=5&order=asc&sort=username`);
    // },
    alluser(page: number, pageSize: number) {
        const offset =  page; 
        return requests.get(`/users?offset=${offset}&limit=${pageSize}&order=asc&sort=username`);
      },
};

export default AdminServices;
