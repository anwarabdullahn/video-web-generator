import { z } from "zod";
import { useCurrentFrame, Loop, Img, staticFile } from "remotion";
import { HappyPerson } from "../BirthdayComp/HappyPerson";
import { AgeIncrement } from "../BirthdayComp/AgeIncrement";
import { Floating } from "./Floating";
import { Animated, Move } from "remotion-animated";
import { Stars } from "./assets";
import { v4 as uuidv4 } from 'uuid';
import { Typography } from "antd";
import { Page1CompositionProps, Page2CompositionProps } from "@/types/constants";

export const BCPage1 = ({ age, backgroundColor, color }: z.infer<typeof Page1CompositionProps>) => {
  return (
    <div
      style={{
        flexGrow: 1,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor,
        color,
        fontSize: '70px',
        fontFamily: '"Segoe UI"'
      }}>
      <Loop durationInFrames={90}>
        <AgeIncrement age={age} color={color} />
      </Loop>
      <Loop durationInFrames={60}>
        <HappyPerson />
      </Loop>
    </div>
  )
}

export const BCPage2 = ({ backgroundColor, wishes, color }: z.infer<typeof Page2CompositionProps>) => {
  const frame = useCurrentFrame()
  const rotateRight = `${frame * 5}deg`
  const rotateLeft = `${frame * -5}deg`
  const stars = [
    {
      fill: "#ef4b8b",
      width: '500px',
      top: '-100px',
      left: '100px',
      rotateRight: true
    },
    {
      fill: "#fde77b",
      width: '300px',
      bottom: '-30px',
      left: '100px',
      rotateRight: true
    },
    {
      fill: "#e1d5e8",
      width: '360px',
      bottom: '-30px',
      left: '-130px',
      rotateRight: false
    },
    {
      fill: "#72b1ba",
      width: '600px',
      top: '20px',
      left: '-200px',
      rotateRight: false
    },
  ]

  return (
    <div
      style={{
        flexGrow: 1,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor,
        color,
        fontSize: '70px',
        fontFamily: '"Segoe UI"'
      }}>
      <div>
        <Img
          style={{
            backgroundSize: 'cover',
            position: 'absolute',
            width: '1000px',
            bottom: '-80px',
            left: '-70px'
          }}
          src={staticFile('/background.svg')}
          alt="Vercel Logo"
          height={200}
        />
      </div>
      <Loop durationInFrames={50}>
        <div style={{
          position: 'absolute',
          width: '400px',
          bottom: '530px',
          left: '100px',
        }}>
          <Animated
            animations={[
              Move({ y: -20, start: 0 }),
              Move({ y: 19, start: 20 })
            ]}
          >
            <Floating assetName="floating1.svg" />
          </Animated>
        </div>
        <div style={{
          position: 'absolute',
          width: '300px',
          bottom: '235px',
          left: '200px',
        }}>
          <Animated
            animations={[
              Move({ y: -18, start: 5 }),
              Move({ y: 19, start: 25 })
            ]}
          >
            <Floating assetName="floating2.svg" />
          </Animated>
        </div>
        <div style={{
          position: 'absolute',
          width: '330px',
          bottom: '330px',
          left: '-40px',
        }}>
          <Animated
            animations={[
              Move({ y: 19, start: 5 }),
              Move({ y: -20, start: 25 })
            ]}
          >
            <Floating assetName="floating3.svg" />
          </Animated>
        </div>
        <div style={{
          position: 'absolute',
          width: '360px',
          bottom: '280px',
          left: '430px',
        }}>
          <Animated
            animations={[
              Move({ y: -15, start: 3 }),
              Move({ y: 15, start: 23 })
            ]}
          >
            <Floating assetName="floating4.svg" />
          </Animated>
        </div>
        <div style={{
          position: 'absolute',
          width: '360px',
          bottom: '750px',
          left: '-80px',
        }}>
          <Animated
            animations={[
              Move({ y: 16, start: 2 }),
              Move({ y: -16, start: 22 })
            ]}
          >
            <Floating assetName="floating5.svg" />
          </Animated>
        </div>
        <div style={{
          position: 'absolute',
          width: '290px',
          bottom: '580px',
          left: '370px',
        }}>
          <Animated
            animations={[
              Move({ y: 16, start: 2 }),
              Move({ y: -16, start: 22 })
            ]}
          >
            <Floating assetName="floating6.svg" />
          </Animated>
        </div>
      </Loop>
      {stars && stars.map((star: any) => {
        return (
          <div style={{
            position: 'absolute',
            width: star.width,
            top: star.top ? star.top : 'unset',
            bottom: star.bottom ? star.bottom : 'unset',
            left: star.left,
            transform: `rotateZ(${star.rotateRight ? rotateRight : rotateLeft})`
          }}
            key={uuidv4()}
          >
            <Stars fill={star.fill} />
          </div>
        )
      })}
      <div
        className="text-right"
        style={{ maxWidth: '800px', position: 'absolute', right: 50, top: 20 }}
      >
        <Typography
          style={{ fontSize: '130px', fontFamily: "CHABUL, sans-serif", color, wordWrap: 'break-word', textShadow: '3px 3px #000' }}
        >
          {wishes}
        </Typography>
      </div>
    </div>
  )
}
