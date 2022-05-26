import db from '@com/apicom/db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ApiResponse from '@com/apicom/ApiResponse';
export default async function handler(req, res) {
  const { username, password } = req.body || {};
  if(!/[a-zA-Z0-9]{4,20}/.test(username || '')) return ApiResponse.failed(res, "INVALID_DATA2");
  if(!/(.){4,20}/.test(password || '')) return ApiResponse.failed(res, "INVALID_DATA3");
  const user = await db("users").where({ username }).first();
  if(!user) return ApiResponse.failed(res, "USER_NOT_FOUND");
  if(!await bcrypt.compare(password, user.password)) return ApiResponse.failed(res, "INVALID_PASSWORD");
  var token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET || "123456");
  return ApiResponse(res, { token }, 200, "ok");
}
