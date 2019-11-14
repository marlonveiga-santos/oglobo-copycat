import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://raw.githubusercontent.com/Infoglobo/desafio-apps/master/capa.json',
    timeout: 1000,

});

export const newsSource = async () => {
    try {
        const response = await instance
            .get();
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};