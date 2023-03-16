import { setIn } from "formik";
import { useEffect, useState } from "react";

export default function ExpensesCurrentMonth(URL1) {
  const [expenses, setExpenses] = useState([]);
  const [incomes,setIncomes] = useState([]);
  const [mockData, setMockData] = useState([]);
  const email = "messi";

  useEffect(() => {
    const fetchExpenses = async () => {
      const request = await fetch(URL1);
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
    // console.log("orice")
    // const fetchIncomes = async () =>{
    //   const request2 = await fetch(`http://localhost:8080/api/income/get-incomes-current-month/messi`);
    //   const respones2 = await request2.json();
    //   return respones2;
    // }
    // fetchIncomes().then((data)=>{
    //   setIncomes(data);
    //   setMockData(mockData=>[...mockData,
    //     {
    //     id:"incomes",
    //     color: "hsl(0, 55%, 55%)",
    //     data: data.sort((a,b) => new Date(a.date) - new Date(b.date)).map((i) => ({ x: i.incomeCategory, y: i.amount })),
    //   }])
    // });
    // console.log("incomessssssss",incomes)

  }, []);

  console.log(mockData)

  return mockData;
}
