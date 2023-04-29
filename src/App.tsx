import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { InputZip } from "./components/InputZip/InputZip";
import { InputPhone } from "./components/InputPhone/InputPhone";
import { InputDollar } from "./components/InputDollar/InputDollar";
import { InputPercentage } from "./components/InputPercentage/InputPercentage";
import { InputSsn } from "./components/InputSsn/InputSsn";
import { InputTin } from "./components/InputTin/InputTin";
import { InputNumber } from "./components/InputNumber/InputNumber";

//
// npm install @mui/material @emotion/react @emotion/styled react-number-format
//

export default function App() {
  const [phone, updatePhone] = useState("");
  const [zip, updateZip] = useState("");
  const [amount, updateAmount] = useState<number | undefined>();
  const [ownership, updateOwnership] = useState<number | undefined>();
  const [ssn, updateSsn] = useState("");
  const [tin, updateTin] = useState("");
  const [employeesNo, updateEmployeesNo] = useState<number | undefined>();

  return (
    <Box sx={{ py: 3 }}>
      <Stack spacing={3} sx={{ maxWidth: "400px", mx: "auto" }}>
        <InputPhone
          label="Phone"
          size="small"
          value={phone}
          onValueChange={({ value }) => updatePhone(value)}
        />

        <InputZip
          label="Zip"
          size="small"
          value={zip}
          onValueChange={({ value }) => updateZip(value)}
        />

        <InputDollar
          label="Amount"
          size="small"
          value={typeof amount === "undefined" ? "" : amount}
          onValueChange={({ floatValue }) => updateAmount(floatValue)}
        />

        <InputPercentage
          label="Percentage"
          size="small"
          value={typeof amount === "undefined" ? "" : ownership}
          onValueChange={({ floatValue }) => updateOwnership(floatValue)}
        />

        <InputSsn
          label="SSN"
          size="small"
          value={ssn}
          onValueChange={({ value }) => updateSsn(value)}
        />

        <InputTin
          label="TIN"
          size="small"
          value={tin}
          onValueChange={({ value }) => updateTin(value)}
        />

        <InputNumber
          label="Number of employees"
          size="small"
          value={typeof employeesNo === "undefined" ? "" : ownership}
          onValueChange={({ floatValue }) => updateEmployeesNo(floatValue)}
        />
      </Stack>

      <Box>
        <pre>
          {JSON.stringify(
            {
              phone,
              zip,
              amount: amount || "n/a",
              typeofAmount: typeof amount,
              ownership: ownership || "n/a",
              typeofOwnership: typeof ownership,
              ssn,
              tin,
              employeesNo: employeesNo || "n/a",
              typeofEmployeesNo: typeof employeesNo,
            },
            null,
            2
          )}
        </pre>
      </Box>
    </Box>
  );
}
