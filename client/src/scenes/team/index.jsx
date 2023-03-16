import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Header from "../../components/Header";
import AllExpenses from "../../fetch/fetchAllExpenses";

const Team = () => {
  const email = "messi";
  const allUserExpenses = AllExpenses(`http://localhost:8080/api/expense/get-expenses/${email}`)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "expenseCategory",
      headerName: "Category",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
    },
    {
      field: "currency",
      headerName: "Currency",
      type: "number",
      headerAlign: "left",
      align: "left",
    },

    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "edit",
      headerName: "Edit Expenses",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            overflow="hidden"
            margin="0 0 0 -7px"
            justifyContent="center"
            backgroundColor={
              access === "delete"
                ? colors.greenAccent[600]
                : access === "delete"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          > <CreateOutlinedIcon />
          </Box>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete Expense",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            overflow="hidden"
            margin="0 0 0 -7px"
            justifyContent="center"
            backgroundColor={
              access === "delete"
                ? colors.greenAccent[600]
                : access === "delete"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          > <DeleteForeverOutlinedIcon />
          </Box>
        );
      },
    },

  ];

  return (
    <Box m="20px">
      <Header title="EXPENSES" subtitle="Managing Expenses" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={allUserExpenses} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;