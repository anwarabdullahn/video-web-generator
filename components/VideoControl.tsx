import { z } from "zod";
import { useRendering } from "../helpers/use-rendering";
import { CompositionProps, COMP_NAME } from "../types/constants";
import { AlignEnd } from "./AlignEnd";
import { Button } from "./Button/Button";
import { InputContainer } from "./Container";
import { DownloadButton } from "./DownloadButton";
import { ErrorComp } from "./Error";
import { ProgressBar } from "./ProgressBar";
import { Spacing } from "./Spacing";
import { InputNumber, Input } from "antd";
import { HexColorPicker } from "react-colorful";
import '../styles/global.css'

export const VideoControl: React.FC<{
 name: string;
 age: number;
 wishes: string;
 mainBackgroundColor: string;
 mainColor: string;
 secondBackgroundColor: string;
 secondColor: string;
 thirdBackgroundColor: string;
 thirdColor: string;
 setName: React.Dispatch<React.SetStateAction<string>>;
 setAge: React.Dispatch<React.SetStateAction<number>>;
 setWishes: React.Dispatch<React.SetStateAction<string>>;
 setMainBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
 setMainColor: React.Dispatch<React.SetStateAction<string>>;
 setSecondBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
 setSecondColor: React.Dispatch<React.SetStateAction<string>>;
 setThirdBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
 setThirdColor: React.Dispatch<React.SetStateAction<string>>;
 inputProps: z.infer<typeof CompositionProps>;
}> = ({
 name,
 age,
 wishes,
 mainBackgroundColor,
 mainColor,
 secondBackgroundColor,
 secondColor,
 thirdBackgroundColor,
 thirdColor,
 setName,
 setAge,
 setWishes,
 setMainBackgroundColor,
 setMainColor,
 setSecondBackgroundColor,
 setSecondColor,
 setThirdBackgroundColor,
 setThirdColor,
 inputProps }) => {
  const { renderMedia, state, undo } = useRendering(COMP_NAME, inputProps);

  return (
   <InputContainer>
    {state.status === "init" ||
     state.status === "invoking" ||
     state.status === "error" ? (
     <div className="flex" style={{ flexDirection: 'column' }}>
      <div>
       <Input disabled={state.status === "invoking"} defaultValue={name} onChange={(e) => setName(e.target.value)} />
       <InputNumber min={1} max={100} defaultValue={age} onChange={(e: any) => setAge(e)} />
       <Input.TextArea disabled={state.status === "invoking"} defaultValue={wishes} onChange={(e) => setWishes(e.target.value)} />
      </div>
      <div className="flex mb-5" style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
       
        <HexColorPicker color={mainBackgroundColor} onChange={setMainBackgroundColor} />
       
        <HexColorPicker color={mainColor} onChange={setMainColor} />

      </div>
      <div className="flex mb-5" style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
       <HexColorPicker color={secondBackgroundColor} onChange={setSecondBackgroundColor} />
       <HexColorPicker color={secondColor} onChange={setSecondColor} />
      </div>
      <div className="flex mb-5" style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
       <HexColorPicker color={thirdBackgroundColor} onChange={setThirdBackgroundColor} />
       <HexColorPicker color={thirdColor} onChange={setThirdColor} />
      </div>
      <Spacing></Spacing>
      <AlignEnd>
       <Button
        disabled={state.status === "invoking"}
        loading={state.status === "invoking"}
        onClick={renderMedia}
       >
        Render video
       </Button>
      </AlignEnd>
      {state.status === "error" ? (
       <ErrorComp message={state.error.message}></ErrorComp>
      ) : null}
     </div>
    ) : null}
    {state.status === "rendering" || state.status === "done" ? (
     <>
      <ProgressBar
       progress={state.status === "rendering" ? state.progress : 1}
      />
      <Spacing></Spacing>
      <AlignEnd>
       <DownloadButton undo={undo} state={state}></DownloadButton>
      </AlignEnd>
     </>
    ) : null}
   </InputContainer>
  );
 };
