import { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { InputZip } from "./components/InputZip/InputZip";
import { InputPhone } from "./components/InputPhone/InputPhone";
import { InputDollar } from "./components/InputDollar/InputDollar";
import { InputPercentage } from "./components/InputPercentage/InputPercentage";
import { InputSsn } from "./components/InputSsn/InputSsn";
import { InputTin } from "./components/InputTin/InputTin";
import { InputNumber } from "./components/InputNumber/InputNumber";

export default function App() {
  const [phone, updatePhone] = useState("");
  const [zip, updateZip] = useState("");
  const [amount, updateAmount] = useState<number | undefined>();
  const [ownership, updateOwnership] = useState<number | undefined>();
  const [ssn, updateSsn] = useState("");
  const [tin, updateTin] = useState("");
  const [employeesNo, updateEmployeesNo] = useState<number | undefined>();

  return (
    <Container sx={{ maxWidth: "500px", py: 5 }}>
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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
    </Container>
  );
}
