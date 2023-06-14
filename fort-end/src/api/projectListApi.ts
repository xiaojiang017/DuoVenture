import axios from 'axios';

import axiosInstance from './index.js'

//任务列表查询接口
export const getlist = async (data) => {
   return await axiosInstance.post('task/list' , data).then((res) => {
       return res
    }).catch((err) => {
        return err
    })
}
//新增接口

