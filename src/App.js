import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Customers,
  Kanban,
  Editor,
  ColorPicker,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Pyramid,
  Stacked,
} from "./pages";

import { useStateContext } from "./context/ContextProvider";
import "./App.css";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg ">
          <div
            className="fixed right-6 bottom-4 style"
            style={{ zIndex: "1000" }}
          >
            <TooltipComponent content="Settings" position="top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed z-10 sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg ">
              <Sidebar /> w-0
            </div>
          )}
          <div
            className={` dark:bg-main-bg bg-main-bg min-h-screen w-full
              ${activeMenu ? " md:ml-72 " : "flex-2"}
              `}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/react-dashboard" element={<Ecommerce />} />
                <Route
                  path="/react-dashboard/ecommerce"
                  element={<Ecommerce />}
                />
                {/* Pages */}
                <Route path="/react-dashboard/orders" element={<Orders />} />
                <Route
                  path="/react-dashboard/employees"
                  element={<Employees />}
                />
                <Route
                  path="/react-dashboard/customers"
                  element={<Customers />}
                />
                {/* apps */}
                <Route path="/react-dashboard/kanban" element={<Kanban />} />
                <Route path="/react-dashboard/editor" element={<Editor />} />
                <Route
                  path="/react-dashboard/calendar"
                  element={<Calendar />}
                />
                <Route
                  path="/react-dashboard/color-picker"
                  element={<ColorPicker />}
                />
                {/* Charts */}
                <Route path="/react-dashboard/line" element={<Line />} />
                <Route path="/react-dashboard/area" element={<Area />} />
                <Route path="/react-dashboard/bar" element={<Bar />} />
                <Route path="/react-dashboard/pie" element={<Pie />} />
                <Route
                  path="/react-dashboard/financial"
                  element={<Financial />}
                />
                <Route
                  path="/react-dashboard/color-mapping"
                  element={<ColorMapping />}
                />
                <Route path="/react-dashboard/pyramid" element={<Pyramid />} />
                <Route path="/react-dashboard/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
