import { Button } from "@mui/material";
import clsx from "clsx";
import React from "react";

export interface FormActionProps {
  className?: string;
  id: string;
  label: string | React.ReactNode;
  type: "submit" | "button";
}

export function FormAction({ className, label, type }: FormActionProps) {
  return (
    <Button className={clsx(className, "form-action")} type={type}>
      {label}
    </Button>
  );
}
