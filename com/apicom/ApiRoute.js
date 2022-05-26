import auth$loader from '../lib/auth.loader';
import ApiResponse from '@com/apicom/ApiResponse';
export default (callback, opts) => {
  return async (req, res) => {
    const user = await auth$loader(req);
    if(opts.secured && !user) {
      return ApiResponse.failed(res, "USER_NOT_FOUND");
    }
    const result = await callback(req, res, { user });
  };
}

