import db, { paginate } from '@com/apicom/db';
import ApiResponse from '@com/apicom/ApiResponse';
export default async function handler(req, res) {
  const { page = 0, id } = req.query;
  const builder = db("answers").where({ question_id: id });
  const answers = await builder.select("content", "id", "created_at");
  return ApiResponse(res, { answers }, 200);
}
