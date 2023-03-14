import { useEffect, useState } from "react";

export default function BiggestIncomeThisMonth(URL){
    const[biggestIncome, setBiggestIncome] = useState([]);
    const email = "messi";

    useEffect(()=>{
      const fetchBiggestIncomeThisMonth = async () => {
        const request = await fetch(URL)
        const response = await request.json();
        setBiggestIncome(response)
      }
      fetchBiggestIncomeThisMonth();
    },[])

    return biggestIncome;
  }