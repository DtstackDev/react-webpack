import * as actionTypes from '../actionType/user';

export const changeLanguage=(params)=> (dispatch,getState)=>{
  dispatch({
    type:actionTypes.CHANGE_LANGUAGE,
    payload:params
  });
}