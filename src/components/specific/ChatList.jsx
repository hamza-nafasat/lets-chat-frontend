/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import MemoizedChatItem from "../shared/ChatItem";

const ChatList = ({
    width = "100%",
    chats = [],
    chatId = null,O
    onlineUsers = [],
    newMessagesAlert = [{ chatId: null, count: 0 }],
    handleDeleteChat = () => {},
}) => {
    return (
        <Stack width={width} direction={"column"} overflow={"auto"} height={"100%"}>
            {chats.map((chat, i) => {
                const { _id, name, avatar, groupChat, members } = chat;
                const newMessageAlert = newMessagesAlert.find(({ chatId }) => chatId === _id);
                const isOnline = members.some((member) => onlineUsers.includes(member));
                return (
                    <MemoizedChatItem
                        index={i}
                        key={i}
                        newMessageAlert={newMessageAlert}
                        isOnline={isOnline}
                        _id={_id}
                        name={name}
                        sameSender={chatId === _id}
                        avatar={avatar}
                        groupChat={groupChat}
                        handleDeleteChat={handleDeleteChat}
                    />
                );
            })}
        </Stack>
    );
};

export default ChatList;
