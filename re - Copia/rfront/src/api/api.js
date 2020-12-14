import axios from "axios";


// Pode ser algum servidor executando localmente: 
// http://localhost:3000



const api = axios.create({
  baseURL: "http://localhost:3001",
});


// Buscando usuários do github
// api.get("users")
//       .then((response) => console.log(response.data))
//       .catch((err) => {
//         console.error("ops! ocorreu um erro" + err);
//      });

//      api.post("users", {email, senha})
//      .then((response) => console.log(response.data))
//      .catch((err) => {
//        console.error("ops! ocorreu um erro" + err);
//     });

    

export default api;

