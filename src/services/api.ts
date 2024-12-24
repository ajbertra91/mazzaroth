import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

export const getGameStats = async (playerId: string) => {
    const response = await axios.get(`${API_BASE_URL}/stats/${playerId}`);
    return response.data;
};