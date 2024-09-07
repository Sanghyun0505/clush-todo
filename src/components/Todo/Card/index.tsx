import type { ComponentProps, ReactNode } from "react";
import * as S from "./style";
import check_box from "../../../assets/icons/check_box.svg";
import uncheck_box from "../../../assets/icons/uncheck_box.svg";
import cancel from "../../../assets/icons/cancel.svg";
import rollback from "../../../assets/icons/rollback.svg";
import trash from "../../../assets/icons/trash.svg";
import Icon from "../../Icon";
import { CSSProperties, RuleSet } from "styled-components";

interface Props {
  checkbox?: ReactNode;
  content: ReactNode;
  interactionIcon?: ReactNode;

  customStyle?: RuleSet;
}

const TodoCard = ({
  checkbox = null,
  content,
  interactionIcon = null,
  customStyle,
}: Props) => {
  return (
    <S.TodoCardWrap $customStyle={customStyle!}>
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

const Content = ({
  text,
  isComplete = false,
  cursor = "auto",
  onClick,
}: {
  text: string;
  isComplete?: boolean;
  cursor?: CSSProperties["cursor"];
  onClick?: (e: React.MouseEvent<HTMLParagraphElement>) => void;
}) => {
  const textLength = text.length;

  return (
    <S.Content
      $textLength={textLength}
      $isComplete={isComplete}
      $cursor={cursor}
      onClick={onClick}
    >
      {textLength > 0 ? text : "내용없음"}
    </S.Content>
  );
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
  type: "remove" | "rollback" | "trash";
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}) => {
  const switchIcon = (type: "remove" | "rollback" | "trash") => {
    switch (type) {
      case "remove":
        return cancel;
      case "rollback":
        return rollback;
      case "trash":
        return trash;
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
