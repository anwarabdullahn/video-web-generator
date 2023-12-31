import { z } from "zod";
import {
 Animated,
 Fade,
 Move
} from 'remotion-animated';

export const CompositionProps = z.object({
 age: z.number(),
 color: z.string()
});

export const ageIncrementProps: z.infer<typeof CompositionProps> = {
 age: 27,
 color: 'white'
};

export const AgeIncrement = ({ age, color }: z.infer<typeof CompositionProps>) => {
 const currentAge = Number(age)
 const lastAge = Number(age) - 1

 return (
  <div className="flex grow flex-col" style={{ color: 'white', marginLeft: '90px', zIndex: '2 !important' }}>
   <Animated
    animations={[
     Move({ start: 0, x: 660 }),
     Move({ y: -550, start: 30 }),
     Fade({ to: 0, start: 70 })
    ]}
   >
    <span className="my-0" style={{
     fontFamily: '"Noto Sans", sans-serif',
     fontWeight: '500',
     color,
     fontSize: '450px',
     marginLeft: '-600px'
    }}>{lastAge}</span>
   </Animated>
   <Animated
    animations={[
     Move({ y: -675, start: 30 }),
     Move({ y: -975, start: 70 }),
    ]}
   >
    <span className="my-0" style={{
     fontFamily: '"Noto Sans", sans-serif',
     fontWeight: '500',
     color,
     fontSize: '450px',
     marginLeft: '60px'
    }}>{currentAge}</span>
   </Animated>
  </div>
 )
}