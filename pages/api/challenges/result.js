import db, { paginate } from '@com/apicom/db';
import ApiResponse from '@com/apicom/ApiResponse';

export default async function handler(req, res) {
  const { answers } = req.body;
  const qs = Object.keys(answers);
  const questions = await db("questions").whereIn("id", qs);

  const results = {
    correct: [],
    incorrect: [],
  };
  for(let i = 0; i < qs.length; i++){
    const a = await findAnswer(answers[qs[i]]);
    if(a?.status == 1) {
      results.correct.push(qs[i])
    }else{
      results.incorrect.push(qs[i])
    }
  }
  return ApiResponse(res, results, 200);
}

function findAnswer(a_id){
  return db("answers").where({ id: a_id }).first();
}
