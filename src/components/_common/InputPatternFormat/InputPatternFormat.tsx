import { TextField, TextFieldProps } from "@mui/material";
import { PatternFormat, PatternFormatProps } from "react-number-format";

export type InputPatternFormatProps = Omit<
  PatternFormatProps<TextFieldProps>,
  "customInput"
>;

export function InputPatternFormat(props: InputPatternFormatProps) {
  const {
    valueIsNumericString = true,
    allowEmptyFormatting = true,
    mask = "_",
    ...otherProps
  } = props;

  return (
    <PatternFormat
      valueIsNumericString={valueIsNumericString}
      allowEmptyFormatting={allowEmptyFormatting}
      mask={mask}
      inputProps={{ inputMode: "numeric" }}
      customInput={TextField}
      {...otherProps}
    />
  );
}
