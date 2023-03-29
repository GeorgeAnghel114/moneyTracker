import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddExpense = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  let navigate = useNavigate();


  function redirect(status) {
    if (status === 200) {
        toast('You successfully added an expense', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          style:{"--toastify-color-progress-dark": "#11ed23" }
      })
    }
    navigate("/");
}

  const handleFormSubmit = (values) => {
    addExpenses(values);
  };

  const addExpenses = async(values)=>{
  // console.log(values)
  const email = "messi";
   axios.post(`http://localhost:8080/api/expense/add-expense/${email}`,values)
   .then(response=>{
    redirect(response.status);
   })
  }

  return (
    <Box m="20px">
      <Header title="Add expense" subtitle="Add your expense down here" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={expenseDTO}
        validationSchema={checkoutSchema}
        
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Amount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
                name="amount"
                error={!!touched.amount && !!errors.amount}
                helperText={touched.amount && errors.amount}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.expenseCategory}
                name="expenseCategory"
                error={!!touched.expenseCategory && !!errors.expenseCategory}
                helperText={touched.expenseCategory && errors.expenseCategory}
                sx={{ gridColumn: "span 2" }}
              />


            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button 
              type="submit" color="secondary" variant="contained">
                Add expense
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  amount: yup.string().required("required"),
  expenseCategory: yup.string().required("required"),

});
const expenseDTO = {
  amount: "",
  expenseCategory: "",
};

export default AddExpense;