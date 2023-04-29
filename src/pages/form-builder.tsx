import {
  FormActions,
  FormBuilder,
  FormFields,
} from "../components/FormBuilder/FormBuilder";

const fields: FormFields = [
  {
    id: "firstName",
    label: "First Name",
    name: "firstName",
    type: "text",
  },
  {
    id: "lastName",
    label: "Last Name",
    name: "lastName",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    id: "phone",
    label: "Phone",
    name: "phone",
    type: "phone",
  },
  {
    id: "ssn",
    label: "SSN",
    name: "ssn",
    type: "ssn",
  },
  {
    id: "tin",
    label: "TIN",
    name: "tin",
    type: "tin",
  },
  {
    id: "zip",
    label: "ZIP",
    name: "zip",
    type: "zip",
  },
  {
    id: "fundingAmount",
    label: "Funding Amount Requested",
    name: "fundingAmount",
    type: "dollar",
  },
  {
    id: "ownershipPercentage",
    label: "Ownership Percentage",
    name: "ownershipPercentage",
    type: "percentage",
  },
];

const actions: FormActions = [
  {
    id: "save",
    label: "Save",
    type: "button",
  },
  {
    id: "submit",
    label: "Submit",
    type: "submit",
  },
];

export function FormBuilderPage() {
  return <FormBuilder fields={fields} actions={actions} />;
}
