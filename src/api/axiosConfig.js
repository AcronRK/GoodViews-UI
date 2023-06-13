import axios from 'axios';

export default axios.create({
    baseURL: "https://ad3b-2a01-c22-a9ec-b200-f450-ee69-2987-f60e.eu.ngrok.io",
    headers: {
        "Cache-Control": "no-cache",
        "ngrok-skip-browser-warning": true,
        "Acess-Controll-Allow-Origin": "*",
    }
});