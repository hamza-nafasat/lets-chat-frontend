import { Box, Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import { GRAY_COLOR } from "../constants/color";

const Home = () => {
    return (
        <Box bgcolor={GRAY_COLOR} minHeight={"100%"}>
            <Typography p={"rem"} variant="h5" textAlign={"center"}>
                Select a friend to chat
            </Typography>
        </Box>
    );
};

const HomeWithLayout = AppLayout()(Home);
export default HomeWithLayout;
