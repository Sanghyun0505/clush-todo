import styled, { css, keyframes } from "styled-components";
import { Todo } from "../../../types/Todo/todo.type";
import { Dispatch, SetStateAction, useState } from "react";
import { useCloseModalOnEsc } from "../../../hooks/useCloseModalOnEsc";
import TodoCard from "../../Todo/Card";

interface Props {
  todoToBeModify: Todo;
  setTodoToBeModify: Dispatch<SetStateAction<Todo | null>>;
  setProgressTodo: Dispatch<SetStateAction<Todo[]>>;
}

const Modify = ({
  todoToBeModify,
  setTodoToBeModify,
  setProgressTodo,
}: Props) => {
  useCloseModalOnEsc(() => setTodoToBeModify(null));

  const [content, setContent] = useState(todoToBeModify.content);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const answer = window.confirm("이 Todo를 수정하시겠습니까?");

    if (answer) {
      console.log(content);
      setProgressTodo((prev) =>
        prev.map((item) =>
          item.id === todoToBeModify.id ? { ...item, content } : item
        )
      );

      setTodoToBeModify(null);
    }
  };

  return (
    <Container onClick={() => setTodoToBeModify(null)}>
      <Wrap onClick={(e) => e.stopPropagation()}>
        <TodoCard
          content={
            <TodoCard.FormInput
              value={content}
              onSubmit={(e) =>
                handleSubmit(e as React.FormEvent<HTMLFormElement>)
              }
              onChange={(e) => setContent(e.target.value)}
            />
          }
          customStyle={TodoCardStyle}
        />
      </Wrap>
    </Container>
  );
};

export default Modify;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  position: absolute;
  top: 0;
  left: 0;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 30px;
`;

const slideIn = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(60%);
  }
`;

const TodoCardStyle = css`
  animation: ${slideIn} 0.7s ease forwards;
`;
