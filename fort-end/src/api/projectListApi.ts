import axios from 'axios';


const getlist = async () => {
   return await axios.get('http://localhost:8080/users/index').then((res) => {
       return res
    })
}

export default getlist