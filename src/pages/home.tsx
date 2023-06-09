import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { InputZip } from "../components/_common/InputZip/InputZip";
import { InputPhone } from "../components/_common/InputPhone/InputPhone";
import { InputDollar } from "../components/_common/InputDollar/InputDollar";
import { InputPercentage } from "../components/_common/InputPercentage/InputPercentage";
import { InputSsn } from "../components/_common/InputSsn/InputSsn";
import { InputTin } from "../components/_common/InputTin/InputTin";
import { InputNumber } from "../components/_common/InputNumber/InputNumber";

export function HomePage() {
  const [phone, updatePhone] = useState("");
  const [zip, updateZip] = useState("");
  const [amount, updateAmount] = useState<number | undefined>();
  const [ownership, updateOwnership] = useState<number | undefined>();
  const [ssn, updateSsn] = useState("");
  const [tin, updateTin] = useState("");
  const [employeesNo, updateEmployeesNo] = useState<number | undefined>();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 5,
      }}
    >
      <Stack spacing={3} sx={{ flex: 1 }}>
        <InputPhone
          label="Phone"

          helperText={
            <Stack spacing={1}>
              <Typography>&lt;InputPhone /&gt;</Typography>

              <Typography>Default options:</Typography>

              <ul>
                <li>format="(###) #### ###"</li>
                <li>allowEmptyFormatting=true</li>
                <li>mask="_"</li>
              </ul>
            </Stack>
          }
          value={phone}
          onValueChange={({ value }) => updatePhone(value)}
        />

        <InputZip
          label="Zip"

          helperText={
            <Stack spacing={1}>
              <Typography>&lt;InputZip /&gt;</Typography>

              <Typography>Default options:</Typography>

              <ul>
                <li>format="#####"</li>
                <li>allowEmptyFormatting=true</li>
                <li>mask="_"</li>
              </ul>
            </Stack>
          }
          value={zip}
          onValueChange={({ value }) => updateZip(value)}
        />

        <InputDollar
          label="Amount"

          helperText={
            <Stack spacing={1}>
              <Typography>&lt;InputDollar /&gt;</Typography>

              <Typography>Default options:</Typography>

              <ul>
                <li>thousandSeparator=","</li>
                <li>MAX_VALUE=500,000,000</li>
                <li>decimalScale=2</li>
                <li>allowNegative=false</li>
              </ul>
            </Stack>
          }
          value={typeof amount === "undefined" ? "" : amount}
          onValueChange={({ floatValue }) => updateAmount(floatValue)}
        />

        <InputPercentage
          label="Ownership"

          helperText={
            <Stack spacing={1}>
              <Typography>&lt;InputPercentage /&gt;</Typography>

              <Typography>Default options:</Typography>

              <ul>
                <li>maxValue=100</li>
                <li>decimalScale=2</li>
                <li>allowNegative=false</li>
              </ul>
            </Stack>
          }
          value={typeof amount === "undefined" ? "" : ownership}
          onValueChange={({ floatValue }) => updateOwnership(floatValue)}
        />

        <InputSsn
          label="SSN"

          helperText={
            <Stack spacing={1}>
              <Typography>&lt;InputSsn /&gt;</Typography>

              <Typography>Default options:</Typography>

              <ul>
                <li>format="###-##-####"</li>
                <li>allowEmptyFormatting=true</li>
                <li>mask="_"</li>
              </ul>
            </Stack>
          }
          value={ssn}
          onValueChange={({ value }) => updateSsn(value)}
        />

        <InputTin
          label="TIN"

          helperText={
            <Stack spacing={1}>
              <Typography>&lt;InputTin /&gt;</Typography>

              <Typography>Default options:</Typography>

              <ul>
                <li>format="##-#######"</li>
                <li>allowEmptyFormatting=true</li>
                <li>mask="_"</li>
              </ul>
            </Stack>
          }
          value={tin}
          onValueChange={({ value }) => updateTin(value)}
        />

        <InputNumber
          label="Number of employees"

          helperText={
            <Stack spacing={1}>
              <Typography>&lt;InputNumber /&gt;</Typography>

              <Typography>Default options:</Typography>

              <ul>
                <li>thousandSeparator=false</li>
                <li>maxValue=10,000,000</li>
                <li>decimalScale=0</li>
                <li>allowNegative=false</li>
              </ul>
            </Stack>
          }
          value={typeof employeesNo === "undefined" ? "" : ownership}
          onValueChange={({ floatValue }) => updateEmployeesNo(floatValue)}
        />
      </Stack>

      <Box
        className="sticky-values"
        sx={{
          position: "sticky",
          top: "40px",
          mt: 0,
          fontSize: 16,
        }}
        component="pre"
      >
        {JSON.stringify(
          {
            phone: phone || "undefined",
            zip: zip || "undefined",
            amount: amount || "undefined",
            typeofAmount: typeof amount,
            ownership: ownership || "undefined",
            typeofOwnership: typeof ownership,
            ssn,
            tin,
            employeesNo: employeesNo || "undefined",
            typeofEmployeesNo: typeof employeesNo,
          },
          null,
          2
        )}
      </Box>
    </Box>
  );
}
