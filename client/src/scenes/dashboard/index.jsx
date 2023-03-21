import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { useEffect,useState } from "react";
import AllExpenses from "../../fetch/fetchAllExpenses";
import TotalExpensesCost from "../../fetch/fetchTotalExpensesCost";
import TotalIncomesCost from "../../fetch/fetchTotalIncomesCost";
import BiggestIncomeThisMonth from "../../fetch/fetchBiggestIncomeThisMonth";
import BiggestExpenseThisMonth from "../../fetch/fetchBiggestExpenseThisMonth";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ExpensesCurrentMonth from "../../fetch/fetchAllExpensesInTheCurrentMonth";
import IncomesCurrentMonth from "../../fetch/fetchAllIncomesInTheCurrentMonth";
import PieChart from "../../components/PieChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const email = "messi";
  const expenses = AllExpenses(`http://localhost:8080/api/expense/get-expenses/${email}`);
  const totalCostExpenses = TotalExpensesCost(`http://localhost:8080/api/expense/get-total-cost-expenses/${email}`)
  const totalCostIncomes = TotalIncomesCost(`http://localhost:8080/api/income/get-total-incomes/${email}`)
  const biggestIncomeThisMonth = BiggestIncomeThisMonth(`http://localhost:8080/api/income/get-biggest-income/${email}`)
  const biggestExpenseThisMonth = BiggestExpenseThisMonth(`http://localhost:8080/api/expense/get-biggest-expenses/${email}`)
  const allExpensesInTheCurrentMonth = ExpensesCurrentMonth(`http://localhost:8080/api/expense/get-expenses-current-month/${email}`)
  const test = Number(biggestIncomeThisMonth.amount).toLocaleString("ro-RO");
  const allIncomesInTheCurrentMonth = IncomesCurrentMonth(`http://localhost:8080/api/income/get-incomes-current-month/${email}`)
  const expensesReversed = expenses.map(item => item).reverse();

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>

        </Box>
      </Box>
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={"$"+Number(totalCostIncomes).toLocaleString("ro-RO")}
            subtitle="Total Incomes"
            progress="0.75"
            increase=""
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={"$"+Number(totalCostExpenses).toLocaleString("ro-RO")}
            subtitle="Total Expenses"
            progress="0.50"
            increase=""
            icon={
              <PaidOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={"$"+Number(biggestIncomeThisMonth.amount).toLocaleString("ro-RO")}
            subtitle="Biggest Income This Month"
            progress="0.30"
            increase={biggestIncomeThisMonth.category}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={"$"+Number(biggestExpenseThisMonth.amount).toLocaleString("ro-RO")}
            subtitle="Biggest Expense This Month"
            progress="0.80"
            increase={biggestExpenseThisMonth.category}
            icon={
              <PaidOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Expenses
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            {/* <Box> */}
              {/* <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton> */}
            {/* </Box> */}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>

        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Expenses
            </Typography>
          </Box>
          {expensesReversed.map((expense, i) => (
            <Box
              key={`${expense.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {expense.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {expense.date.slice(0,10)}
                </Typography>
              </Box>
              <Box
              p-left="0px"
              color={colors.grey[100]}>{expense.expenseCategory}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${expense.amount}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            
         Incomes
          </Typography>
          <Box height="250px" m="-20px 0 0 0">
            <PieChart isDashboard={true} />
            <Typography>Detailed incomes of the current month</Typography>
          </Box>
          {/* <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
          </Box> */}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Work in progress
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;