import { useEffect, useState } from "react";

export default function AllExpenses(URL){
    const[expenses, setExpenses] = useState([]);
    const email = "messi";

    useEffect(() => {
        const fetchExpenses = async () =>{
            const request = await fetch(URL)
            const response = await request.json();
            console.log("intra feci")
          setExpenses(response)
        }
        fetchExpenses();
    
        }, [])
        return expenses;
}






