import { InputAdornment } from "@mui/material";
import {
  InputNumericFormat,
  InputNumericFormatProps,
  validateValue,
} from "../InputNumericFormat/InputNumericFormat";

const MAX_VALUE = 100;

type InputPercentageProps = InputNumericFormatProps & {
  maxValue?: number;
};

export function InputPercentage(props: InputPercentageProps) {
  const { maxValue = MAX_VALUE, ...otherProps } = props;

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
