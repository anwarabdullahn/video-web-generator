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
import { VideoControl } from '@/components/VideoControl';
import { SimpleBirthdayComp } from '@/remotion/BirthdayComp/SimpleBirthdayComp';
import { isMobile, isTabled } from '../page';

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

  const [name, setName] = useState(simpleDefaultProps.name)
  const [age, setAge] = useState(simpleDefaultProps.age)
  const [wishes, setWishes] = useState(simpleDefaultProps.wishes)
  const [mainBackgroundColor, setMainBackgroundColor] = useState(simpleDefaultProps.mainBackgroundColor);
  const [mainColor, setMainColor] = useState(simpleDefaultProps.mainColor);
  const [secondBackgroundColor, setSecondBackgroundColor] = useState(simpleDefaultProps.secondBackgroundColor);
  const [secondColor, setSecondColor] = useState(simpleDefaultProps.secondColor);
  const [thirdBackgroundColor, setThirdBackgroundColor] = useState(simpleDefaultProps.thirdBackgroundColor);
  const [thirdColor, setThirdColor] = useState(simpleDefaultProps.thirdColor);

  const props = { name, age, wishes, mainBackgroundColor, mainColor, secondBackgroundColor, secondColor, thirdBackgroundColor, thirdColor }

  return (
    <Layout>
      <TopNav />
      <Content className="flex row justify-between site-layout items-center" style={{ overflowX: 'hidden', minHeight: '85vh', flexGrow: 1, background: '#eee', flexDirection: isMobile() ? 'column' : 'row' }}>
        <div className='p-6' style={{ maxWidth: isMobile() || isTabled() ? 'unset' : '45vw', marginLeft: isMobile() || isTabled() ? 'unset' : '80px' }}>
          <VideoControl
            name={name}
            setName={setName}
            setAge={setAge}
            setWishes={setWishes}
            setMainBackgroundColor={setMainBackgroundColor}
            setMainColor={setMainColor}
            setSecondBackgroundColor={setSecondBackgroundColor}
            setSecondColor={setSecondColor}
            setThirdBackgroundColor={setThirdBackgroundColor}
            setThirdColor={setThirdColor}
            age={age}
            wishes={wishes}
            mainBackgroundColor={mainBackgroundColor}
            mainColor={mainColor}
            secondBackgroundColor={secondBackgroundColor}
            secondColor={secondColor}
            thirdBackgroundColor={thirdBackgroundColor}
            thirdColor={thirdColor}
            inputProps={inputProps}
          ></VideoControl>
        </div>
        <div className='p-6' style={{ maxWidth: '55vw', minWidth: '55vw', minHeight: '600px', marginRight: '60px' }}>
          <div style={container}>
            <div className="cinematics" style={outer}>
              <Player
                component={SimpleBirthdayComp}
                inputProps={props}
                durationInFrames={230}
                fps={VIDEO_FPS}
                compositionHeight={VIDEO_HEIGHT}
                compositionWidth={VIDEO_WIDTH}
                style={player}
                controls
                autoPlay
                loop
              />
            </div>
          </div>
        </div>
      </Content>
      <BottomFooter />
    </Layout>
  )
}
