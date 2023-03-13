import { useEffect, useState } from "react";

export default function TotalExpensesCost(URL){
    const[totalExpenses, setTotalExpenses] = useState([]);
    const email = "messi";

    useEffect(()=>{
      const fetchTotalExpenses = async () => {
        const request = await fetch(URL)
        const response = await request.json();
        setTotalExpenses(response)
      }
      console.log("total expensesss" +totalExpenses)
      fetchTotalExpenses();
    },)

    return totalExpenses;
  }