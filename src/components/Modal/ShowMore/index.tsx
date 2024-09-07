import { type Dispatch, type SetStateAction } from "react";
import * as S from "./style";
import { useCloseModalOnEsc } from "../../../hooks/useCloseModalOnEsc";
import { useAtom, useSetAtom } from "jotai";
import {
  InTrashTodoAtom,
  IsTodoRemoveAtom,
} from "../../../store/Todo/todo.store";

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const ShowMore = ({ setIsActive }: Props) => {
  useCloseModalOnEsc(() => setIsActive(false));

  const setTrashTodo = useSetAtom(InTrashTodoAtom);
  const [isTodoRemove, setIsTodoRemove] = useAtom(IsTodoRemoveAtom);

  const handleEmptyAllTodo = () => {
    const answer = window.confirm("모든 Todo를 완전히 삭제할까요?");

    if (answer) {
      setTrashTodo([]);
      setIsActive(false);
    }
  };

  const handleToggleTodoRemoveMode = () => {
    setIsTodoRemove((prev) => !prev);
    setIsActive(false);
  };

  return (
    <S.Container onClick={() => setIsActive(false)}>
      <S.Wrap>
        <S.EditBox onClick={(e) => e.stopPropagation()}>
          <S.Ul>
            <S.Li onClick={handleEmptyAllTodo}>비우기</S.Li>
            <S.Li onClick={handleToggleTodoRemoveMode}>
              {isTodoRemove ? "개별 삭제 취소" : "개별 삭제"}
            </S.Li>
          </S.Ul>
        </S.EditBox>
      </S.Wrap>
    </S.Container>
  );
};

export default ShowMore;
