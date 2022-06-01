import axios from "axios";
import { constants } from ".";

const changeLogin = () => ({
  type:constants.CHANGE_LOGIN,
  value:true
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get("/api/login.json?account=" + account + "&password=" + password)
      .then((res) => {
        const result = res.data.data;
        if(result){
          dispatch(changeLogin());
        }else{
          alert("login fail");
        }
      })
  }
}

export const logout = () => ({
    type:constants.CHANGE_LOGIN,
    value:false
})