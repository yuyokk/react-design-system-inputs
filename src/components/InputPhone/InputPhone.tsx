import {
  InputPatternFormat,
  InputPatternFormatProps,
} from "../InputPatternFormat/InputPatternFormat";

type InputPhoneProps = Omit<InputPatternFormatProps, "format">;

export function InputPhone(props: InputPhoneProps) {
  // TODO: add `isAllowed` that contains checks:
  // - phone should not start from 0 or 1
  return <InputPatternFormat format="(###) #### ###" {...props} />;
}
