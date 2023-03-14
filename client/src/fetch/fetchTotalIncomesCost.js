import { useEffect, useState } from "react";

export default function TotalIncomesCost(URL){
    const[totalIncomes, setTotalIncomes] = useState([]);
    const email = "messi";

    useEffect(()=>{
      const fetchTotalIncomes = async () => {
        const request = await fetch(URL)
        const response = await request.json();
        setTotalIncomes(response)
      }
      fetchTotalIncomes();
    },[])

    return totalIncomes;
  }