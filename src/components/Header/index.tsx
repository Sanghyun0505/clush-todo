import { useState, type ReactNode } from "react";
import see_more from "../../assets/icons/see_more.svg";
import left_arrow from "../../assets/icons/left_arrow.svg";
import edit_dots from "../../assets/icons/edit_dots.svg";
import * as S from "./style";
import { useRouter } from "../../hooks/useRouter";
import Icon from "../Icon";
import Menu from "../Modal/Menu";
import Edit from "../Modal/Edit";

const Header = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

// ============================ 아래부터는 Header Compound Component ============================ \\

const Main = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.HeaderWrap>
      <figure>
        <Icon
          src={see_more}
          width={"26px"}
          height={"26px"}
          onClick={() => setIsActive((prev) => !prev)}
          alt="see_more"
        />
      </figure>

      <S.PageTitle
        isActiveTransition={true}
        onClick={() => (window.location.href = "/")}
      >
        CLUSH TODO
      </S.PageTitle>

      <figure />

      {isActive && <Menu setIsActive={setIsActive} />}
    </S.HeaderWrap>
  );
};

const Garbage = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  return (
    <S.HeaderWrap>
      <figure onClick={router.back}>
        <Icon
          src={left_arrow}
          width={"23px"}
          height={"23px"}
          alt="left_arrow"
        />
      </figure>

      <S.PageTitle>휴지통</S.PageTitle>

      <figure>
        <Icon
          src={edit_dots}
          width={"20px"}
          height={"20px"}
          onClick={() => setIsActive((prev) => !prev)}
          alt="edit_dots"
        />
      </figure>

      {isActive && <Edit setIsActive={setIsActive} />}
    </S.HeaderWrap>
  );
};

Header.Main = Main;
Header.Garbage = Garbage;

export default Header;
