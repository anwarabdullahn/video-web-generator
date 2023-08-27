import { AbsoluteFill } from "remotion";
import { BCPage2, Page2CompositionProps } from "./comps";
import { z } from "zod";

export const BC2Comp = ({ ...props }: z.infer<typeof Page2CompositionProps>) => {
 return (
  <AbsoluteFill style={{
   width: '1280px',
   height: '720px',
   flexGrow: 1,
  }}>
   <BCPage2 {...props} />
  </AbsoluteFill>
 )
}
