import axios from 'axios';

//通用配置
const fatch = (option) => {

    //默认配置
    var setting = {
        url      : "",
        data     : {},
        method   : "post",
        timeout  : 50000,
        //baseURL: "/api",
        //baseURL:'https://10.86.86.120/api/managment/'       //正式环境
        baseURL:"http://172.20.2.120/api/managment/"          //测试环境
    };

    //覆盖默认配置
    Object.assign(setting, option);
    return new Promise((resolve) =>
        axios(setting).then(resp => resolve(resp))
        //此处的reject在拦截器内处理
    );
};

export default fatch;