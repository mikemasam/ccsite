import axios from 'axios';
import Cookies from 'universal-cookie';

export default function(){
  const cookies = new Cookies();
  const instance = axios.create({
    timeout: 10000,
    //validateStatus: (status) => true
  });
  instance.interceptors.response.use(response => {
    console.log(response);
    return response.data;
    //if(data?.status == 401 && coreurl)
    //Router.push(`${coreurl.location}/login`);
  }, err => {
    console.log("RES: ", err);
    return {
      message: "Request failed, something went wrong.",
      success: false,
      status: err?.status,
      data: null
    };
  });
  instance.interceptors.request.use(async (config) => {
    const session = cookies.get('chsession');
    if(session) config.headers.session = session;
    return config;
  }, err => {
    console.log('RQ: ', err);
    return {
      message: err?.message || "Request Failed",
      success: false,
      status: 400,
      data: null
    };
  });
  return instance;
}


