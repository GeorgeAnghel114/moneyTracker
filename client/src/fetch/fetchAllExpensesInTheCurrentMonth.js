import { useEffect, useState } from "react";

export default function ExpensesCurrentMonth(URL1) {
  const [expenses, setExpenses] = useState([]);
  const [incomes,setIncomes] = useState([]);
  const [mockData, setMockData] = useState([]);
  const email = "messi";
  const [test,setTest] = useState([{
    id:"",
    color:"",
    data:[]
  },{
    id2:"",
    color2:"",
    data2:[],
  }]);
  const res = [];

  useEffect(() => {
    const fetchExpenses = async () => {
      const request = await fetch(URL1);
      const response = await request.json();
      return response;
    };
    const fetchIncomes = async () =>{
      const request2 = await fetch(`http://localhost:8080/api/income/get-incomes-current-month/messi`);
      const respones2 = await request2.json();
      return respones2;
    }

    fetchExpenses().then((data) => {
      setExpenses(data);
      setMockData([{
        id: "expenses",
        color: "hsl(0, 35%, 78%)",
        key:1,
        data: data.map((exp) => ({ x: exp.expenseCategory, y: exp.amount })),
      }]);
    });
    //TODO incomes for line chart
    // fetchIncomes().then((data)=>{
    //   setIncomes(data);
    //   setMockData(mockData=>[...mockData,
    //     {
    //     id:"incomes",
    //     color: "hsl(0, 55%, 55%)",
    //     key:2,
    //     data: data.sort((a,b) => new Date(a.date) - new Date(b.date)).map((i) => ({ x: i.incomeCategory, y: i.amount })),
    //   }])
    // });

  }, []);


  console.log(mockData)

  return mockData;
}
