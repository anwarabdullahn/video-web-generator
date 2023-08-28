import { AbsoluteFill } from "remotion";
import { BirthdayCard } from './BirthdayCard'
import { BC1Comp } from "./BC1Comp";
import { BC2Comp } from "./BC2Comp";
import { Animated, Move } from "remotion-animated";
import { z } from "zod";
import { Page1CompositionProps, Page2CompositionProps, SimpleCompositionProps } from "@/types/constants";

export const SimpleBirthdayComp = ({
 name,
 wishes,
 age,
 mainBackgroundColor,
 mainColor,
 secondBackgroundColor,
 secondColor,
 thirdBackgroundColor,
 thirdColor,
}: z.infer<typeof SimpleCompositionProps>) => {

 const page2Props: z.infer<typeof Page2CompositionProps> = {
  backgroundColor: thirdBackgroundColor,
  color: thirdColor,
  wishes,
 }

 const page1Props: z.infer<typeof Page1CompositionProps> = {
  backgroundColor: secondBackgroundColor,
  color: secondColor,
  name,
  age,
 }

 const birthdayProps: z.infer<typeof Page1CompositionProps> = {
  backgroundColor: mainBackgroundColor,
  color: mainColor,
  name,
  age,
 }

 return (
  <AbsoluteFill style={{ backgroundColor: 'white' }}>
   <div
    style={{
     backgroundColor: 'white',
     display: 'flex',
     flexGrow: 1,
    }}
   >
    <BC2Comp {...page2Props} />
    <Animated animations={[Move({ y: -720, start: 161 })]}>
     <BC1Comp {...page1Props} />
    </Animated>
    <Animated animations={[Move({ x: -1280, start: 90 })]}>
     <BirthdayCard {...birthdayProps} />
    </Animated>
   </div>
  </AbsoluteFill>
 )
}
