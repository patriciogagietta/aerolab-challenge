import axios from 'axios'

const API_URL = 'https://coding-challenge-api.aerolab.co/products'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdjNWFlNjM3NmIzZjAwMWYwZjY3YmIiLCJpYXQiOjE3MTk0MjU3NjZ9.WeTMn-G5R_x-gCKUJk2BRaJM8LRj754vleCPgIX4KqE'

const getProductos = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { getProductos };
