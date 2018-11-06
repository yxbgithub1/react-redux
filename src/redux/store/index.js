
import {
    createStore,        
    applyMiddleware     
} from "redux";

//中间件redux-thunk改造store.dispatch,使得它可以接受函数作为参数
import thunk from "redux-thunk"; 
import reducer from '../reducers';

// createStore方法
// 参数一：接受reducer作为参数，生成一个新的store
// 参数二：设置state初始状态
// 参数三：applyMiddleware，作用是将所有中间件组成一个数组，依次执行
let store = createStore(
    reducer,
    applyMiddleware(thunk)
);

//console.log(store);

export default store;