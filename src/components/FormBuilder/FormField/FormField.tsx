import { TextField } from "@mui/material";
import clsx from "clsx";
import { InputPhone } from "../../_common/InputPhone/InputPhone";
import { InputDollar } from "../../_common/InputDollar/InputDollar";
import { InputPercentage } from "../../_common/InputPercentage/InputPercentage";
import { InputSsn } from "../../_common/InputSsn/InputSsn";
import { InputTin } from "../../_common/InputTin/InputTin";
import { InputZip } from "../../_common/InputZip/InputZip";

export interface FormFieldProps {
  className?: string;
  id: string;
  label: string;
  name: string;
  type: FieldType;
}

type FieldType =
  | "text"
  | "email"
  | "number"
  | "dollar"
  | "percentage"
  | "phone"
  | "ssn"
  | "tin"
  | "zip";

export function FormField({ className, type, ...fieldProps }: FormFieldProps) {
  if (type === "text") {
    return (
      <TextField
        {...fieldProps}
        className={clsx(className, "form-field")}
        type="text"
      />
    );
  }

  if (type === "email") {
    return (
      <TextField
        {...fieldProps}
        className={clsx(className, "form-field")}
        type="email"
      />
    );
  }

  if (type === "phone") {
    return (
      <InputPhone {...fieldProps} className={clsx(className, "form-field")} />
    );
  }

  if (type === "dollar") {
    return (
      <InputDollar {...fieldProps} className={clsx(className, "form-field")} />
    );
  }

  if (type === "percentage") {
    return (
      <InputPercentage
        {...fieldProps}
        className={clsx(className, "form-field")}
      />
    );
  }

  if (type === "ssn") {
    return (
      <InputSsn {...fieldProps} className={clsx(className, "form-field")} />
    );
  }

  if (type === "tin") {
    return (
      <InputTin {...fieldProps} className={clsx(className, "form-field")} />
    );
  }

  if (type === "zip") {
    return (
      <InputZip {...fieldProps} className={clsx(className, "form-field")} />
    );
  }

  return <>unknown field type {type}</>;
}
