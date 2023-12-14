import React from "react";
import { Text, Grid } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ height: "100vh", padding: "1rem" }}>
        <div>
          <Text>About</Text>
        </div>
        <div style={{ height: "150vh" }}>
          <Grid columns={24}>
            <Grid.Col span={6} style={{ cursor: "pointer" }}>
              <Text>Navigation</Text>
              <Text onClick={() => navigate("/about/university-profile")}>
                University Profile
              </Text>
              <Text onClick={() => navigate("/about/outcome-based-education")}>
                Outcome-Based Education
              </Text>
              <Text onClick={() => navigate("/about/administration")}>
                Admin
              </Text>
              <Text onClick={() => navigate("/about/pride-hall")}>
                Pride Hall
              </Text>
            </Grid.Col>
            <Grid.Col span={18}>
              <Outlet />
            </Grid.Col>
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
