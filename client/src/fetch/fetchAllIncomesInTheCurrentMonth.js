import { setIn } from "formik";
import { useEffect, useState } from "react";


export default function IncomesCurrentMonth(URL){
    const[incomes, setIncomes] = useState([]);
    const[data,setData] = useState([]);


    useEffect(()=>{
        const fetchIncomes = async ()=>{
            const request = await fetch(URL);
            const response = await request.json();
            return response;
        }

        fetchIncomes().then((data)=>{
            setIncomes(data);
            setData(data.map((exp)=>({
                id:exp.incomeCategory,
                label:exp.incomeCategory,
                value:exp.amount
            })))
        })
    },[])
    console.log(data);
    return data;
}