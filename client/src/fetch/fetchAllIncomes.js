import { useEffect, useState } from "react";

export default function AllIncomes(URL){
    const[incomes, setIncomes] = useState([]);
    const email = "messi";

    useEffect(() => {
        const fetchIncomes = async () =>{
            const request = await fetch(URL)
            const response = await request.json();
          setIncomes(response)
        }
        fetchIncomes();
    
        }, [])
        return incomes;
}






