import { useInputValidation } from "6pp";
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import MemoizedUserItem from "../shared/UserItem";

const NewGroup = () => {
    const groupName = useInputValidation("");
    const [members, setMembers] = useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState([]);

    // select member handler
    const selectMemberHandler = (_id) => {
        setSelectedMembers((prev) => (prev.includes(_id) ? prev.filter((id) => id !== _id) : [...prev, _id]));
    };

    // group create handler
    const createHandler = () => {};

    // close handler
    const closeHandler = () => {};
    return (
        <Dialog open onClose={closeHandler}>
            <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"1rem"}>
                <DialogTitle textAlign={"center"} variant="h4">
                    New Group
                </DialogTitle>

                <TextField
                    label={"Group Name"}
                    variant={"outlined"}
                    value={groupName.value}
                    onChange={groupName.changeHandler}
                    sx={{ mb: "1rem" }}
                />

                <Typography variant="body1">Members</Typography>

                <Stack>
                    {members.map((user) => (
                        <MemoizedUserItem
                            user={user}
                            key={user._id}
                            isAdded={selectedMembers.includes(user._id)}
                            name={user.name}
                            avatar={user.avatar}
                            handler={selectMemberHandler}
                        />
                    ))}
                </Stack>

                <Stack direction={"row"} justifyContent={"space-evenly"}>
                    <Button variant="outlined" color="error">
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" onClick={createHandler}>
                        Create
                    </Button>
                </Stack>
            </Stack>
        </Dialog>
    );
};

export default NewGroup;
