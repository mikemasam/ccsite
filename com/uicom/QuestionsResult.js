import { useEffect, useState } from 'react';
import QuestionCardResult from '@com/uicom/QuestionCardResult';

export default function Questions({ questions, results }){
  const [items, setItems] = useState(null);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setItems(questions);
  },[questions]);
  if(!items?.length) return null;
  const hasMore = (current + 1) < items?.length;
  const nextStage = () => {
    if(!hasMore) return;
    else setCurrent(v => v + 1);
  }
  const prevStage = () => {
    setCurrent(v => v - 1);
  }
  const question = items[current];
  return (
    <QuestionCardResult 
      currentStage={current}
      summary={results?.summaries?.find?.(f => f.q == question?.id)}
      hasMore={hasMore}
      nextStage={nextStage} 
      prevStage={prevStage} 
      question={question} />
  );
}
