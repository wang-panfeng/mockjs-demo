import apis from './apis';
import axios2 from 'axios';
const axios = axios2.create(); //创建实例对象
export default {
    //获取用户信息
    getUserInfo(params) {
        // 发送 POST 请求,返回的是promise对象， axios具体使用参见github
        return axios({
            method: 'post',
            url: apis.USER,
            data: params
        });
    },
    //获取商品信息
    getGoods(params) {
        return axios({
            method: 'post',
            url: apis.GOODS,
            data: params
        });
    },
}