import api from './api'

export default function getFuction(email) {
    api.get("users", {
        params: { email }
    })
        .then((response) => console.log(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
};

