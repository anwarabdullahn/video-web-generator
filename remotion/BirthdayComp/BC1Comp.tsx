import { AbsoluteFill } from "remotion";
import { BCPage1 } from "./comps";
import { z } from "zod";
import { Page1CompositionProps } from "@/types/constants";

export const BC1Comp = ({ ...props }: z.infer<typeof Page1CompositionProps>) => {
 return (
  <AbsoluteFill style={{
   width: '1280px',
   height: '720px',
   flexGrow: 1,
  }}>
   <BCPage1 {...props} />
  </AbsoluteFill>
 )
}
