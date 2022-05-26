import { useState, useEffect } from 'react';
import { Spin, Button, Toast } from '@douyinfe/semi-ui';
import AppRoute from '@com/appcom/route';
import useApiGet from '@com/api/useApiGet';
import Questions from '@com/uicom/Questions';
import QuestionResults from '@com/uicom/QuestionResults';

export default function DailyChallengePage() {
  const { data, load, api, setLoading } = useApiGet({ url: "/api/challenges/daily" });
  const [results, setResults] = useState(null);
  const onSubmit = (form) => {
    setLoading(true);
    api.post("/api/challenges/result", form).then(res => {
      setLoading(false);
      if(res.success){
        setResults(res.data);
      }
    });
  }
  const resetResults = () => {
    load();
    setResults(null);
  }
  return (
    <Spin spinning={data.loading}>
      {!data.loading && !results && <Questions onSubmit={onSubmit} questions={data.results}/>}
      {results && <QuestionResults resetResults={resetResults} results={results} />}
    </Spin>
  )
}



export const getServerSideProps = AppRoute(null, { secured: false });
