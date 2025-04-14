// import axios from "axios";

// const BASE_URL = "https://fakestoreapi.com";


// export async function getCard1Data(){

//     return axios.get(`${BASE_URL}/products`,{
//         headers:{
//             'x-access-token':localStorage.getItem("token")
//         }
//     })
// }

import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export async function getCard1Data() {
    return axios.get(`${BASE_URL}/products`, {  // ✅ Corrected URL string interpolation
        headers: {
            'x-access-token': localStorage.getItem("token")
        }
    });
}
