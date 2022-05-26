import db, { paginate } from '@com/apicom/db';
import ApiResponse from '@com/apicom/ApiResponse';
export default async function handler(req, res) {
  const { id, status: _s } = req.query;
  const status = _s == "enable" ? 1 : 0;
  await db("questions").where({ id }).update({ status });
  return ApiResponse(res, { }, 200);
}
