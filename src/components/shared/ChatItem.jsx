/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import { StyledLink } from "../styles/StyledComponents";
import { memo } from "react";
import { BLACK, WHITE } from "../../constants/color";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    handleDeleteChat,
}) => {
    return (
        <StyledLink
            sx={{ padding: "0" }}
            onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
            to={`/chat/${_id}`}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.8rem",
                    gap: "0.8rem",
                    position: "relative",
                    backgroundColor: sameSender ? BLACK : "unset",
                    color: sameSender ? WHITE : "unset",
                }}
            >
                <AvatarCard avatar={avatar} />
                <Stack>
                    <Typography>{name}</Typography>
                    {newMessageAlert && (
                        <Typography sx={{ color: "red" }}>{newMessageAlert.count}New Message</Typography>
                    )}
                </Stack>
                {/* is online  */}
                {isOnline && (
                    <Box
                        sx={{
                            width: "0.8rem",
                            height: "0.8rem",
                            bgcolor: "green",
                            borderRadius: "50%",
                            position: "absolute",
                            right: "0.8rem",
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                    />
                )}
            </div>
        </StyledLink>
    );
};

const MemoizedChatItem = memo(ChatItem);
export default MemoizedChatItem;
