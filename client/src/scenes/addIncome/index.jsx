import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";

const AddIncome = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");


  const handleFormSubmit = (values) => {
    addIncome(values);

  };

  const addIncome = async(values)=>{
  console.log(values)
  const email = "messi";

   axios.post(`http://localhost:8080/api/income/add-income/${email}`,values)
   .then(response=>{
    console.log(response)
   })
  }

  return (
    <Box m="20px">
      <Header title="Add income" subtitle="Add your income down here" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={incomeDTO}
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
                value={values.incomeCategory}
                name="incomeCategory"
                error={!!touched.incomeCategory && !!errors.incomeCategory}
                helperText={touched.incomeCategory && errors.incomeCategory}
                sx={{ gridColumn: "span 2" }}
              />


            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
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
  incomeCategory: yup.string().required("required"),

});
const incomeDTO = {
  amount: "",
  incomeCategory: "",
};

export default AddIncome;