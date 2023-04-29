import {
  InputPatternFormat,
  InputPatternFormatProps,
} from "../InputPatternFormat/InputPatternFormat";

type InputPhoneProps = Omit<InputPatternFormatProps, "format">;

export function InputPhone(props: InputPhoneProps) {
  return <InputPatternFormat format="(###) #### ###" {...props} />;
}
