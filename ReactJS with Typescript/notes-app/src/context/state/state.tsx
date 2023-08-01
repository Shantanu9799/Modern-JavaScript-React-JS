import { createContext } from "react";
import { NoteType } from "../../components/note/note-type";
import { ALL_ACTIONS } from "../../actions";

export type StateType = {
  notes: NoteType[];
  editMode: boolean;
  noteToBeEditted: NoteType | null;
};

export type actionType = {
  type: ALL_ACTIONS;
  payload: any;
};

export const StateContext = createContext<{ state: StateType; dispatch: (action: actionType)=>void }>(
  {} as { state: StateType; dispatch: (action: actionType)=>void }
);
