import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material/";

import { useQuery } from "@tanstack/react-query";
import { getPalindromes } from "../../data/palindromes";



const PalindromeTable = () => {
  const { data: palindromes, isLoading } = useQuery<IPalindromeData[]>({
    queryKey: ["palindromes"],
    queryFn: getPalindromes,
  });

  return (
    <TableContainer
      style={{
        width: "100%",
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                className="tablecell-border-none"
                style={{ fontWeight: "bold", color: "#777" }}
              >
                Nome
              </TableCell>
              <TableCell colSpan={3} className="tablecell-border-none" />
              <TableCell colSpan={3} className="tablecell-border-none" />
              <TableCell colSpan={3} className="tablecell-border-none" />
              <TableCell colSpan={3} className="tablecell-border-none" />
              <TableCell
                className="tablecell-border-none"
                style={{ fontWeight: "bold", color: "#777" }}
              >
                Palíndromo?
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {palindromes &&
              palindromes.map((current) => (
                <TableRow key={current.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    className="tablecell-border-none"
                  >
                    {current.value}
                  </TableCell>

                  <TableCell colSpan={3} className="tablecell-border-none" />
                  <TableCell colSpan={3} className="tablecell-border-none" />
                  <TableCell colSpan={3} className="tablecell-border-none" />
                  <TableCell colSpan={3} className="tablecell-border-none" />
                  <TableCell
                    component="th"
                    scope="row"
                    className="tablecell-border-none"
                  >
                    {current.isPalindrome ? "Sim" : "Não"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default PalindromeTable;
