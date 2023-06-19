import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

export function ExpenceDetails({ expences }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const expence = expences[id];
  return (
    <div className="details">
      <h1>The expence details page {expence.name}</h1>
      <div className="card">
      <p>
          <strong>Title :</strong>
          {expence.title}
        </p>
        <p>
          <strong>Roll :</strong>
          {expence.roll}
        </p>
        <p>
          <strong>Amount :</strong>
          {expence.amount}
        </p>
        <p>
          <strong>Category:</strong>
          {expence.description}
        </p>
        <p>
          <strong>Description :</strong>
          {expence.address}
        </p>
      </div>
      <div className="btn">
        <Button variant="contained" onClick={() => navigate(-1)}>
          ⬅Back
        </Button>
      </div>
    </div>
  );
}
