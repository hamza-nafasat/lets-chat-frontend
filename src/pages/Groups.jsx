/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import {
    Add as AddIcon,
    Delete as DeleteIcon,
    Done as DoneIcon,
    Edit as EditIcon,
    KeyboardBackspace as KeyboardBackspaceIcon,
    Menu as MenuIcon,
} from "@mui/icons-material";
import {
    Backdrop,
    Box,
    Button,
    Drawer,
    Grid,
    IconButton,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import { BG_GRADIENT, MATE_BLACK } from "../constants/color";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Suspense, lazy, memo, useEffect, useState } from "react";
import { StyledLink } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats, sampleUsers } from "../constants/sampleData";
import MemoizedUserItem from "../components/shared/UserItem";

const ConfirmDeleteDialog = lazy(() => import("../components/dialog/ConfirmDeleteDialog"));
const AddMemberDialog = lazy(() => import("../components/dialog/AddMemberDialog"));

const Groups = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [updatedGroupName, setUpdatedGroupName] = useState("");
    const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
    const [isAddMember, setIsAddMember] = useState(false);

    const navigate = useNavigate();
    const chatId = useSearchParams()[0].get("group") || "";

    // handlers
    // ========
    const navigateBack = () => navigate("/");
    const handleMobile = () => setIsMobileMenuOpen((prev) => !prev);
    const handleMobileClose = () => setIsMobileMenuOpen(false);
    const openConfirmDeleteHandler = () => setConfirmDeleteDialog(true);
    const closeConfirmDeleteHandler = () => setConfirmDeleteDialog(false);
    const openAddMemberHandler = () => setIsAddMember(true);
    const deleteGroupHandler = () => setConfirmDeleteDialog(false);
    const updateGroupName = () => {
        setIsEdit(false);
        console.log(updatedGroupName);
    };
    const removeMemberHandler = (id) => {
        console.log(id);
    };
    // fetch data
    useEffect(() => {
        if (chatId) {
            setGroupName(`Group Name ${chatId}`);
            setUpdatedGroupName(`Group Name ${chatId}`);
        }
        return () => {
            setGroupName("");
            setUpdatedGroupName("");
            setIsEdit(false);
        };
    }, [chatId]);
    // variable with jsx element for icon buttons
    const iconButtonsJsx = (
        <>
            <Box
                sx={{
                    display: { xs: "block", sm: "none" },
                    position: "fixed",
                    right: "1rem",
                    top: "1rem",
                }}
            >
                <Tooltip title="Menu">
                    <IconButton onClick={handleMobile}>
                        <MenuIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Tooltip title="Back">
                <IconButton
                    sx={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        bgcolor: MATE_BLACK,
                        color: "white",
                        "&:hover": { bgcolor: "black" },
                    }}
                    onClick={navigateBack}
                >
                    <KeyboardBackspaceIcon />
                </IconButton>
            </Tooltip>
        </>
    );
    // variable with jsx element for
    const groupNameJsx = (
        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} justifyContent={"center"}>
            {isEdit ? (
                <>
                    <TextField
                        label={"Group Name"}
                        value={updatedGroupName}
                        onChange={(e) => setUpdatedGroupName(e.target.value)}
                    />
                    <IconButton onClick={updateGroupName}>
                        <DoneIcon />
                    </IconButton>
                </>
            ) : (
                <>
                    <Typography color={"secondary"} variant="h4">
                        {groupName}
                    </Typography>
                    <IconButton onClick={() => setIsEdit(true)}>
                        <EditIcon />
                    </IconButton>
                </>
            )}
        </Stack>
    );
    const buttonGroupJsx = (
        <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            spacing={"1rem"}
            p={{ xs: "0", sm: "1rem", md: "1rem 4rem" }}
        >
            <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={openConfirmDeleteHandler}
            >
                Delete Group
            </Button>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={openAddMemberHandler}
            >
                Add Member
            </Button>
        </Stack>
    );

    return (
        <Grid container height={"100vh"}>
            <Grid item sm={4} sx={{ display: { xs: "none", sm: "block" } }} overflow={"auto"} height={"100%"}>
                <GroupList width={"100%"} myGroups={sampleChats} chatId={chatId} />
            </Grid>
            <Grid
                item
                xs={12}
                sm={8}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    padding: "1rem 3rem",
                }}
            >
                {iconButtonsJsx}
                {groupName && (
                    <>
                        {groupNameJsx}
                        <Typography>Members</Typography>
                        <Stack
                            maxWidth={"45rem"}
                            width={"100%"}
                            boxSizing={"border-box"}
                            padding={{ xs: "0", sm: "1rem", md: "1rem 4rem" }}
                            spacing={"2rem"}
                            height={"50vh"}
                            overflowY={"auto"}
                        >
                            {/* showing members  */}
                            {sampleUsers.map((user, i) => (
                                <MemoizedUserItem
                                    key={i}
                                    user={user}
                                    isAdded={true}
                                    styling={{
                                        boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                                        padding: "1rem 2rem",
                                        borderRadius: "1rem",
                                    }}
                                    handler={removeMemberHandler}
                                />
                            ))}
                        </Stack>
                        {buttonGroupJsx}
                    </>
                )}
            </Grid>
            {/* add member  */}
            {isAddMember && (
                <Suspense fallback={<Backdrop open />}>
                    <AddMemberDialog
                        AddMember={openAddMemberHandler}
                        chatId={chatId}
                        isLoadingAddMember={false}
                    />
                </Suspense>
            )}
            {/* open delete drawer  */}
            {confirmDeleteDialog && (
                <Suspense fallback={<Backdrop open />}>
                    <ConfirmDeleteDialog
                        open={confirmDeleteDialog}
                        handleClose={closeConfirmDeleteHandler}
                        deleteHandler={deleteGroupHandler}
                        text={"Are you sure you want to delete this?"}
                    />
                </Suspense>
            )}

            <Drawer
                open={isMobileMenuOpen}
                onClose={handleMobileClose}
                sx={{ display: { xs: "block", sm: "none" } }}
            >
                <GroupList width={"100%"} myGroups={sampleChats} chatId={chatId} />
            </Drawer>
        </Grid>
    );
};

export default Groups;

const GroupList = ({ width = "100%", myGroups = [], chatId }) => (
    <Stack width={width} sx={{ backgroundImage: BG_GRADIENT }}>
        {myGroups.length > 0 ? (
            myGroups.map((group, i) => <GroupListItem key={i} group={group} chatId={chatId} />)
        ) : (
            <Typography textAlign={"center"} padding={"1rem"}>
                No groups
            </Typography>
        )}
    </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
    const { name, avatar, _id } = group;
    const changeDefaultBehavior = (e) => {
        if (chatId === _id) e.preventDefault();
    };
    return (
        <StyledLink to={`?group=${_id}`} onClick={changeDefaultBehavior}>
            <Stack direction={"row"} alignItems={"center"} spacing={"3rem"}>
                <AvatarCard avatar={avatar} />
                <Typography>{name}</Typography>
            </Stack>
        </StyledLink>
    );
});
