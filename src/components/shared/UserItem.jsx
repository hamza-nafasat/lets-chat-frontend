/* eslint-disable react/prop-types */
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { memo } from "react";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";

const UserItem = ({ user, handler, isHandlerLoading, isAdded, styling = {} }) => {
    const { name, _id, avatar } = user;
    return (
        <ListItem>
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"} {...styling}>
                <Avatar src={avatar} />
                <Typography
                    variant="body1"
                    sx={{
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                    }}
                >
                    {name}
                </Typography>
                <IconButton
                    size="small"
                    sx={{
                        bgcolor: isAdded ? "error.main" : "primary.main",
                        color: "white",
                        "&:hover": { bgcolor: isAdded ? "error.dark" : "primary.dark" },
                    }}
                    onClick={() => handler(_id)}
                    disabled={isHandlerLoading}
                >
                    {isAdded ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </Stack>
        </ListItem>
    );
};

const MemoizedUserItem = memo(UserItem);
export default MemoizedUserItem;
