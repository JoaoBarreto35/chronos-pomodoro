import styles from "./styles.module.css";

type defaultInputProps = {
  //type: "text" | "number" | "search";
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: defaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} id={id} type={type} {...rest}></input>
    </>
  );
}
