import { Composition } from "remotion";
import { Main } from "./MyComp/Main";
import {
  COMP_NAME,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
import { NextLogo } from "./MyComp/NextLogo";
import { BirthdayComp } from "./BirthdayComp";
import './index.css'
import { BC1Comp } from "./BC1Comp";
import { HappyPerson } from "./BirthdayComp/HappyPerson";
import { AgeIncrement, ageIncrementProps } from "./BirthdayComp/AgeIncrement";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={defaultMyCompProps}
      />
      <Composition
        id="NextLogo"
        component={NextLogo}
        durationInFrames={300}
        fps={30}
        width={140}
        height={140}
        defaultProps={{
          outProgress: 0,
        }}
      />
      <Composition
        id="BirthdayComp"
        component={BirthdayComp}
        durationInFrames={384}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
      />
      <Composition
        id="BC1Comp"
        component={BC1Comp}
        durationInFrames={384}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
      />
      <Composition
        id="HappyPerson"
        component={HappyPerson}
        durationInFrames={60}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
      />
      <Composition
        id="AgeIncrement"
        component={AgeIncrement}
        durationInFrames={120}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={ageIncrementProps}
      />
    </>
  );
};
