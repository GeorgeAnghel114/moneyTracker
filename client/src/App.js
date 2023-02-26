import { ColorModeContext,useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from "react-router-dom";
import { color } from "@mui/system";
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/Sidebar"
import DashBoard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invocies";
import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";
 



function App() {
  const[theme,colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<DashBoard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/form" element={<Form/>}/>
              {/* <Route path="/bar" element={<Bar/>}/> */}
              {/* <Route path="/pie" element={<Pie/>}/> */}
              {/* <Route path="/line" element={<Line/>}/> */}
              {/* <Route path="/faq" element={<FAQ/>}/> */}
              {/* <Route path="/geography" element={<Geography/>}/> */}
              {/* <Route path="/calendar" element={<Calendar/>}/> */}  
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
