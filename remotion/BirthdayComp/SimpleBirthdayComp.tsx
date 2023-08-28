import { AbsoluteFill } from "remotion";
import { BirthdayCard, birthdayCardProps } from './BirthdayCard'
import { BC1Comp } from "./BC1Comp";
import { BC2Comp } from "./BC2Comp";
import { page1DefaultProps, page2DefaultProps } from "./comps";
import { Animated, Move, Rotate, Scale } from "remotion-animated";

export const SimpleBirthdayComp = () => {
 return (
  <AbsoluteFill style={{ backgroundColor: 'white' }}>
   <div
    style={{
     backgroundColor: 'white',
     display: 'flex',
     flexGrow: 1,
    }}
   >

    <Animated animations={[

    ]}>
     <BC2Comp {...page2DefaultProps} />
    </Animated>
    <Animated animations={[
     Move({ y: -720, start: 161 })
    ]}>
     <BC1Comp {...page1DefaultProps} />
    </Animated>

    <Animated animations={[
     Move({ x: -1280, start: 90 })
    ]}>
     <div
     style={{position: 'absolute', top: 0}}
     >
      <BirthdayCard {...birthdayCardProps} />
     </div>
     
    </Animated>

   </div>
  </AbsoluteFill>
 )
}
