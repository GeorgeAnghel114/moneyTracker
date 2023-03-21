
import { useEffect, useState } from "react";

export default function BiggestExpenseThisMonth(URL){
    const[biggestExpense, setBiggestExpense] = useState([]);
    const email = "messi";

    useEffect(()=>{
      const fetchBiggestExpenseThisMonth = async () => {
        const request = await fetch(URL)
        const response = await request.json();
        setBiggestExpense(response)
      }
      fetchBiggestExpenseThisMonth();
    },[])
    // console.log("biggggesst expenses"+biggestExpense,biggestExpense.category);
    return biggestExpense;
  }