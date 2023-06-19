import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddIncome({ incomes, setIncome }) {
  const [roll, setRoll] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  return (
    <div className="add-form">
      <h3>Hello all welcome to the add income form page</h3>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="roll"
        variant="outlined"
        onChange={(event) => setRoll(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="amount"
        variant="outlined"
        onChange={(event) => setAmount(event.target.value)}
      />
       <TextField
        id="outlined-basic"
        label="category"
        variant="outlined"
        onChange={(event) => setCategory(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="description"
        variant="outlined"
        onChange={(event) => setDescription(event.target.value)}
      />
      
      
      <div className="btn">
        <Button
          variant="contained"
          onClick={() => {
            const newIncome = {
              roll,
              title,
              amount,
              category,
              description
              
            };
            setIncome([...incomes, newIncome]);
            navigate("/incomes");
          }}
        >
          Add income
        </Button>
      </div>
    </div>
  );
}
