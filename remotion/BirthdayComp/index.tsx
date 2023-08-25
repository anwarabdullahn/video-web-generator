import { useVideoConfig, useCurrentFrame, spring } from "remotion";
import { Main, defaultProps } from './assets'
export const BirthdayComp = () => {
 const { fps, durationInFrames } = useVideoConfig()
 const frame = useCurrentFrame()

 const scale = spring({
  fps,
  frame,
 });

 console.warn({ fps, durationInFrames, frame })
 return (
  <>
   <Main {...defaultProps} />
  </>
 )
}
