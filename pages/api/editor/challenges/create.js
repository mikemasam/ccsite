import db from '@com/apicom/db';
import { DateTime } from 'luxon';
import ApiResponse from '@com/apicom/ApiResponse';
import ApiRoute from '@com/apicom/ApiRoute';
export default ApiRoute(async (req, res, { user }) => {
  const { question, items } = req.body || {};
  if(!/[a-zA-Z0-9]{4,500}/.test(question || '')) return ApiResponse.failed(res, "INVALID_QUESTION");
  if(!items?.length) return ApiResponse.failed(res, "INVALID_ANSWER");
  let foundCorrect = false;
  for(let i = 0; i < items.length; i++){
    const item = items[i];
    if(!/[a-zA-Z0-9]{1,500}/.test(item.text || '')) return ApiResponse.failed(res, "INVALID_ANSWER");
    if(item.correct) {
      if(foundCorrect) return ApiReponse.failed(res, "INVALID_DATA");
      foundCorrect = true;
    }
  }
  if(!foundCorrect) return ApiReponse.failed(res, "INVALID_DATA");
  if(!user) return ApiResponse.failed(res, "USER_NOT_FOUND");
  const [question_id] = await makeQuestion(question, user);
  for(let i = 0; i < items.length; i++){
    const item = items[i];
    await makeAnswer(item, question_id, user);
  }
  return ApiResponse(res, question_id, 200, "ITEM_ADDED");
}, { secured: true });

function makeQuestion(text, user){
  return db("questions").insert({
    content: text,
    user_id: user.id,
    created_at: DateTime.now().toMillis(),
    status: 0,
  }).returning(['id']);
}
function makeAnswer(answer, question_id, user){
  return db("answers").insert({
    content: answer.text,
    question_id: question_id,
    user_id: user.id,
    created_at: DateTime.now().toMillis(),
    status: answer.correct ? 1 : 0,
  });
}
