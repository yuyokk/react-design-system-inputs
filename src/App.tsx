import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Container, Stack } from "@mui/material";
import { HomePage } from "./pages/home";
// import { FormBuilderPage } from "./pages/form-builder";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="form-builder" element={<FormBuilderPage />} /> */}
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <Container sx={{ pt: 2 }}>
        <Stack
          sx={{ mb: 3 }}
          direction="row"
          justifyContent="center"
          component="nav"
        >
          <Link to="/">Inputs</Link>
          {/* <Link to="/form-builder">Form builder</Link> */}
        </Stack>

        <Outlet />
      </Container>
    </>
  );
}
