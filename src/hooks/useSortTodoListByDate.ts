import { useCallback } from "react";
import { Todo } from "../types/Todo/todo.type";

export const useSortTodoListByDate = () => {
  const sortTodoListByDate = useCallback((list: Todo[]) => {
    return list.sort((a, b) => +new Date(b.id) - +new Date(a.id)); // +를 붙여야 ts가 Date를 숫자로 인식함
  }, []);

  return sortTodoListByDate;
};
  