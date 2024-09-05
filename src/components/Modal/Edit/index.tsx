import type { Dispatch, SetStateAction } from "react";
import * as S from "./style";
import { useCloseModalOnEsc } from "../../../hooks/useCloseModalOnEsc";

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const Edit = ({ setIsActive }: Props) => {
  useCloseModalOnEsc(() => setIsActive(false));
  return (
    <S.Container onClick={() => setIsActive(false)}>
      <S.Wrap>
        <S.EditBox onClick={(e) => e.stopPropagation()}>
          <S.Ul>
            {["비우기", "편집"].map((item, idx) => (
              <S.Li key={idx}>{item}</S.Li>
            ))}
          </S.Ul>
        </S.EditBox>
      </S.Wrap>
    </S.Container>
  );
};

export default Edit;
