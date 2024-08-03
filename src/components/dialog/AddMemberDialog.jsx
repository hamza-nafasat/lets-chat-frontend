import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import MemoizedUserItem from "../shared/UserItem";

const AddMember = ({ AddMember, isLoadingAddMember, chatId }) => {
    const [members, setMembers] = useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState([]);

    // select member handler
    const selectMemberHandler = (_id) => {
        setSelectedMembers((prev) => (prev.includes(_id) ? prev.filter((id) => id !== _id) : [...prev, _id]));
    };
    // handlers
    // ========
    const addMemberSubmitHandler = () => {
        closeHandler();
    };

    const closeHandler = () => {
        setSelectedMembers([]);
        setMembers([]);
    };

    return (
        <Dialog open onClose={closeHandler}>
            <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
                <DialogTitle textAlign={"center"}>Add Members</DialogTitle>
                <Stack>
                    {members.length > 0 ? (
                        members.map((user) => (
                            <MemoizedUserItem
                                user={user}
                                key={user._id}
                                chatId={chatId}
                                handler={selectMemberHandler}
                                isAdded={selectedMembers.includes(user._id)}
                            />
                        ))
                    ) : (
                        <Typography>No Friend</Typography>
                    )}
                </Stack>

                <Stack direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
                    <Button color="error" variant="outlined" onClick={closeHandler}>
                        Cancel
                    </Button>
                    <Button color="primary" variant="contained" onClick={addMemberSubmitHandler}>
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Dialog>
    );
};

export default AddMember;
