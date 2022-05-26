import { useEffect, useState } from 'react';
import QuestionCard from '@com/uicom/QuestionCard';

export default function Questions({ onSubmit, questions }){
  const [items, setItems] = useState(null);
  const [answer, setAnswer] = useState({});
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setItems(questions);
  },[questions]);
  if(!items?.length) return null;
  const hasMore = (current + 1) < items?.length;
  const nextStage = () => {
    if(!hasMore) onSubmit({
      answers: answer
    })
    else setCurrent(v => v + 1);
  }
  const prevStage = () => {
    setCurrent(v => v - 1);
  }
  const onAnswerSelect = (q, a) => setAnswer(v => ({ ...v, [q]: a }));
  return (
    <QuestionCard 
      onAnswerSelect={onAnswerSelect}
      answer={answer[items[current]?.id]}
      currentStage={current}
      hasMore={hasMore}
      nextStage={nextStage} prevStage={prevStage} 
      question={items[current]} />
  );
}
