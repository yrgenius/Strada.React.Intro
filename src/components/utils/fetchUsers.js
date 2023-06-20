import axios from "axios";

export default class UsersService {
    static async getUsers(limit = 10, page = 0) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    }
}
