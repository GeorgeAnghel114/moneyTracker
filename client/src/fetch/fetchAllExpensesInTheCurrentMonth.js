import { useEffect, useState } from "react";

export default function ExpensesCurrentMonth(URL) {
  const [expenses, setExpenses] = useState([]);
  const [mockData, setMockData] = useState([]);
  // console.log("aaaaaaaaaaa",expenses)
  const email = "messi";

  let mockLineData = [];
  function addData() {
    mockLineData = expenses.map((expense) => {
      return {
        id: expense.expenseCategory,
        data: [
          {
            x: expense.expenseCategory,
            y: expense.amount,
          },
        ],
      };
      //   mockLineData.push(temp)
      //   console.log(temp)
    });
  }

  useEffect(() => {
    const fetchExpenses = async () => {
      const request = await fetch(URL);
      const response = await request.json();
      return response;
    };
    fetchExpenses().then((data) => {
      setExpenses(data);
      setMockData([{
        id: "expenses",
        color: "hsl(0, 35%, 78%)",
        data: data.sort((a,b) => new Date(a.date) - new Date(b.date)).map((exp) => ({ x: exp.expenseCategory, y: exp.amount })),
      }]);
    });
  }, []);

  console.clear()
  console.log(mockData)

  return mockData;
}
