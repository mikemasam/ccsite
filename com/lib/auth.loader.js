import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';
import db from '@com/apicom/db';

export default async function(req){
  const Cookie = new Cookies(req.headers.cookie);
  if(!Cookie.cookies.chsession) return null;
  var data = jwt.decode(Cookie.cookies.chsession, process.env.JWT_SECRET || "123456");
  const user = await db('users').where({ id: data.user_id }).first();
  if(!user) return null;
  return {
    name: user.name,
    username: user.username,
    id: user.id,
    user_type: user.user_type
  };
}
