import db from '@com/apicom/db';
import bcrypt from 'bcrypt';
import { DateTime } from 'luxon';
import ApiResponse from '@com/apicom/ApiResponse';
export default async function handler(req, res) {
  const { name, username, password } = req.body || {};
  if(!/[\s\W\w\d]{4,20}/.test(name || '')) return ApiResponse.failed(res, "INVALID_DATA1");
  if(!/[a-zA-Z0-9]{4,20}/.test(username || '')) return ApiResponse.failed(res, "INVALID_DATA2");
  if(!/(.){4,20}/.test(password || '')) return ApiResponse.failed(res, "INVALID_DATA3");
  const found = await db("users").where({ username }).first();
  if(found) return ApiResponse.failed(res, "USER_FOUND");
  const user = {
    created_at: DateTime.now().toMillis(),
    name,
    username,
    password: await bcrypt.hash(password, 10)
  }
  const added = await db("users").insert(user);
  return ApiResponse(res, { }, 200, "ok");
}

