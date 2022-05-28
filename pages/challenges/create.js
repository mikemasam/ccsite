import { DateTime } from 'luxon';
import { useState, useEffect } from 'react';
import { Divider, Checkbox, Spin, TextArea, Input, List, Button, Toast, Typography, Space, Form, Tooltip } from '@douyinfe/semi-ui';
import { IconMinusCircle, IconHash } from '@douyinfe/semi-icons';
import Router from 'next/router';
import AppRoute from '@com/appcom/route';
import useIsClient from '@com/hooks/useIsClient';
import useApi from '@com/api/useApi';

export default function LoginPage() {
  const [form, setForm] = useState({ loading: false, stage: 0, items: [] });
  const loaded = useIsClient();
  const api = useApi();
  const onSubmit = () => {
    setForm(v => ({ ...v, loading: true }));
    api.post("/api/editor/challenges/create", form).then(res => {
      setForm(v => ({ ...v, loading: false }));
      if(res.success){
        Toast.info({ content: res.message });
        Router.push("/challenges");
      }else{
        Toast.error({ content: res.message });
      }
    });
  }
  const nextStage = () => {
    if(form.stage >= 1) onSubmit()
    else setForm(v => ({ ...v, stage: v.stage + 1 }));
  }
  const prevStage = () => setForm(v => ({ ...v, stage: v.stage - 1 }));
  const onItemsChange = (items) => setForm(v => ({ ...v, items }));
  const onChange = (text) => {
    setForm(v => ({ ...v, question: text }));
  }
  if(!loaded) return null;
  return (
    <Spin spinning={form.loading}>
      <Space spacing={"loose"} align="center" style={{ marginBottom: 20 }}>
        <IconHash />
        <Typography.Title heading={5} style={{ flex: 1 }}>添加挑战</Typography.Title>
      </Space>
      {form.stage == 0 && <TextArea value={form.question} onChange={onChange} placeholder='挑战' />}
      {form.stage == 1 && <AnswersList items={form.items} onItemsChange={onItemsChange} />}
      <div style={{ 
        marginTop: 40, display: "flex", 
        flexDirection: "row", justifyContent: "space-between" }}>
        <Button onClick={prevStage} disabled={form.stage <= 0} >上一个</Button>
        <Button onClick={nextStage} type="primary">下一个</Button>
      </div>
    </Spin>
  )
}

function AnswersList({ items, onItemsChange }){
  const [text, setText] = useState("");
  const [list, setList] = useState(items);
  useEffect(() => {
    onItemsChange(list)
  },[list]);
  const removeItem = (id) => setList(list.filter(i => i.id !== id));
  const onCheckboxChanged = (state, id) => {
    setList(ls => {
      return ls.map(l => ({ ...l, correct: l.id == id && state }));
    });
  }
  const addItem = () => {
    setList(v => [...v, { id: Math.random(), text, correct: list.length == 0 }]);
    setText('');
  }
  const onChange = (v) => setText(v);
  return (
    <div>
      <List
        bordered
        dataSource={list}
        size='small'
        style={{ flexBasis: '100%', flexShrink: 0, borderBottom: '1px solid var(--semi-color-border)' }}
        renderItem={(item, index) => 
          <List.Item style={{ display: "flex" }} className='list-item'>
            <Typography.Paragraph style={{ marginRight: 5, fontWeight: 600, color: "blue" }}>#{index + 1}</Typography.Paragraph>
            <Typography.Paragraph style={{ flex: 1 }}>{item.text}</Typography.Paragraph>
            <Divider layout="vertical" margin='12px'/>
            <Checkbox checked={!!item.correct} onChange={(state) => onCheckboxChanged(state, item.id)} />
            <Divider layout="vertical" margin='12px'/>
            <Button 
              type='danger' 
              theme='borderless' 
              icon={<IconMinusCircle />} 
              onClick={() => removeItem(item.id)} style={{ marginRight: 4 }} />
          </List.Item>
        }
      />

      <div style={{ marginTop: 10, display: "flex", alignItems: "center" }} className='list-item'>
        <Input 
          onChange={onChange} 
          value={text} 
          addonBefore={"#" + (list.length + 1)}
          placeholder='回答' 
          style={{ marginRight: 10 }}/>
        <Button disabled={!text} onClick={addItem}>加</Button>
      </div>
    </div>
  );
}


export const getServerSideProps = AppRoute(() => {
});

