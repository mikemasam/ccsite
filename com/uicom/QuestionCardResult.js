import { useState, useEffect } from 'react';
import { Checkbox, Divider, Tag, Card, List, Space, Typography, Button } from '@douyinfe/semi-ui';
import useApiGet from '@com/api/useApiGet';

export default function QuestionCardResult({ 
  hasMore, 
  summary, currentStage, 
  nextStage, prevStage, question }){
  const [answers, setAnswers] = useState([]);
  const { data } = useApiGet({ 
    url: `/api/challenges/${question?.id || 0}/answers`, autoLoad: true
  });
  useEffect(() => {
    if(!data.loading)
    setAnswers(data.answers);
  },[data]);
  return (
    <Space vertical style={{ display: "flex", alignItems: "stretch" }} spacing={30}>
      <Typography.Title heading={5} style={{ color: "inherit" }}>
        审查结果
      </Typography.Title>
      {question &&
      <Card bodyStyle={{ padding: 10 }} 
        loading={data.loading}>
        <Space vertical spacing={10} style={{ marginBottom: 10 }} align="start">
          <Typography.Paragraph spacing="extended">
            <div style={{ fex: 1, marginBottom: 10, display: "flex" }}>
              {question.content}
            </div>
          </Typography.Paragraph>
        </Space>
        {answers?.length > 0 &&
        <Space vertical align="start">
          {answers.map(a => (
            <Tag size="large" 
              onClick={() => onAnswerSelect(question.id, a.id)}
              style={{ height: "auto", padding: 10, whiteSpace: 'pre-wrap', flex: 1, cursor: "pointer" }} 
              color={summary?.correct == a.id ? "green" : "rgba(1, 1, 1, 1)"}>
              <Space>
                <Checkbox checked={summary?.selected == a.id} />
                <Typography.Text style={{ color: "inherit" }}>
                  {a.content}
                </Typography.Text>
              </Space>
            </Tag>
          ))}
        </Space>
        }
      </Card>
      }
      <div style={{ 
        flex: 1,
        marginTop: 40, display: "flex", 
        flexDirection: "row", justifyContent: "space-around" }}>
        <Button onClick={prevStage} disabled={currentStage <= 0} >上一个</Button>
        {hasMore && 
        <Button onClick={nextStage} type="primary">
          下一个
        </Button>
        }
      </div>
    </Space>
  );
}
