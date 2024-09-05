import styled from "styled-components";
import TodoCard from "../components/Todo/Card";
import CreateButton from "../components/Todo/CreateButton";
import TodoDescription from "../components/Todo/Description";
import { Flex } from "../styles/flex";

const MainPage = () => {
  return (
    <Container>
      <Wrap>
        <TodoDescription text={"진행중인 TODO"} size={1} />

        <CreateButton />

        <TodoCard
          checkbox={<TodoCard.Checkbox />}
          content={<TodoCard.Content text="TODO CONTENT" />}
          interactionIcon={<TodoCard.InteractionIcon type="delete" />}
        />
      </Wrap>

      <Wrap>
        <TodoDescription text={"완료된 TODO"} size={2} />

        <TodoCard
          checkbox={<TodoCard.Checkbox type="check" />}
          content={<TodoCard.Content text="TODO CONTENT" />}
          interactionIcon={<TodoCard.InteractionIcon type="garbage" />}
        />
        <TodoCard
          checkbox={<TodoCard.Checkbox type="check" />}
          content={<TodoCard.Content text="TODO CONTENT" />}
          interactionIcon={<TodoCard.InteractionIcon type="garbage" />}
        />
      </Wrap>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  ${Flex({ flexDirection: "column", rowGap: "40px" })}
`;

const Wrap = styled.div`
  ${Flex({ flexDirection: "column" })}
`;
