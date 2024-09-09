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

  const handleTodoModify = () => {
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
              onSubmit={(e) => {
                e.preventDefault();
                handleTodoModify();
              }}
              onChange={(e) => setContent(e.target.value)}
            />
          }
          interactionIcon={
            <TodoCard.InteractionIcon type="check" onClick={handleTodoModify} />
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

  padding: 50px 30px;
`;

const Wrap = styled.div``;

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
