import create$api from './create.api';
let api = null;
export default function useApi(){
  if(api == null) {
    api = create$api();
  }
  return api;
}
