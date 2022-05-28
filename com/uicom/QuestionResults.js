import { Col, Row, Typography, Card, Space, Button, Toast } from '@douyinfe/semi-ui';
import { IconVerify, IconClose } from '@douyinfe/semi-icons';
const { Title } = Typography;
export default function QuestionResults({ resetResults, results }){
  return (
    <Row>
      <Col span={12} offset={6}>
        <Card bodyStyle={{ display: "flex", flexDirection: "row", padding: 10 }}>
          <Title style={{ flex: 1 }}>
            挑战结果
          </Title>
          <Space spacing={15}>
            <Title type="success">
              <IconVerify size="large" /> {results.correct?.length}
            </Title>
            <Title type="danger">
              <IconClose size="large" />   {results.incorrect?.length}
            </Title>
          </Space>
        </Card>
        <div style={{ 
          flex: 1,
          marginTop: 40, display: "flex", 
          flexDirection: "row", justifyContent: "flex-end" }}>
          <Button theme="solid" onClick={resetResults} type="primary">
            再试一次
          </Button>
        </div>
      </Col>
    </Row>
  );
}
