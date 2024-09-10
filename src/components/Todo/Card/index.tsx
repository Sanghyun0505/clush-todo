import type { ComponentProps, ReactNode } from "react";
import * as S from "./style";
import { CSSProperties, RuleSet } from "styled-components";
import {
  CheckOutlined,
  CheckSquareFilled,
  CheckSquareOutlined,
  CloseOutlined,
  DeleteFilled,
  RollbackOutlined,
} from "@ant-design/icons";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";

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
} & AntdIconProps) => {
  <CheckSquareFilled {...props} />;

  return type === "uncheck" ? (
    <CheckSquareOutlined
      style={{ ...S.CheckBoxStyle, color: "#5D5D5D" }}
      {...props}
    />
  ) : (
    <CheckSquareFilled style={S.CheckBoxStyle} {...props} />
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
} & AntdIconProps) => {
  const switchIcon = (type: "remove" | "rollback" | "trash" | "check") => {
    switch (type) {
      case "remove":
        return <CloseOutlined style={S.InteractionIconStyle} {...props} />;
      case "rollback":
        return <RollbackOutlined style={S.InteractionIconStyle} {...props} />;
      case "trash":
        return <DeleteFilled style={S.InteractionIconStyle} {...props} />;
      case "check":
        return <CheckOutlined style={S.InteractionIconStyle} {...props} />;
      default:
        return null;
    }
  };

  return switchIcon(type);
};

TodoCard.Checkbox = Checkbox;
TodoCard.Content = Content;
TodoCard.FormInput = FormInput;
TodoCard.InteractionIcon = InteractionIcon;

export default TodoCard;
