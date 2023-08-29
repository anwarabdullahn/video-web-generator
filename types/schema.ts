import { z } from "zod";
import { SimpleCompositionProps } from "./constants";

export const RenderRequest = z.object({
  id: z.string(),
  inputProps: SimpleCompositionProps,
});

export const ProgressRequest = z.object({
  bucketName: z.string(),
  id: z.string(),
});

export type ProgressResponse =
  | {
      type: "error";
      message: string;
    }
  | {
      type: "progress";
      progress: number;
    }
  | {
      type: "done";
      url: string;
      size: number;
    };
