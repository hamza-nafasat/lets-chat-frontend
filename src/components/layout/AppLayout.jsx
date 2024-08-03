import { Grid } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = () => (WrappedComponent) => {
    const Component = (props) => {
        const params = useParams();
        const chatId = params.chatId;

        const handleDeleteChat = (e, _id, groupChat) => {
            e.preventDefault();
            console.log(" handleDeleteChat", _id, groupChat);
        };
        return (
            <>
                <Title />
                <Header />
                {/* every Component wrapped in this grid  */}
                <Grid container height={"calc(100vh - 4rem)"}>
                    {/* chat list column */}
                    {/* ================ */}
                    <Grid item sm={4} md={3} height={"100%"} sx={{ display: { xs: "none", sm: "block" } }}>
                        <ChatList
                            chats={sampleChats}
                            chatId={chatId}
                            newMessagesAlert={[{ chatId, count: 4 }]}
                            onlineUsers={["1", "2"]}
                            handleDeleteChat={handleDeleteChat}
                        />
                    </Grid>
                    {/* chat content column */}
                    {/* =================== */}
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                        <WrappedComponent {...props} />
                    </Grid>
                    {/* third column */}
                    {/* ============ */}
                    <Grid
                        item
                        md={4}
                        lg={3}
                        height={"100%"}
                        sx={{
                            display: {
                                xs: "none",
                                md: "block",
                            },
                            padding: "2rem",
                            bgcolor: "rgba(0,0,0,0.85)",
                        }}
                    >
                        <Profile />
                    </Grid>
                </Grid>
            </>
        );
    };
    return Component;
};

export default AppLayout;
