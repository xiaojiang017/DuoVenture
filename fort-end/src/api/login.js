import axios from 'axios';
//登陆接口
export const loginPort = async (data) => {
   return await axios.post('http://localhost:8080/login' , data).then((res) => {
       return res
    }).catch((err) => {
        return err
    })
}

