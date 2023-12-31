import { AbsoluteFill } from "remotion";
import { BirthdayCard } from './BirthdayCard'
import { BC1Comp } from "./BC1Comp";
import { BC2Comp } from "./BC2Comp";
import { Animated, Move, Rotate, Scale } from "remotion-animated";
import { v4 as uuidv4 } from 'uuid';
import { birthdayCardProps, page1DefaultProps, page2DefaultProps } from "../../types/constants";

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
            key={uuidv4()}
            style={{
               flexGrow: 1,
               gap: '470px',
            }}>
            {rows && rows.map((row: any) => (
               <div style={{ scale }} key={uuidv4()}>
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
            Move({ y: 530, x: 5, start: 30 }),
            Scale({ start: 30, by: 2.9 }),
            Move({ x: -1370, start: 90 }),
            Move({ y: -785, start: 170 }),
         ]}>
            <div
               style={{
                  rotate: '-30deg',
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  gap: 270,
                  marginTop: '-780px',
                  marginLeft: '-380px'
               }}
            >
               {[...Array(7)].map((_, index) => {
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
