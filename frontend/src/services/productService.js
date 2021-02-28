import axios from 'axios';

const baseUrl = 'http://localhost:5000/products';

const getAllProducts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getAllProducts };
