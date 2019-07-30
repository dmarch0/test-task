import { OPEN_FILE_DND, CLOSE_FILE_DND } from "./types";

export const openDnd = () => ({ type: OPEN_FILE_DND });
export const closeDnd = () => ({ type: CLOSE_FILE_DND });
