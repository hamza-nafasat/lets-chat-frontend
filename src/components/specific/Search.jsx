import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import { Dialog, DialogTitle, InputAdornment, List, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import MemoizedUserItem from "../shared/UserItem";

const Search = () => {
    const [users, setUsers] = useState(sampleUsers);
    let isSendFriendRequestLoading = false;

    const search = useInputValidation("");

    const addFriendHandler = (id) => {
        console.log(id);
    };

    return (
        <Dialog open>
            <Stack p={"2rem"} direction={"column"} width={"25rem"}>
                <DialogTitle textAlign={"center"}>Find Peoples</DialogTitle>
                <TextField
                    label={"Search"}
                    variant={"outlined"}
                    type="search"
                    size="small"
                    value={search.value}
                    onChange={search.changeHandler}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <List>
                    {users.map((user) => (
                        <MemoizedUserItem
                            user={user}
                            key={user._id}
                            name={user.name}
                            avatar={user.avatar}
                            handler={addFriendHandler}
                            isHandlerLoading={isSendFriendRequestLoading}
                        />
                    ))}
                </List>
            </Stack>
        </Dialog>
    );
};

export default Search;
