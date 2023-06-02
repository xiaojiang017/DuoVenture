import axios from 'axios';


const getlist = async () => {
   return await axios.get('http://localhost:8080/task/list').then((res) => {
       return res
    }).catch((err) => {
        console.log(err)
    })
}

export default getlist