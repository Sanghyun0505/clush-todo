import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useAtomValue } from "jotai";
import {
  InCompleteTodoAtom,
  InTrashTodoAtom,
  InProgressTodoAtom,
} from "../store/Todo/todo.store";

export const useUpdateTodoLists = () => {
  const { setStorage } = useLocalStorage();

  const progressTodo = useAtomValue(InProgressTodoAtom);
  const completeTodo = useAtomValue(InCompleteTodoAtom);
  const trashTodo = useAtomValue(InTrashTodoAtom);

  useEffect(() => {
    setStorage("InProgress", JSON.stringify([...progressTodo]));
  }, [progressTodo]);

  useEffect(() => {
    setStorage("InComplete", JSON.stringify([...completeTodo]));
  }, [completeTodo]);

  useEffect(() => {
    setStorage("InTrash", JSON.stringify([...trashTodo]));
  }, [trashTodo]);
};
