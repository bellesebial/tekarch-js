import axios from "axios";

const BOOKS_BASE_URL = "http://localhost:8080/tbr/getAllBook";

class TbrService{
    getStudents(){
        return axios.get(BOOKS_BASE_URL);
    }
}

export default new TbrService()