interface ErrorMsgI {
  message: string;
}
export function ErrorMsg({ message }: ErrorMsgI) {
  return <div className={"form__error"}>{message}</div>;
}
