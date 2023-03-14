import { useEffect, useState } from "react";

export default function AllExpenses(URL){
    const[expenses, setExpenses] = useState([]);
    const email = "messi";

    useEffect(() => {
        const fetchExpenses = async () =>{
            const request = await fetch(URL)
            const response = await request.json();
          setExpenses(response)
        }
        fetchExpenses();
    
        }, [])
        return expenses;
}






