import { ColorModeContext,useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from "react-router-dom";
import { color } from "@mui/system";
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/Sidebar"
import DashBoard from "./scenes/dashboard";
// import InvoicesTable from "./scenes/invocies";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/addExpense";
import { Theme } from "@fullcalendar/core/internal";
import Calendar from "./scenes/calendar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import React, { useState, useRef, useEffect } from "react";
import Login from "./scenes/login";
import Register from "./scenes/register";
import ExpensesTable from "./scenes/expensesTable";
import IncomesTable from "./scenes/incomesTable";
import AddExpense from "./scenes/addExpense";



function App() {
  const[theme,colorMode] = useMode();
  const [isLoggedIn, setLogin] = useState();
  const [change, setChange] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("info") !== null) {
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //   }
  // }, [change]);

  // console.log(isLoggedIn);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
 
          {!isLoggedIn ? (<>
          
            <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<DashBoard/>}/>
              <Route path="/expenses-table" element={<ExpensesTable/>}/>
              <Route path="/incomes-table" element={<IncomesTable/>}/>
              {/* <Route path="/invoices" element={<Invoices/>}/> */}
              <Route path="/add-expense" element={<AddExpense/>}/>
              <Route path="/calendar" element={<Calendar/>}/>  

              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/faq" element={<FAQ/>}/>
              <Route path="/geography" element={<Geography/>}/>
            </Routes>
          </main>          </>
          ) : (
            <>
          <main className="content">
          <Topbar />
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes>
          </main>
                    </>
          )
        }
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
