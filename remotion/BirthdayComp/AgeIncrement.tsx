import { useVideoConfig, useCurrentFrame, spring } from "remotion";
import { z } from "zod";

export const CompositionProps = z.object({
 age: z.number()
});

export const ageIncrementProps: z.infer<typeof CompositionProps> = { 
 age: 27
};

export const AgeIncrement = ({ age }: z.infer<typeof CompositionProps>) => {
 const { fps, durationInFrames } = useVideoConfig()
 const frame = useCurrentFrame()
 const scale = spring({ fps, frame })
 const currentAge = Number(age)
 const lastAge = Number(age) - 1

 return (
  <div className="flex grow flex-col" style={{ color: 'white', marginLeft: '90px', zIndex: '2 !important' }}>
   <span className="my-0" style={{
    fontFamily: '"Noto Sans", sans-serif',
    fontWeight: '500',
    fontSize: '450px'
   }}>{lastAge}</span>
   <span className="my-0" style={{
    fontFamily: '"Noto Sans", sans-serif',
    fontWeight: '500',
    fontSize: '450px'
   }}>{currentAge}</span>
  </div>
 )
}