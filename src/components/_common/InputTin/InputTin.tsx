import {
  InputPatternFormat,
  InputPatternFormatProps,
} from "../InputPatternFormat/InputPatternFormat";

type InputTinProps = Omit<InputPatternFormatProps, "format">;

export function InputTin(props: InputTinProps) {
  return (
    <InputPatternFormat
      format="##-#######"
      inputProps={{ inputMode: "numeric" }}
      {...props}
    />
  );
}
