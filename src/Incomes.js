import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function Incomes({ incomes, setIncome }) {
  const navigate = useNavigate();
  const deleteIncome = (id) => {
    const alterIncome = incomes.filter((del)=>del.id !== id)
    setIncome(alterIncome);
  }
  return (
    <div className="data">
      <h3 className="title">Welcome to Incomes datas</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Roll</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              
              <StyledTableCell>ACTION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incomes.map((inc, index) => (
              <StyledTableRow index={index} key={inc.roll}>
                <StyledTableCell component="th" scope="row">
                  {inc.title}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {inc.roll}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {inc.amount}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {inc.category}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {inc.descirption}
                </StyledTableCell>
               <StyledTableCell>
                  <IconButton
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/income/details/${index}`)}
                  >
                    <InfoIcon></InfoIcon>
                  </IconButton>
                  <IconButton
                    variant="contained"
                    color="success"
                    onClick={() => navigate(`/income/edit/${inc.id}`)}
                  >
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton variant="contained" color="error" onClick={()=>deleteIncome(inc.id)}>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="btn">
        <Button variant="contained" onClick={() => navigate("/add/income")}>
          Create Income Data
        </Button>
      </div>
    </div>
  );
}
