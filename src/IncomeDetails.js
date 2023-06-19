import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

export function IncomeDetails({ incomes }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const income =incomes[id];
  return (
    <div className="details">
      <h1>The income details page</h1>
      <div className="card">
        <p>
          <strong>Title :</strong>
          {income.title}
        </p>
        <p>
          <strong>Roll :</strong>
          {income.roll}
        </p>
        <p>
          <strong>Amount :</strong>
          {income.amount}
        </p>
        <p>
          <strong>Category:</strong>
          {income.description}
        </p>
        <p>
          <strong>Description :</strong>
          {income.address}
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
