  import { createSlice } from "@reduxjs/toolkit";
  import { getAPICall, postAPICall } from "../client/methodCalls";

  import { config } from '../client/config';

  const {
    BASEURL,
    USERLOGIN,
    VERFICATION,
    USER,
    GETUSER,
    ADDUSER
  } = config;

  export const authSlice = createSlice({
    name: "auth",
    initialState: {
      loginResponse: {
        isLoading: false,
      },
      Verifyresponse:{
        isLoading:false,
      },
      Userresponse:{
        isLoading:false,
      },
      getuserresponse:{
        isLoading:false,
      },
      adduserresponse:{
        isLoading:false,
      }
    },
    reducers: {

      login: (state, action) => {
        state.loginResponse = action.payload;
      },
      
      verify: (state, action) => {
        state.Verifyresponse = action.payload;
      }, 

      user: (state, action) => {
        state.Userresponse = action.payload;
      },
    
      getuser: (state, action) => {
        state.getuserresponse = action.payload;
      },

      adduser: (state, action) => {
        state.adduserresponse = action.payload;
      },
      

      reset: (state, action) => {
        state.loginResponse = {
          isLoading: false,
        };
      },

    
      // setLoading(state,value){
      //   state.loading=value.payload;
      // }

    },
  });

  // export const loginAsync = (params) => async (dispatch) => {

  //   try {
  //     dispatch(login({ isLoading: true }));
  //     const result = await postAPICall(LOGIN, params);
  //     dispatch(login({ isLoading: false, response: result.data }));
  //   } catch (error) {
  //     dispatch(login({ isLoading: false }));
  //   }
  // };

  export const loginAsync = async ({ dispatch, body, callbackFn }) => {
    try {
      // dispatch(UserLogin({ isLoading: true }));
      const URL = `${BASEURL}${USERLOGIN}`;
      const result = await postAPICall(URL, body).then((res) => {
        callbackFn && callbackFn(res);
        return res;
      });
      dispatch(login({ isLoading: false, response: result.data }));
    } catch (error) {
      dispatch(login({ isLoading: false }));
    }
  };

  export const verificationCodeAsync= async ({dispatch, body, callbackFn})=>{
    try{
      const URL = `${BASEURL}${VERFICATION}`
      const result=await postAPICall(URL,body).then((res)=>{
        callbackFn && callbackFn(res);
        console.log("response",res)
        return res;
      });
      dispatch(verify({ isLoading: false, response: result.data }));
    }catch(error){
      dispatch(verify({ isLoading: false }));
    }
  }

  export const userAsync= async ({ dispatch,callbackFn})=>{
    try{
      const URL = `${BASEURL}${USER}`
      const result= await  getAPICall(URL).then((res)=>{
        callbackFn && callbackFn(res);
        console.log("response",res)
        return res;
      });
      dispatch(user({ isLoading: false, response: result.data }))

    }catch(err){
      dispatch(user({ isLoading: false }));
    }
  }


  export const getuserAsync= async ({ dispatch,callbackFn})=>{
    try{
      const URL = `${BASEURL}${GETUSER}`
      const result= await  getAPICall(URL).then((res)=>{
        callbackFn && callbackFn(res);
        console.log("response",res)
        return res;
      });
      dispatch(getuser({ isLoading: false, response: result.data }))

    }catch(err){
      dispatch(getuser({ isLoading: false }));
    }
  }

  export const addUserAsync = async ({ dispatch, body, callbackFn,token}) => {
    try {
      // dispatch(UserLogin({ isLoading: true }));
      const URL = `${BASEURL}${ADDUSER}`;
      const result = await postAPICall(URL, body,true,token).then((res) => {
        callbackFn && callbackFn(res);
        return res;
      });
      dispatch(adduser({ isLoading: false, response: result.data }));
    } catch (error) {
      dispatch(adduser({ isLoading: false }));
    }
  };

  export const resetAsync = () => async (dispatch) => {
    dispatch(reset());
  };
  export const { login, reset,verify,user,getuser,adduser
  } = authSlice.actions;
  export const loginResponse = (state) => state.auth.loginResponse;
  export const Verifyresponse=(state)=>state.auth.Verifyresponse
  export const Userresponse=(state)=>state.auth.Userresponse
  export const getUserresponse=(state)=>state.auth.GetUserresponse
  export const adduserresponse=(state)=>state.auth.adduserresponse

  export default authSlice.reducer;
