import { useAtom, useSetAtom } from "jotai";
import TodoCard from "../../components/Todo/Card";
import TodoDescription from "../../components/Todo/Description";
import {
  InCompleteTodoAtom,
  InTrashTodoAtom,
  InProgressTodoAtom,
  IsTodoRemoveAtom,
} from "../../store/Todo/todo.store";
import type { Todo } from "../../types/Todo/todo.type";
import { useEffect } from "react";
import styled from "styled-components";
import { Flex } from "../../styles/flex";
import { useUpdateTodoLists } from "../../hooks/useUpdateTodoLists";
import { useSortTodoListByDate } from "../../hooks/useSortTodoListByDate";

const TrashPage = () => {
  const [trashTodo, setTrashTodo] = useAtom(InTrashTodoAtom);
  const setCompleteTodo = useSetAtom(InCompleteTodoAtom);
  const setProgressTodo = useSetAtom(InProgressTodoAtom);

  const [isTodoRemove, setIsTodoRemove] = useAtom(IsTodoRemoveAtom);

  const sortTodoListByDate = useSortTodoListByDate();

  // 휴지통에 있는 todo를 개별 삭제, 복원하는 함수
  const handleTrashTodoAction = (item: Todo) => {
    const answer = window.confirm(
      isTodoRemove ? "Todo 1개를 완전히 삭제할까요?" : "Todo 1개를 복원할까요?"
    );

    if (answer) {
      if (!isTodoRemove) {
        // 복원이라면..
        if (item.isComplete) {
          // 복원하는 Todo가 진행, 완료 중인 상태에 따라 각 맞는 리스트에 다시 포함
          setCompleteTodo((prev) => [...prev, item]);
        } else {
          setProgressTodo((prev) => [...prev, item]);
        }
      }

      setTrashTodo((prev) =>
        prev.filter((prevItem) => prevItem.id !== item.id)
      );
    }
  };

  useUpdateTodoLists();

  useEffect(() => {
    return () => setIsTodoRemove(false);
  }, []);

  return (
    <>
      <TodoDescription text={"버려진 TODO"} size={trashTodo.length} />

      {trashTodo.length > 0 ? (
        sortTodoListByDate(trashTodo).map((item) => (
          <TodoCard
            key={item.id}
            content={<TodoCard.Content text={item.content} />}
            interactionIcon={
              <TodoCard.InteractionIcon
                type={isTodoRemove ? "remove" : "rollback"}
                onClick={() => handleTrashTodoAction(item)}
              />
            }
          />
        ))
      ) : (
        <ListEmpty>
          <p>TODO가 없습니다</p>
        </ListEmpty>
      )}
    </>
  );
};

export default TrashPage;

const ListEmpty = styled.div`
  width: 100%;
  height: 100vh;

  color: #5d5d5d;
  ${Flex({ alignItems: "center", justifyContent: "center" })}

  p {
    font-family: "Prtendard-SemiBold" !important;
  }
`;
