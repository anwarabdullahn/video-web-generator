import { z } from "zod";
// import { HappySVG } from "./assets";
import { useVideoConfig, useCurrentFrame, spring, Loop } from "remotion";
import { HappyPerson } from "../BirthdayComp/HappyPerson";
import { AgeIncrement, ageIncrementProps } from "../BirthdayComp/AgeIncrement";

export const CompositionProps = z.object({
  name: z.string(),
  backgroundColor: z.string(),
  color: z.string(),
  age: z.number()
});

export const page1DefaultProps: z.infer<typeof CompositionProps> = {
  name: "Your Name",
  backgroundColor: '#ddafee',
  color: '#ffffff',
  age: 27
};

export const BCPage1 = ({ age, backgroundColor, color }: z.infer<typeof CompositionProps>) => {
  const currentAge = Number(age)
  const lastAge = Number(age) - 1
  const { fps, durationInFrames } = useVideoConfig()
  const frame = useCurrentFrame()
  let scale = spring({
    fps,
    frame,
  });

  return (
    <div
      className="m-4"
      style={{
        flexGrow: 1,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor,
        color,
        fontSize: '70px',
        borderRadius: '15px',
        fontFamily: '"Segoe UI"'
      }}>
      <AgeIncrement age={ageIncrementProps.age} />
      <Loop durationInFrames={60}>
        <HappyPerson />
      </Loop>
    </div>
  )
}