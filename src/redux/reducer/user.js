import * as actionType from '../actionType/user';
const initialState={
  userName:'长卿',
  language:'ch',
  avtar:''
}

export default (state=initialState,actions)=>{
  const {type,payload}=actions;
  switch(type){
    case actionType.CHANGE_LANGUAGE:
      return Object.assign({},initialState,{language:payload});
      break;
    default:
      return state;
  }
}