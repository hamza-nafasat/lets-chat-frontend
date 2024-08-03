/* eslint-disable react/prop-types */
import { Avatar, Stack, Typography } from "@mui/material";
import {
    Face as FaceIcon,
    AlternateEmail as UsernameIcon,
    CalendarMonth as DateIcon,
} from "@mui/icons-material";
import moment from "moment";

const ProfileCard = ({ text, Icon, heading }) => (
    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} color={"white"} textAlign={"center"}>
        {Icon && Icon}
        <Stack>
            <Typography variant="body1">{text}</Typography>
            <Typography variant="caption" color={"gray"}>
                {heading}
            </Typography>
        </Stack>
    </Stack>
);

const Profile = () => {
    return (
        <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
            <Avatar
                sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                    marginBottom: "1rem",
                    border: "5px solid white",
                }}
            />
            <ProfileCard heading={"Bio"} text={"i am a software engineer"} />
            <ProfileCard heading={"Username"} Icon={<UsernameIcon />} text={"hamza_nafasat"} />
            <ProfileCard heading={"Name"} Icon={<FaceIcon />} text={"Hamza Nafasat"} />
            <ProfileCard heading={"Joined"} Icon={<DateIcon />} text={moment("2022-01-01").fromNow()} />
        </Stack>
    );
};

export default Profile;
