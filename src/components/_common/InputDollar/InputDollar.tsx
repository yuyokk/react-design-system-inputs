import { InputAdornment } from "@mui/material";
import {
  InputNumericFormat,
  InputNumericFormatProps,
  validateValue,
} from "../InputNumericFormat/InputNumericFormat";

const MAX_VALUE = 500_000_000;

type InputDollarProps = InputNumericFormatProps & {
  maxValue?: number;
};

export function InputDollar(props: InputDollarProps) {
  const { maxValue = MAX_VALUE, ...otherProps } = props;

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
