import { InputAdornment } from "@mui/material";
import {
  InputNumericFormat,
  InputNumericFormatProps,
  validateValue,
} from "../InputNumericFormat/InputNumericFormat";

type InputDollarProps = InputNumericFormatProps & {
  maxValue?: number;
};

export function InputDollar(props: InputDollarProps) {
  const { maxValue, ...otherProps } = props;

  return (
    <InputNumericFormat
      thousandSeparator=","
      isAllowed={(values) => validateValue(values, { max: maxValue })}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      {...otherProps}
    />
  );
}
