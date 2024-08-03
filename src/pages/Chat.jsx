import { IconButton, Stack } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import { Fragment, useRef } from "react";
import { GRAY_COLOR, ORANGE } from "../constants/color";
import { AttachFile as AttachFileIcon, Send as SendIcon } from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialog/FileMenu";
import { sampleMessage } from "../constants/sampleData";
import MemoizedMessage from "../components/shared/MessageComponent";

const user = {
    _id: "2",
    name: "John Doe",
};

const Chat = () => {
    const containerRef = useRef(null);
    return (
        <Fragment>
            <Stack
                ref={containerRef}
                boxSizing={"border-box"}
                padding={"1rem"}
                spacing={"1rem"}
                bgcolor={GRAY_COLOR}
                height={"90%"}
                sx={{ overflowX: "hidden", overflowY: "auto" }}
            >
                {sampleMessage.map((message, i) => (
                    <MemoizedMessage key={i} message={message} user={user} />
                ))}
            </Stack>

            <form style={{ height: "10%" }}>
                <Stack
                    direction={"row"}
                    height={"100%"}
                    padding={"0.5rem"}
                    alignItems={"center"}
                    position={"relative"}
                >
                    <IconButton
                        sx={{
                            position: "absolute",
                            left: ".5rem",
                            rotate: "30deg",
                        }}
                    >
                        <AttachFileIcon />
                    </IconButton>
                    <InputBox placeholder={"Type a message"} />
                    <IconButton
                        type="submit"
                        sx={{
                            backgroundColor: ORANGE,
                            color: "white",
                            marginLeft: "1rem",
                            padding: "0.5rem",
                            borderRadius: "50%",
                            "&:hover": {
                                backgroundColor: "error.dark",
                            },
                        }}
                    >
                        <SendIcon />
                    </IconButton>
                </Stack>
            </form>
            <FileMenu />
        </Fragment>
    );
};

const ChatWithLayout = AppLayout()(Chat);
export default ChatWithLayout;
