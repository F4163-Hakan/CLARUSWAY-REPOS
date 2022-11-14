import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import {useFetch} from "../../utils/functions"

const Contacts = () => {
  const {isLoading,contactList}=useFetch();
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

  {
// Bilgiler gelmediği durumda Loading yazısı görünsün 
isLoading ? (
  <TableRow
  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
>
  <TableCell colSpan={5} align="center">
    Loading
  </TableCell>
</TableRow>
) :
contactList?.lenght===0 ? (
  // Bilgiler olmadığı,boş olduğu  durumda veri bulunamadı mesajı
  <TableRow
  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
>
  <TableCell colSpan={5} align="center">
   No Result Found
  </TableCell>
</TableRow>

) : (
  // Bilgiler geldiği zaman aşağıya yazılacak kodlar çalışsın
  
)

  }
  
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;