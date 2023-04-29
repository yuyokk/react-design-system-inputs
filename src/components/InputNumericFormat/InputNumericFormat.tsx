import { TextField, TextFieldProps } from "@mui/material";
import {
  NumberFormatValues,
  NumericFormat,
  NumericFormatProps,
} from "react-number-format";

export type InputNumericFormatProps = Omit<
  NumericFormatProps<TextFieldProps>,
  "customInput"
>;

export function InputNumericFormat(props: InputNumericFormatProps) {
  const { allowNegative = false, decimalScale = 2, ...otherProps } = props;

  return (
    <NumericFormat
      allowNegative={allowNegative}
      decimalScale={decimalScale}
      customInput={TextField}
      {...otherProps}
    />
  );
}

/* eslint-disable-next-line react-refresh/only-export-components */
export function validateValue(
  values: NumberFormatValues,
  { max }: { max: number | undefined }
) {
  // Lets block the user from entering a value greater than `max`
  const { floatValue } = values;

  if (typeof floatValue === "undefined" || typeof max === "undefined") {
    return true;
  }

  return floatValue > max ? false : true;
}
