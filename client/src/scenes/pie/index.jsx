import { Box } from "@mui/system";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
        return(
            <Box mb="20px">
                <Header title="Bar Chart" subtitle="Simple Pie Chart"/>
                <Box height="75vh">
                    <PieChart/>
                </Box>
            </Box>
        )
}

export default Pie;