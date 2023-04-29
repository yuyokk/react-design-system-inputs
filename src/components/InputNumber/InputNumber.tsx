import {
  InputNumericFormat,
  InputNumericFormatProps,
  validateValue,
} from "../InputNumericFormat/InputNumericFormat";

type InputNumberProps = InputNumericFormatProps & {
  maxValue?: number;
};

export function InputNumber(props: InputNumberProps) {
  const {
    maxValue,
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
