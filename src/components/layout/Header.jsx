/* eslint-disable react/prop-types */
import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { ORANGE } from "../../constants/color";
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    Add as AddIcon,
    Group as GroupIcon,
    Logout as LogoutIcon,
    Notifications as NotificationIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Suspense, lazy, useState } from "react";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationsDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    const openMenuFun = () => {
        setIsMobile((prev) => !prev);
    };
    const openSearchFun = () => {
        setIsSearch((prev) => !prev);
    };
    const createGroupFun = () => {
        setIsNewGroup((prev) => !prev);
    };
    const notificationsFun = () => {
        setIsNotification((prev) => !prev);
    };
    const ManageGroupsFun = () => {
        navigate("/groups");
    };
    const LogoutFun = () => {};

    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar position="static" sx={{ bgcolor: ORANGE }}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                            Chat App
                        </Typography>
                        <Box sx={{ display: { xs: "block", sm: "none" } }}>
                            <IconButton color="inherit" onClick={openMenuFun}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Box>
                            <ToolTipIcon title={"Search"} Icon={SearchIcon} onClick={openSearchFun} />
                            <ToolTipIcon title={"New Group"} Icon={AddIcon} onClick={createGroupFun} />
                            <ToolTipIcon title={"Manage Groups"} Icon={GroupIcon} onClick={ManageGroupsFun} />
                            <ToolTipIcon
                                title={"Notifications"}
                                Icon={NotificationIcon}
                                onClick={notificationsFun}
                            />
                            <ToolTipIcon title={"Logout"} Icon={LogoutIcon} onClick={LogoutFun} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* Search dialog  */}
            {isSearch && (
                <Suspense fallback={<Backdrop open />}>
                    <SearchDialog />
                </Suspense>
            )}
            {/* Notifications dialog  */}
            {isNotification && (
                <Suspense fallback={<Backdrop open />}>
                    <NotificationsDialog />
                </Suspense>
            )}
            {/* New Group dialog  */}
            {isNewGroup && (
                <Suspense fallback={<Backdrop open />}>
                    <NewGroupDialog />
                </Suspense>
            )}
        </>
    );
};

export default Header;

function ToolTipIcon({ title, Icon, onClick }) {
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size="large" onClick={onClick}>
                <Icon />
            </IconButton>
        </Tooltip>
    );
}
