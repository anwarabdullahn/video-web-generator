import { z } from "zod";

export const CompositionProps = z.object({
 name: z.string(),
 backgroundColor: z.string(),
 color: z.string()
});

export const defaultProps: z.infer<typeof CompositionProps> = {
 name: "Your Name",
 backgroundColor: '#0bbbb9',
 color: '#ffffff',
};

export const Main = ({ name, backgroundColor, color }: z.infer<typeof CompositionProps>) => {
 return (
  <div style={{
   backgroundColor,
   color,
   width: '1920px',
   fontSize: '80px',
   height: '720px',
   borderRadius: '15px',
   fontFamily: '"Segoe UI"'
  }}>
   <div className="flex flex-col" style={{ marginLeft: '30px' }}>
    <span style={{
     fontFamily: '"Noto Sans", sans-serif',
     fontWeight: '100'
    }}>{`Hello ${name}`}</span>
    <span style={{
     fontFamily: '"Noto Sans", sans-serif',
     fontWeight: '500',
     fontStyle: 'italic',
     fontSize: '100px'
    }}>Its Your Birthday</span>
   </div>
  </div>
 )
}

