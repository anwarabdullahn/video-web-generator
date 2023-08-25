import { z } from "zod";

export const CompositionProps = z.object({
  name: z.string(),
  backgroundColor: z.string(),
  color: z.string(),
  age: z.number()
});

export const mainDefaultProps: z.infer<typeof CompositionProps> = {
  name: "Your Name",
  backgroundColor: '#0bbbb9',
  color: '#ffffff',
  age: 27
};

export const Main = ({ name, backgroundColor, color }: z.infer<typeof CompositionProps>) => {
  return (
    <div
      className="m-4"
      style={{
        backgroundColor,
        color,
        flexGrow: 1,
        fontSize: '70px',
        borderRadius: '15px',
        fontFamily: '"Segoe UI"'
      }}>
      <div className="flex flex-col" style={{ marginLeft: '90px', marginTop: '100px' }}>
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
    </div>
  )
}


