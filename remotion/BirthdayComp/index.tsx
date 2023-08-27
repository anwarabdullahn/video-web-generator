import { AbsoluteFill } from "remotion";
import { BirthdayCard, birthdayCardProps } from './BirthdayCard'
import { BC1Comp } from "./BC1Comp";
import { BC2Comp } from "./BC2Comp";
import { page1DefaultProps, page2DefaultProps } from "./comps";
export const BirthdayComp = () => {

 return (
  <AbsoluteFill style={{ backgroundColor: 'white', overflow: 'visible', display: 'flex', flexDirection: 'column', gap: '20px' }}>
   <div style={{
    // rotate: '30deg',
    backgroundColor: 'white',
    display: "flex",
    flexDirection: 'row',
    overflow: 'visible',
    flexGrow: 1,
    marginLeft: '-250px',
    marginTop: '-300px',
    gap: '470px',
   }}>
    <div style={{ scale: '0.35' }}>
     <BC2Comp {...page2DefaultProps} />
    </div>
    <div style={{ scale: '0.35' }}>
     <BirthdayCard {...birthdayCardProps} />
    </div>
    <div style={{ scale: '0.35' }}>
     <BC1Comp {...page1DefaultProps} />
    </div>
    <div style={{ scale: '0.35' }}>
     <BC2Comp {...page2DefaultProps} />
    </div>
   </div>
  </AbsoluteFill>
 )
}
