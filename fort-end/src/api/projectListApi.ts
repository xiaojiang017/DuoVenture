import axios from 'axios';


export const getlist = async (data) => {
   return await axios.post('http://localhost:8080/task/list' , data).then((res) => {
       return res
    }).catch((err) => {
        console.log(err)
    })
}

