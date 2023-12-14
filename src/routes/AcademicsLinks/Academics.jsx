import React from "react";
import { Text, Grid } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Footer from "../../src/components/Footer";
import { useNavigate } from "react-router-dom";

function Academics() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ height: "100vh", padding: "1rem" }}>
        <div>
          <Text>Academics</Text>
        </div>
        <div style={{ height: "150vh" }}>
          <Grid columns={24}>
            <Grid.Col span={6} style={{ cursor: "pointer" }}>
              <Text>Navigation</Text>
              <Text onClick={() => navigate("/academics/academic-overview")}>
                Academic Overview
              </Text>
              <Text onClick={() => navigate("/academics/colleges")}>
                Colleges
              </Text>
              <Text onClick={() => navigate("/academics/academic-calendar")}>
                Academic Calendar
              </Text>
              <Text onClick={() => navigate("/academics/crs")}>CRS</Text>
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

export default Academics;
