import axios from 'axios';

class MatrixService {
  host = 'http://localhost:8000/api';

  create = (data) => axios.post(`${this.host}/matrix`, data)
}

export default MatrixService;
