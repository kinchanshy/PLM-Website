import React, { Suspense, useEffect } from "react";
import { MantineProvider, Loader, Image } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loading from "./assets/plm-loading.png";
import "@mantine/core/styles.css";
import "./App.css";
import { Routing } from "./routes/routes";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MantineProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="loading">
              <Image maw={100} src={loading} />
              <Loader color="#d5a106" type="dots" />
            </div>
          }
        >
          <Routes>
            {Routing.map((route, index) => (
              <Route key={index} path={route.path} element={<route.element />}>
                {route.children &&
                  route.children.map((child, childIndex) => (
                    <Route
                      key={childIndex}
                      path={child.path}
                      element={<child.element />}
                    >
                      {child.children &&
                        child.children.map((grandchild, grandchildIndex) => (
                          <Route
                            key={grandchildIndex}
                            path={grandchild.path}
                            element={<grandchild.element />}
                          />
                        ))}
                    </Route>
                  ))}
              </Route>
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
