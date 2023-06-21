 import axios from 'axios';
import { useEffect } from 'react';
import { useAuthContext } from '../contexts/AuthContext';


export function AuthHandler () {

  const {dispatch,email,password} = useAuthContext()

  
  const userLogin = async () => {
    try {
      const  {data,status}  = await axios.post(`/api/auth/login`, {
        email,password

      });
      if(status === 200){
        const users = (data)
      dispatch({type:"USER_DATA",payload:users})
      dispatch({type:"ENCODED_TOKEN",payload:users})
      }
    } catch (e) {
      console.error(e);
 
    }
  };
  useEffect(() => {
    userLogin();
  }, []);

    return <>
    </>
}