import axios from 'axios';


//任务列表查询接口
export const getlist = async (data) => {
   return await axios.post('http://localhost:8080/task/list' , data).then((res) => {
       return res
    }).catch((err) => {
        return err
    })
}
//新增接口

