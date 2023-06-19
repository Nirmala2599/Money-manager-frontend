import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddExpence({ expences, setExpence}) {
  const [roll, setRoll] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");


  const navigate = useNavigate();
  return (
    <div className="add-form">
      <h3>Hello all welcome to the add expence page</h3>
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
            const newExpence = {
              roll,
              title,
              amount,
              category,
              description
            };
            setExpence([...expences, newExpence]);
            navigate("/expences")
          }}
        >
          Add Expence
        </Button>
      </div>
    </div>
  );
}
