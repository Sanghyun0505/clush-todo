import type { ComponentProps, ReactNode } from "react";
import * as S from "./style";
import check_box from "../../../assets/icons/check_box.svg";
import uncheck_box from "../../../assets/icons/uncheck_box.svg";
import cancel from "../../../assets/icons/cancel.svg";
import rollback from "../../../assets/icons/rollback.svg";
import trash from "../../../assets/icons/trash.svg";
import check from "../../../assets/icons/check.svg";
import Icon, { Props as IconProps } from "../../Icon";
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
  ...props
}: {
  type?: "check" | "uncheck";
} & IconProps) => {
  return (
    <Icon
      src={type === "uncheck" ? uncheck_box : check_box}
      width={"24px"}
      height={"24px"}
      alt="checkbox_icon"
      {...props}
    />
  );
};

const Content = ({
  text,
  isComplete = false,
  cursor = "auto",
  ...props
}: {
  text: string;
  isComplete?: boolean;
  cursor?: CSSProperties["cursor"];
} & ComponentProps<"p">) => {
  const textLength = text.length;

  return (
    <S.Content
      $textLength={textLength}
      $isComplete={isComplete}
      $cursor={cursor}
      {...props}
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
      <S.Input placeholder="내용없음" autoFocus {...props} />
    </S.Form>
  );
};

const InteractionIcon = ({
  type,
  ...props
}: {
  type: "remove" | "rollback" | "trash" | "check";
} & IconProps) => {
  const switchIcon = (type: "remove" | "rollback" | "trash" | "check") => {
    switch (type) {
      case "remove":
        return cancel;
      case "rollback":
        return rollback;
      case "trash":
        return trash;
      case "check":
        return check;
      default:
        return "";
    }
  };

  return <Icon src={switchIcon(type)} alt="interaction_icon" {...props} />;
};

TodoCard.Checkbox = Checkbox;
TodoCard.Content = Content;
TodoCard.FormInput = FormInput;
TodoCard.InteractionIcon = InteractionIcon;

export default TodoCard;
