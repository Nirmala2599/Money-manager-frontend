import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Dashboard } from "./Dashboard";
import { Expences } from "./Expences";
import { Incomes } from "./Incomes";
import { AddIncome } from "./AddIncome";
import { AddExpence } from "./AddExpence";
import { ExpenceDetails } from "./ExpenceDetails";
import {IncomeDetails} from "./IncomeDetails";
import { EditExpence } from "./EditExpence";
import { EditIncome } from "./EditIncome";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [expences, setExpence] = useState([
    {
      title: "guru",
      roll: "01",
      amount: "5000",
      category:"office",
      description: "loan"
     
    },
    {
      title: "gopi",
      roll: "02",
      amount: "2000",
      category:"office",
      description: "food"
     
    },
    {
      title: "janu",
      roll: "03",
      amount: "3000",
      category:"personal",
      description: "loan"
     
    },
   
  ]);
  const [incomes,setIncome] = useState([
    {
      title: "siva",
      roll: "01",
      amount: "2000",
      category:"personal",
      description: "loan"
     
    },
    {
      title: "maya",
      roll: "02",
      amount: "3000",
      category:"Office",
      description: "food"
     
    },
    {
      title: "siva",
      roll: "03",
      amount: "4000",
      category:"personal",
      description: "food"
     
    },
   
    
  ]);
  const navigate = useNavigate();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/expences")}>
              Expence
            </Button>
            <Button color="inherit" onClick={() => navigate("/incomes")}>
              Income
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/expences" element={<Expences expences={expences} setExpence={setExpence} />} />
        <Route path="/incomes" element={<Incomes incomes={incomes} setIncome={setIncome} />} />
        <Route path="/expence/details/:id" element={<ExpenceDetails expences={expences} />} />
        <Route path="/income/details/:id" element={<IncomeDetails incomes={incomes} />} />
        <Route path="/add/expence" element={<AddExpence expences={expences} setExpence={setExpence} />} />
        <Route path="/add/income" element={<AddIncome incomes={incomes} setIncome={setIncome} />} />
        <Route path="/expence/edit/:id" element={<EditExpence expences={expences} setExpence={setExpence} />} />
        <Route path="/income/edit/:id" element={<EditIncome incomes={incomes} setIncome={setIncome} />} />
      </Routes>
    </div>
  );
}

export default App;