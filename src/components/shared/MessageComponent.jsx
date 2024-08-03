/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { memo } from "react";
import { LIGHT_BLUE } from "../../constants/color";
import moment from "moment";
import { fileFormate } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
    const { sender, content, attachment, createdAt } = message;
    const sameSender = sender?._id === user?._id;
    const timeAgo = moment(createdAt).fromNow();
    return (
        <div
            style={{
                alignSelf: sameSender ? "flex-end" : "flex-start",
                backgroundColor: "white",
                color: "black",
                borderRadius: "5px",
                padding: "0.5rem",
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* message sender name  */}
            {!sameSender && (
                <Typography color={LIGHT_BLUE} fontWeight={"600"} variant="caption">
                    {sender?.name}
                </Typography>
            )}

            {/* message content */}
            {content && <Typography>{content}</Typography>}

            {/* message attachment */}

            {attachment.length > 0 &&
                attachment.map((item, i) => {
                    const url = item?.url;
                    const file = fileFormate(url);
                    return (
                        <Box key={i}>
                            <a href={url} target="_blank" download style={{ color: "black" }}>
                                <RenderAttachment file={file} url={url} />
                            </a>
                        </Box>
                    );
                })}

            <Typography width={"fit-content"} variant="caption" color={"text.secondary"} alignSelf={"end"}>
                {timeAgo}
            </Typography>
        </div>
    );
};
const MemoizedMessage = memo(MessageComponent);
export default MemoizedMessage;
