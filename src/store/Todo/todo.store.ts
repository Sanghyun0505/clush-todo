import { atom } from "jotai";
import type { Todo } from "../../types/Todo/todo.type";

export const InProgressTodoAtom = atom<Todo[]>(
  (JSON.parse(localStorage.getItem("InProgress") || "[]") as Todo[]) ?? []
);

export const InCompleteTodoAtom = atom<Todo[]>(
  (JSON.parse(localStorage.getItem("InComplete") || "[]") as Todo[]) ?? []
);

export const InTrashTodoAtom = atom<Todo[]>(
  (JSON.parse(localStorage.getItem("InTrash") || "[]") as Todo[]) ?? []
);

export const IsTodoRemoveAtom = atom<boolean>(false);
