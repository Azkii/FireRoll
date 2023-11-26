import { z } from "zod";

const ROOM_CODE_MIN = 4;
export const joinRoomFormSchema = z.object({
  code: z
    .string()
    .min(1, { message: "Room code is required." })
    .min(ROOM_CODE_MIN, {
      message: `Room code must be at least ${ROOM_CODE_MIN} characters.`,
    }),
});
