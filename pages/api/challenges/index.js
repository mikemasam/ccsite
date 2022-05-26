import db, { paginate } from '@com/apicom/db';
import ApiResponse from '@com/apicom/ApiResponse';
const per_page = 15;
export default async function handler(req, res) {
  const { page = 0 } = req.query;
  const builder = db("questions");
  const pagination = await paginate(builder, page);
  const results = await builder.select("content", "user_id", "id", "created_at", "status");
  return ApiResponse(res, { results, ...pagination }, 200);
}
