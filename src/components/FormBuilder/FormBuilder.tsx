import clsx from "clsx";
import { Box } from "@mui/material";
import { FormField, FormFieldProps } from "./FormField/FormField";
import { FormAction, FormActionProps } from "./FormAction/FormAction";

export type FormFields = FormFieldProps[];
export type FormActions = FormActionProps[];

interface FormBuilderProps {
  className?: string;
  fields: FormFields;
  actions: FormActions;
}

export function FormBuilder({ className, fields, actions }: FormBuilderProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  }

  return (
    <Box
      className={clsx(className, "form-builder")}
      component="form"
      onSubmit={handleSubmit}
    >
      {fields.map((field) => (
        <FormField {...field} key={field.id} />
      ))}

      {actions.map((action) => (
        <FormAction {...action} key={action.id} />
      ))}
    </Box>
  );
}
