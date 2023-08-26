import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const PageNotFound = () => {
  const token = localStorage.getItem("token");
  const version = localStorage.getItem("version");
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (token) {
      version ? navigate(`/${version}/pages/employee`) : navigate("/pages/employee");
    } else {
      navigate("/login");
    }
  };
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
        }}>
        <Container maxWidth="md">
          <Grid
            sx={{ flexDirection: "column", alignItems: "center", gap: "28px" }}
            container
            spacing={2}>
            <Grid xs={12} sm={12}>
              <Typography variant="h1">404</Typography>
              <Typography sx={{ color: "#3CBFAE" }}>
                The page you’re looking for doesn’t exist.
              </Typography>
              <Button onClick={handleNavigate} sx={{ backgroundColor: "#ff6c00", color: "white" }}>
                Back Home
              </Button>
            </Grid>
            <Grid xs={12}>
              <img
                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                alt=""
                width={500}
                height={250}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default PageNotFound;
