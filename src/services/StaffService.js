import axios from 'axios';

const BASE_API = 'http://localhost:8080/api/staff';

class StaffService {
    getAllStaff() {
        return axios.get(BASE_API + '/all');
    }
}
export default new StaffService();