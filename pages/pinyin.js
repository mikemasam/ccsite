import Script from 'next/script'
import { useState, useEffect } from 'react';
import { Row, Col, Button, Toast } from '@douyinfe/semi-ui';
import { Typography, Space, TextArea } from '@douyinfe/semi-ui';
import AppRoute from '@com/appcom/route';
export default function PinyinPage(){
  const [value, setValue] = useState('');
  const [output, setOutput] = useState();
  useEffect(() => {
    setOutput(window.pinyin?.getFullChars?.(value || ''));
  },[value]);
  const onChange = (text) => {
    setValue(text);
  }
  return (
    <div style={{ padding: 10 }}>
      <Script src="/convert-pinyin.js" />
      <Space spacing={"loose"} align="center" style={{ marginBottom: 20 }}>
        <Typography.Title heading={5}>
          汉字转拼音
        </Typography.Title>
      </Space>
      <Row gutter={16}>
        <Col span={12}>
          <TextArea 
            autosize 
            value={value}
            onChange={onChange}
            rows={10} 
            maxCount={1500} 
            showClear/>
        </Col>
        <Col span={12}>
          <TextArea 
            validateStatus='error'
            autosize 
            value={output}
            rows={10} />
        </Col>
      </Row>
    </div>
  );
}
export const getServerSideProps = AppRoute(() => {
}, { secured: false });
