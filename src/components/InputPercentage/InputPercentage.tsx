import { InputAdornment } from "@mui/material";
import {
  InputNumericFormat,
  InputNumericFormatProps,
  validateValue,
} from "../InputNumericFormat/InputNumericFormat";

type InputPercentageProps = InputNumericFormatProps & {
  maxValue?: number;
};

export function InputPercentage(props: InputPercentageProps) {
  const { maxValue = 100, ...otherProps } = props;

  return (
    <InputNumericFormat
      thousandSeparator={false}
      isAllowed={(values) => validateValue(values, { max: maxValue })}
      InputProps={{
        endAdornment: <InputAdornment position="end">%</InputAdornment>,
      }}
      {...otherProps}
    />
  );
}
