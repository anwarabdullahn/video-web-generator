import { useVideoConfig, useCurrentFrame, spring } from "remotion";
import { HappySVG } from "./assets"

export const HappyPerson = () => {
 const { fps } = useVideoConfig()
 const frame = useCurrentFrame()
 const scale = spring({ fps, frame });
 return (
  <div
   style={{
    position: 'absolute',
    bottom: '-27px',
    right: '-100px',
    width: '800px',
    rotate: '-5deg',
    transform: `scale(${scale})`
   }}>
   <HappySVG />
  </div>
 )
}