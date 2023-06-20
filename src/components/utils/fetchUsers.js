import axios from "axios";

export default class UsersService {
    static async getUsers(limit = 10, page = 0,) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
                _limit: limit,
                _page: page
            }
        });
        console.log(response.data);
        return response;
    }
}
