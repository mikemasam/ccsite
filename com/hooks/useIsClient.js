import { useEffect, useState } from 'react';
export default function useIsClient(){
  const [loaded, setLoaded] = useState();
  useEffect(() => {
    setLoaded(true);
  },[]);
  return loaded;
}
