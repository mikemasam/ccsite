import auth$loader from '../lib/auth.loader';
export default (callback, opts) => {
  return async (context) => {
    const _props = await callback?.();
    const user = await auth$loader(context.req);
    return {
      props: {
        appProps: { user },
        secured: !!user,
        data: _props || {}
      }, 
    }
  }
}
