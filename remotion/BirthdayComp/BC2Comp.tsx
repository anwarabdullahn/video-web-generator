import { useVideoConfig, useCurrentFrame, spring, AbsoluteFill } from "remotion";
import { BCPage2, page2DefaultProps } from "./comps";
export const BC2Comp = () => {
 const { fps, durationInFrames } = useVideoConfig()
 const frame = useCurrentFrame()

 const scale = spring({
  fps,
  frame,
 });


 return (
  <AbsoluteFill style={{
   width: '1280px',
   height: '720px',
   flexGrow: 1,
  }}>
   <BCPage2 {...page2DefaultProps} />
  </AbsoluteFill>
 )
}
