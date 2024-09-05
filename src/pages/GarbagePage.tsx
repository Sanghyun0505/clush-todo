import TodoCard from "../components/Todo/Card";
import TodoDescription from "../components/Todo/Description";

const GarbagePage = () => {
  return (
    <>
      <TodoDescription text={"버려진 TODO"} size={2} />

      <TodoCard
        content={<TodoCard.Content text="TODO CONTENT" />}
        interactionIcon={<TodoCard.InteractionIcon type="rollback" />}
      />
      <TodoCard
        content={<TodoCard.Content text="TODO CONTENT" />}
        interactionIcon={<TodoCard.InteractionIcon type="rollback" />}
      />
    </>
  );
};

export default GarbagePage;
