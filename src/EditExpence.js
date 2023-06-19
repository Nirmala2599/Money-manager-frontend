import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditExpence({ expences, setExpence }) {
  const [title, setTitle] = useState("");
  const [roll, setRoll] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const selectedUser = expences.find((exp) => exp.id === id);

  useEffect(() => {
    
    setTitle(selectedUser.title);
    setRoll(selectedUser.roll);
    setAmount(selectedUser.amount);
    setCategory(selectedUser.category);
    setDescription(selectedUser.description);
   
  }, [
    selectedUser.title,
    selectedUser.roll,
    selectedUser.amount,
    selectedUser.category,
    selectedUser.description
    
  ]);

  const updateExpence = () => {
    const editIndex = expences.findIndex((exp) => exp.id === id);
    console.log(editIndex);
    const editedData = {
      title,
      roll: roll,
      amount,
      category,
      description
    };
    expences[editIndex] = editedData;
    setExpence([...expences]);
    navigate("/expences");
  };
  return (
    <div className="add-form">
      <h1> The Expence edit page</h1>
      <TextField
        id="outlined-basic"
        value={title}
        label="tile"
        variant="outlined"
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={roll}
        label="Roll"
        variant="outlined"
        onChange={(event) => setRoll(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={amount}
        label="amount"
        variant="outlined"
        onChange={(event) => setAmount(event.target.value)}
      />
       <TextField
        id="outlined-basic"
        value={category}
        label="category"
        variant="outlined"
        onChange={(event) => setCategory(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={description}
        label="Description"
        variant="outlined"
        onChange={(event) => setDescription(event.target.value)}
      />
      <div className="btn">
        <Button variant="contained" color="success" onClick={updateExpence}>
          Save
        </Button>
      </div>
    </div>
  );
}
