import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Animated, Move, Scale } from "remotion-animated";
import { BirthdayCompositionProps } from "@/types/constants";
import { z } from "zod";

export const BirthdayCard = ({ name, backgroundColor, color }: z.infer<typeof BirthdayCompositionProps>) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const scale = spring({ fps, frame, delay: 30 });
  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        color,
        flexGrow: 1,
        fontSize: '70px',
        // borderRadius: '15px',
        fontFamily: '"Segoe UI"',
        width: '1280px',
        height: '720px',
        overflow: 'hidden'
      }}
    >
      <div className="flex flex-col" style={{ paddingLeft: '90px', paddingTop: '100px' }}>
        <Animated
          animations={[
            Move({ x: 810, start: 10 })
          ]}
        >
          <span style={{
            fontFamily: '"Noto Sans", sans-serif',
            fontWeight: '100',
            marginLeft: '-800px'
          }}>{`Hello ${name}`}</span>
        </Animated>
        <Animated
          animations={[
            Scale({ by: 2, start: 30 })
          ]}
        >
          
        </Animated>
        <span style={{
            marginTop: '20px',
            fontFamily: '"Handyplast", sans-serif',
            fontWeight: '500',
            transform: `scale(${scale})`,
            fontStyle: 'italic',
            fontSize: '120px'
          }}>Its Your Birthday!</span>
      </div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </AbsoluteFill>
  )
}


