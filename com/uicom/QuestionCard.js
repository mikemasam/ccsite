import { useState, useEffect } from 'react';
import { Checkbox, Divider, Tag, Card, List, Space, Typography, Button } from '@douyinfe/semi-ui';
import useApiGet from '@com/api/useApiGet';

export default function QuestionCard({ 
  hasMore, 
  onAnswerSelect, answer, currentStage, 
  nextStage, prevStage, question }){
  const [answers, setAnswers] = useState([]);
  const { data } = useApiGet({ 
    url: `/api/challenges/${question?.id || 0}/answers`, autoLoad: true
  });
  useEffect(() => {
    if(!data.loading)
    setAnswers(data.answers);
  },[data]);
  const onCheckboxChanged = (state, id) => {
    setAnswers(ls => {
      return ls.map(l => ({ ...l, selected: l.id == id && state }));
    });
  }
  const answerClicked = () => {
    console.log("answer clicked");
  }
  return (
    <Space vertical style={{ display: "flex", alignItems: "stretch" }} spacing={30}>
      {question &&
      <Card bodyStyle={{ padding: 10 }} 
        loading={data.loading}>
        <Space vertical spacing={10} align="start">
          <Typography.Title heading={5} style={{ color: "inherit" }}>
            问题
          </Typography.Title>
          <Typography.Paragraph spacing="extended">
            <div style={{ fex: 1, marginBottom: 10, display: "flex" }}>
              {question.content}
            </div>
          </Typography.Paragraph>
        </Space>
      </Card>
      }
      <Card bodyStyle={{ padding: 10 }}>
        {answers?.length > 0 &&
        <Space vertical align="start">
          <Typography.Title heading={5} style={{ color: "inherit" }}>
            选择一个
          </Typography.Title>
          {answers.map(a => (
            <Tag size="large" 
              //onClick={answerClicked}
              onClick={() => onAnswerSelect(question.id, a.id)}
              style={{ height: "auto", padding: 10, whiteSpace: 'pre-wrap', flex: 1, cursor: "pointer" }} 
              color={"blue"}>
              <Space>
                <Checkbox 
                  onChange={(state) => onCheckboxChanged(state, a.id)}
                  checked={answer == a.id} />
                <Typography.Text style={{ color: "inherit" }}>
                  {a.content}
                </Typography.Text>
              </Space>
            </Tag>
          ))}
        </Space>
        }
      </Card>
      <div style={{ 
        flex: 1,
        marginTop: 40, display: "flex", 
        flexDirection: "row", justifyContent: "space-between" }}>
        <Button onClick={prevStage} disabled={currentStage <= 0} >Back</Button>
        <Button onClick={nextStage} type="primary">
          {hasMore && "Next"}
          {!hasMore && "Complete"}
        </Button>
      </div>
    </Space>
  );
}
