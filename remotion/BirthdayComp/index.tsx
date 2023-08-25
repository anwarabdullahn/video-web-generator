import { useVideoConfig, useCurrentFrame, spring, AbsoluteFill } from "remotion";
import { Main, mainDefaultProps } from './comps'
export const BirthdayComp = () => {
 const { fps, durationInFrames } = useVideoConfig()
 const frame = useCurrentFrame()

 const scale = spring({
  fps,
  frame,
 });

 return (
  <AbsoluteFill>
   <Main {...mainDefaultProps} />
  </AbsoluteFill>
 )
}
