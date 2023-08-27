import React from "react";
import { AbsoluteFill } from "remotion";
import { z } from "zod";

export const CompositionProps = z.object({
  name: z.string(),
  backgroundColor: z.string(),
  color: z.string(),
  age: z.number()
});

export const birthdayCardProps: z.infer<typeof CompositionProps> = {
  name: "Your Name",
  backgroundColor: '#0bbbb9',
  color: '#ffffff',
  age: 27
};

export const BirthdayCard = ({ name, backgroundColor, color }: z.infer<typeof CompositionProps>) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        color,
        flexGrow: 1,
        fontSize: '70px',
        borderRadius: '15px',
        fontFamily: '"Segoe UI"',
        width: '1280px',
        height: '720px',
      }}
    >
      <div className="flex flex-col" style={{ paddingLeft: '90px', paddingTop: '100px' }}>
        <span style={{
          fontFamily: '"Noto Sans", sans-serif',
          fontWeight: '100'
        }}>{`Hello ${name}`}</span>
        <span style={{
          marginTop: '20px',
          fontFamily: '"Noto Sans", sans-serif',
          fontWeight: '500',
          fontStyle: 'italic',
          fontSize: '120px'
        }}>Its Your Birthday</span>
      </div>
    </AbsoluteFill>
  )
}


