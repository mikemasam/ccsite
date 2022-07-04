import db, { paginate } from '@com/apicom/db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ApiResponse from '@com/apicom/ApiResponse';
const per_page = 15;
export default async function handler(req, res) {
  const { page = 0 } = req.query;
  const builder = db("users");
  const pagination = await paginate(builder, page);
  const results = await builder.select("name", "username", "id", "created_at", "user_type");
  return ApiResponse(res, { results, ...pagination }, 200);
}
