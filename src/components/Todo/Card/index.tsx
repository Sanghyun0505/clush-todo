import type { ComponentProps, ReactNode } from "react";
import * as S from "./style";
import check_box from "../../../assets/icons/check_box.svg";
import uncheck_box from "../../../assets/icons/uncheck_box.svg";
import cancel from "../../../assets/icons/cancel.svg";
import rollback from "../../../assets/icons/rollback.svg";
import garbage from "../../../assets/icons/garbage.svg";
import Icon from "../../Icon";

interface Props {
  checkbox?: ReactNode;
  content: ReactNode;
  interactionIcon?: ReactNode;
}

const TodoCard = ({
  checkbox = null,
  content,
  interactionIcon = null,
}: Props) => {
  return (
    <S.TodoCardWrap>
      <div>
        {checkbox}
        {content}
      </div>

      {interactionIcon}
    </S.TodoCardWrap>
  );
};

// ============================ 아래부터는 TodoCard Compound Component ============================ \\

const Checkbox = ({
  type = "uncheck",
  onClick,
}: {
  type?: "check" | "uncheck";
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}) => {
  return (
    <Icon
      src={type === "uncheck" ? uncheck_box : check_box}
      width={"24px"}
      height={"24px"}
      onClick={onClick}
      alt="checkbox_icon"
    />
  );
};

const Content = ({ text }: { text: string }) => {
  return <S.Content>{text}</S.Content>;
};

const FormInput = ({
  onSubmit,
  ...props
}: {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
} & ComponentProps<"input">) => {
  return (
    <S.Form onSubmit={onSubmit}>
      <S.Input placeholder="내용없음" {...props} autoFocus />
    </S.Form>
  );
};

const InteractionIcon = ({
  type,
  onClick,
}: {
  type: "delete" | "rollback" | "garbage";
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}) => {
  const switchIcon = (type: "delete" | "rollback" | "garbage") => {
    switch (type) {
      case "delete":
        return cancel;
      case "rollback":
        return rollback;
      case "garbage":
        return garbage;
      default:
        return "";
    }
  };

  return (
    <Icon src={switchIcon(type)} onClick={onClick} alt="interaction_icon" />
  );
};

TodoCard.Checkbox = Checkbox;
TodoCard.Content = Content;
TodoCard.FormInput = FormInput;
TodoCard.InteractionIcon = InteractionIcon;

export default TodoCard;
