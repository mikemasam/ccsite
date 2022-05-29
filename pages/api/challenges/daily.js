import db, { paginate } from '@com/apicom/db';
import ApiResponse from '@com/apicom/ApiResponse';

export default async function handler(req, res) {
  const builder = db("questions").limit(10)
    .orderBy("updated_at", "asc")
    .where({ status: 1 });
  const results = await builder.select("content", "user_id", "id", "created_at", "status");
  return ApiResponse(res, { results }, 200);
}
