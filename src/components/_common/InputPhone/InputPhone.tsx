import { NumberFormatValues } from "react-number-format";
import {
  InputPatternFormat,
  InputPatternFormatProps,
} from "../InputPatternFormat/InputPatternFormat";

type InputPhoneProps = Omit<InputPatternFormatProps, "format">;

export function InputPhone(props: InputPhoneProps) {
  function handleIsAllowed(values: NumberFormatValues) {
    const { value } = values;

    if (typeof value === "undefined") {
      return true;
    }

    // Valid phone numbers cannot start with 0 or 1
    if (value.startsWith("0") || value.startsWith("1")) {
      return false;
    }

    return true;
  }

  return (
    <InputPatternFormat
      format="(###) #### ###"
      inputProps={{ inputMode: "tel" }}
      isAllowed={handleIsAllowed}
      {...props}
    />
  );
}
