/* eslint-disable react/prop-types */
import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import { transformImage } from "../../lib/features";

const AvatarCard = ({ avatar = [], max = 4 }) => {
    return (
        <Stack direction={"row"} spacing={0.5}>
            <AvatarGroup max={max} sx={{ position: "relative" }}>
                <Box width={"5rem"} height={"3rem"}>
                    {avatar.map((avatar, i) => (
                        <Avatar
                            src={transformImage(avatar)}
                            alt={`avatar ${i}`}
                            key={i}
                            sx={{
                                width: "3rem",
                                height: "3rem",
                                position: "absolute",
                                left: {
                                    xs: `${0.5 + Number(i)}rem`,
                                    sm: `${i}rem`,
                                },
                            }}
                        />
                    ))}
                </Box>
            </AvatarGroup>
        </Stack>
    );
};

export default AvatarCard;
