import axios from 'axios'

const API_URL = process.env.REACT_APP_BACKEND_API_URL

class NameDataService {

    retrieveAllCourses(name) {
        return axios.get(`${API_URL}/employees`);
    }

    deleteName(id) {
	return axios.delete(`${API_URL}/employees/${id}`);
    }

    retrieveName(id) {
        return axios.get(`${API_URL}/employees/${id}`);
    }	

    createName(karyawan) {
	return axios.post(`${API_URL}/employees/`, karyawan);
    }

    updateName(id, karyawan) {
	return axios.put(`${API_URL}/employees/${id}`, karyawan);
    }
}

export default new NameDataService()
