import { Box } from "@mui/system";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
        return(
            <Box mb="20px">
                <Header title="Bar Chart" subtitle="Simple Line Chart"/>
                <Box height="75vh">
                    <LineChart/>
                </Box>
            </Box>
        )
}

export default Line;