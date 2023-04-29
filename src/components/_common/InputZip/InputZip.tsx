import {
  InputPatternFormat,
  InputPatternFormatProps,
} from "../InputPatternFormat/InputPatternFormat";

type InputZipProps = Omit<InputPatternFormatProps, "format">;

export function InputZip(props: InputZipProps) {
  return <InputPatternFormat format="#####" {...props} />;
}
