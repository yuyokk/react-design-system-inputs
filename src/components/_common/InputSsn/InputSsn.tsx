import {
  InputPatternFormat,
  InputPatternFormatProps,
} from "../InputPatternFormat/InputPatternFormat";

type InputSsnProps = Omit<InputPatternFormatProps, "format">;

export function InputSsn(props: InputSsnProps) {
  return <InputPatternFormat format="###-##-####" {...props} />;
}
