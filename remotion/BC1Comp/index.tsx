import { useVideoConfig, useCurrentFrame, spring, AbsoluteFill } from "remotion";
import { BCPage1, page1DefaultProps } from './comps'
export const BC1Comp = () => {
 const { fps, durationInFrames } = useVideoConfig()
 const frame = useCurrentFrame()

 const scale = spring({
  fps,
  frame,
 });

 return (
  <AbsoluteFill>
   <BCPage1 {...page1DefaultProps} />
  </AbsoluteFill>
 )
}
