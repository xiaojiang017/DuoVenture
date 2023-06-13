import axios from 'axios';


//任务列表查询接口
export const getchat = async (data) => {
   return await axios.post('http://localhost:8080/chat/chat' , data).then((res) => {
       return res
    }).catch((err) => {
        return err
    })
}
//新增接口

