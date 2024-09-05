import type { Dispatch, SetStateAction } from "react";
import { useCloseModalOnEsc } from "../../../hooks/useCloseModalOnEsc";
import * as S from "./style";
import { MENU_ITEMS } from "./constant";
import Icon from "../../Icon";
import { useRouter } from "../../../hooks/useRouter";

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ setIsActive }: Props) => {
  useCloseModalOnEsc(() => setIsActive(false));

  const { push } = useRouter();

  const handlePageMove = (link: string) => {
    setTimeout(() => {
      push(link);
      setIsActive(false);
    }, 200);
  };

  return (
    <S.Container onClick={() => setIsActive(false)}>
      <S.MenuBox onClick={(e) => e.stopPropagation()}>
        <S.Ul>
          {MENU_ITEMS.map((item) => (
            <S.Li key={item.id} onClick={() => handlePageMove(item.link)}>
              <Icon
                src={item.icon}
                width={"28px"}
                height={"28px"}
                alt="menu_icon"
              />
              <p>{item.title}</p>
            </S.Li>
          ))}
        </S.Ul>
      </S.MenuBox>
    </S.Container>
  );
};

export default Menu;
