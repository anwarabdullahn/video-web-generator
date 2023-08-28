'use client'

import { Button, Input, Layout, Tooltip } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { HeartOutlined, InfoCircleOutlined, UserOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { TopNav, BottomFooter } from '@/components';
import { Player } from "@remotion/player";
import { Main } from "../../remotion/MyComp/Main";
import { z } from "zod";

import {
  CompositionProps,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  simpleDefaultProps,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../../types/constants";
import { useMemo, useState } from 'react';
import { RenderControls } from '@/components/RenderControls';
import { Spacing } from '@/components/Spacing';
import { Tips } from '@/components/Tips/Tips';
import { BirthdayComp } from '@/remotion/BirthdayComp';
import { SimpleBirthdayComp } from '@/remotion/BirthdayComp/SimpleBirthdayComp';

const container: React.CSSProperties = {
  maxWidth: 768,
  margin: "auto",
  marginBottom: 20,
};

const outer: React.CSSProperties = {
  borderRadius: "var(--geist-border-radius)",
  overflow: "hidden",
  boxShadow: "0 0 200px rgba(0, 0, 0, 0.15)",
  marginBottom: 40,
  marginTop: 60,
};

const player: React.CSSProperties = {
  width: "100%",
};

export default function index() {
  const [text, setText] = useState<string>(defaultMyCompProps.title);
  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
    };
  }, [text]);

  return (
    <Layout>
      <TopNav />
      <Content className="flex row justify-between site-layout items-center" style={{ minHeight: '85vh', background: '#eee' }}>
        <div className='p-6' style={{ maxWidth: '35vw', marginLeft: '80px' }}>
          <Input
            placeholder="Enter your name"
            prefix={<UserOutlined className="site-form-item-icon" rev={undefined} />}
          />
          <br />
          <br />
          <Input
            placeholder="Enter your age"
            prefix={<HeartOutlined className="site-form-item-icon" rev={undefined} />}
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} rev={undefined} />
              </Tooltip>
            }
          />
          <br />
          <br />
          <Button type="primary" icon={<VideoCameraAddOutlined rev={undefined} />} size="large" style={{ backgroundColor: '#eb2f96' }} href='/generate'>
            Generate Video
          </Button>
        </div>
        <div className='p-6' style={{ maxWidth: '65vw', minWidth: '65vw', minHeight: '600px', marginRight: '60px' }}>
          <div style={container}>
            <div className="cinematics" style={outer}>
              <Player
                component={SimpleBirthdayComp}
                inputProps={simpleDefaultProps}
                durationInFrames={310}
                fps={VIDEO_FPS}
                compositionHeight={VIDEO_HEIGHT}
                compositionWidth={VIDEO_WIDTH}
                style={player}
                controls
                autoPlay
                loop
              />
            </div>
            <RenderControls
              text={text}
              setText={setText}
              inputProps={inputProps}
            ></RenderControls>
            <Spacing></Spacing>
            <Spacing></Spacing>
            <Spacing></Spacing>
            <Spacing></Spacing>
          </div>
        </div>
      </Content>
      <BottomFooter />
    </Layout>
  )
}
