import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  title: z.string(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "Next.js and Remotion",
};

export const BirthdayCompositionProps = z.object({
  name: z.string(),
  backgroundColor: z.string(),
  color: z.string()
});

export const birthdayCardProps: z.infer<typeof BirthdayCompositionProps> = {
  name: "Your Name",
  backgroundColor: '#0bbbb9',
  color: '#ffffff'
};

export const Page1CompositionProps = z.object({
  name: z.string(),
  backgroundColor: z.string(),
  color: z.string(),
  age: z.number()
});

export const Page2CompositionProps = z.object({
  wishes: z.string(),
  backgroundColor: z.string(),
  color: z.string(),
});

export const page1DefaultProps: z.infer<typeof Page1CompositionProps> = {
  name: "Your Name",
  backgroundColor: '#ddafee',
  color: '#ffffff',
  age: 27
};

export const page2DefaultProps: z.infer<typeof Page2CompositionProps> = {
  backgroundColor: '#281651',
  color: '#ffffff',
  wishes: 'Enjoy Your Special Day!'
};

export const SimpleCompositionProps = z.object({
  name: z.string(),
  wishes: z.string(),
  age: z.number(),
  mainBackgroundColor: z.string(),
  mainColor: z.string(),
  secondBackgroundColor: z.string(),
  secondColor: z.string(),
  thirdBackgroundColor: z.string(),
  thirdColor: z.string(),
});

export const simpleDefaultProps: z.infer<typeof SimpleCompositionProps> = {
  name: birthdayCardProps.name,
  age: page1DefaultProps.age,
  wishes: page2DefaultProps.wishes,
  mainBackgroundColor: birthdayCardProps.backgroundColor,
  mainColor: birthdayCardProps.color,
  secondBackgroundColor: page1DefaultProps.backgroundColor,
  secondColor: page1DefaultProps.color,
  thirdBackgroundColor: page2DefaultProps.backgroundColor,
  thirdColor: page2DefaultProps.color,
}

export const DURATION_IN_FRAMES = 200;
export const VIDEO_WIDTH = 1280;
export const VIDEO_HEIGHT = 720;
export const VIDEO_FPS = 30;
