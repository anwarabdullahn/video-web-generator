import React from "react";
import { AbsoluteFill } from "remotion";
import { z } from "zod";
import { Img, staticFile } from "remotion";

export const FloatingProps = z.object({
 assetName: z.string()
});

export const floatingDefaultProps: z.infer<typeof FloatingProps> = {
 assetName: "floating1.svg"
};


export const Floating = ({ assetName }: typeof floatingDefaultProps) => {
 return (
  <AbsoluteFill>
   <Img
    style={{ backgroundSize: 'cover', maxHeight: '600px' }}
    src={staticFile(`/${assetName}`)}
    alt="Vercel Logo"
    height={200}
   />
  </AbsoluteFill>
 )
}


