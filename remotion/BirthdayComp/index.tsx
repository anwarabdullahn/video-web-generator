import { AbsoluteFill } from "remotion";
import { BirthdayCard, birthdayCardProps } from './BirthdayCard'
import { BC1Comp } from "./BC1Comp";
import { BC2Comp } from "./BC2Comp";
import { page1DefaultProps, page2DefaultProps } from "./comps";
import { Animated, Move, Rotate, Scale } from "remotion-animated";
export const BirthdayComp = () => {
 const componentList = [
  <BC1Comp {...page1DefaultProps} />,
  <BC2Comp {...page2DefaultProps} />,
  <BirthdayCard {...birthdayCardProps} />
 ]

 const rowList3 = [2, 3, 1, 2];
 const rowList2 = [3, 1, 2, 3];
 const rowList1 = [1, 2, 3, 1];

 const renderList = (rows: any, scale: '0.35') => {
  return (
   <div
    className="flex row"
    style={{
     flexGrow: 1,
     gap: '470px',
    }}>
    {rows && rows.map((row: any) => (
     <div style={{ scale }}>
      {componentList[row - 1]}
     </div>
    ))}
   </div>
  )
 }

 return (
  <AbsoluteFill style={{ backgroundColor: 'white', overflow: 'visible', display: 'flex', flexDirection: 'column', gap: '20px' }}>
   <Animated animations={[
    Move({ y: 300, x: 300, start: 0 }),
    Rotate({ start: 30, degrees: 30 }),
    Move({ y: 1692, x: -997, start: 30 }),
    Scale({ start: 30, by: 2.8 }),
    Move({ x: -1317, start: 90 }),
    Move({ y: -755, start: 170 }),
   ]}>
    <div
     style={{
      rotate: '-30deg',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      gap: 270,
      marginTop: '-780px'
     }}
    >
     {[...Array(13)].map((_, index) => {
      const render3 = index % 3 === 0;
      const render2 = index % 2 === 0;
      return render3
       ? renderList(rowList3, '0.35')
       : render2
        ? renderList(rowList2, '0.35')
        : renderList(rowList1, '0.35')
     })}
    </div>
   </Animated>

  </AbsoluteFill>
 )
}
