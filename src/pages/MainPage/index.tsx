import TodoCard from "../../components/Todo/Card";
import CreateButton from "../../components/Todo/CreateButton";
import TodoDescription from "../../components/Todo/Description";
import { type Dispatch, type SetStateAction, useState } from "react";
import type { Todo } from "../../types/Todo/todo.type";
import * as S from "./style";
import { useAtom, useSetAtom } from "jotai";
import {
  InCompleteTodoAtom,
  InTrashTodoAtom,
  InProgressTodoAtom,
} from "../../store/Todo/todo.store";
import { useUpdateTodoLists } from "../../hooks/useUpdateTodoLists";
import Modify from "../../components/Modal/Modify";

const MainPage = () => {
  const [todoInputList, setTodoInputList] = useState<Todo[]>([]);

  const [progressTodo, setProgressTodo] = useAtom(InProgressTodoAtom);
  const [completeTodo, setCompleteTodo] = useAtom(InCompleteTodoAtom);
  const setTrashTodo = useSetAtom(InTrashTodoAtom);

  const [todoToBeModify, setTodoToBeModify] = useState<Todo | null>(null);

  // Todo Input 추가해주는 함수
  const handleCreateInputItem = () => {
    setTodoInputList((prev) => [
      ...prev,
      {
        id: new Date().toISOString(),
        content: "",
        isComplete: false,
        isEdit: false,
      },
    ]);
  };

  // Todo를 휴지통으로 옮겨주는 함수
  const handleMoveTodoToTrash = (
    item: Todo,
    type: "InProgress" | "InComplete"
  ) => {
    const answer = window.confirm("이 todo를 휴지통으로 이동할까요?");

    if (answer) {
      const removeTodoState =
        type === "InProgress" ? setProgressTodo : setCompleteTodo;

      removeTodoState((prev) =>
        prev.filter((prevItem) => prevItem.id !== item.id)
      );

      setTrashTodo((prev) => [...prev, item]);
    }
  };

  // Todo checkbox switch 로직
  const handleSwitchTodoCheckbox = (todo: Todo) => {
    const removeFromList = todo.isComplete ? setCompleteTodo : setProgressTodo;
    const addToList = todo.isComplete ? setProgressTodo : setCompleteTodo;

    removeFromList((prev) => prev.filter((item) => item.id !== todo.id));

    addToList((prev) => [
      ...prev,
      {
        ...todo,
        isComplete: !todo.isComplete,
      },
    ]);
  };

  // todo list들의 상태를 update하는 라이프사이클, complete, trash, progress 상태를 관리함.
  useUpdateTodoLists();

  return (
    <S.Container>
      <S.Wrap>
        <TodoDescription text={"진행중인 TODO"} size={progressTodo.length} />

        <CreateButton onClick={handleCreateInputItem} />

        <FormInputList
          todoInputList={todoInputList}
          setTodoInputList={setTodoInputList}
        />

        {progressTodo
          .slice()
          .reverse()
          .map((item) => (
            <TodoCard
              key={item.id}
              checkbox={
                <TodoCard.Checkbox
                  onClick={() => handleSwitchTodoCheckbox(item)}
                />
              }
              content={
                <TodoCard.Content
                  text={item.content}
                  cursor="pointer"
                  onClick={() => setTodoToBeModify(item)}
                />
              }
              interactionIcon={
                <TodoCard.InteractionIcon
                  onClick={() => handleMoveTodoToTrash(item, "InProgress")}
                  type="trash"
                />
              }
            />
          ))}
      </S.Wrap>

      <S.Wrap>
        <TodoDescription text={"완료된 TODO"} size={completeTodo.length} />

        {completeTodo
          .slice()
          .reverse()
          .map((item) => (
            <TodoCard
              key={item.id}
              checkbox={
                <TodoCard.Checkbox
                  type="check"
                  onClick={() => handleSwitchTodoCheckbox(item)}
                />
              }
              content={
                <TodoCard.Content text={item.content} isComplete={true} />
              }
              interactionIcon={
                <TodoCard.InteractionIcon
                  onClick={() => handleMoveTodoToTrash(item, "InComplete")}
                  type="trash"
                />
              }
            />
          ))}
      </S.Wrap>

      {todoToBeModify && (
        <Modify
          todoToBeModify={todoToBeModify}
          setTodoToBeModify={setTodoToBeModify}
          setProgressTodo={setProgressTodo}
        />
      )}
    </S.Container>
  );
};

const FormInputList = ({
  todoInputList,
  setTodoInputList,
}: {
  todoInputList: Todo[];
  setTodoInputList: Dispatch<SetStateAction<Todo[]>>;
}) => {
  const setProgressTodo = useSetAtom(InProgressTodoAtom);

  // todo input onchange 함수
  const handleInputChange = (id: string, newValue: string) => {
    setTodoInputList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, content: newValue } : item
      )
    );
  };

  // todo input 요소를 삭제하는 함수
  const handleDeleteInputItem = (id: string) => {
    setTodoInputList((prev) => prev.filter((item) => item.id !== id));
  };

  // todo 등록 함수
  const handleTodoSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    item: Todo
  ) => {
    e.preventDefault();

    setProgressTodo((prev) => [...prev, item]);
    handleDeleteInputItem(item.id);
  };

  return (
    <>
      {todoInputList.length > 0 &&
        todoInputList.map((item) => (
          <TodoCard
            key={item.id}
            checkbox={<TodoCard.Checkbox />}
            content={
              <TodoCard.FormInput
                value={item.content}
                onSubmit={(e) =>
                  handleTodoSubmit(e as React.FormEvent<HTMLFormElement>, item)
                }
                onChange={(e) => handleInputChange(item.id, e.target.value)}
              />
            }
            interactionIcon={
              <TodoCard.InteractionIcon
                type="remove"
                onClick={() => handleDeleteInputItem(item.id)}
              />
            }
          />
        ))}
    </>
  );
};

export default MainPage;
