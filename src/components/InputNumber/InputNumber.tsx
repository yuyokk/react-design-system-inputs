import {
  InputNumericFormat,
  InputNumericFormatProps,
  validateValue,
} from "../InputNumericFormat/InputNumericFormat";

const MAX_VALUE = 10_000_000;

type InputNumberProps = InputNumericFormatProps & {
  maxValue?: number;
};

export function InputNumber(props: InputNumberProps) {
  const {
    maxValue = MAX_VALUE,
    thousandSeparator = false,
    decimalScale = 0,
    ...otherProps
  } = props;

  return (
    <InputNumericFormat
      thousandSeparator={thousandSeparator}
      decimalScale={decimalScale}
      isAllowed={(values) => validateValue(values, { max: maxValue })}
      {...otherProps}
    />
  );
}
