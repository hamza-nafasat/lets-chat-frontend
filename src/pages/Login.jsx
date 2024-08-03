import { useFileHandler, useInputValidation } from "6pp";
import { CameraAlt } from "@mui/icons-material";
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { usernameValidator } from "../utils/validator";
import { BG_GRADIENT } from "../constants/color";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    // const password = useStrongPassword();
    const password = useInputValidation("");
    const avatar = useFileHandler("single");

    // login function
    const loginHandler = () => {};
    // register function
    const registerHandler = () => {};
    const toggelHandler = () => {
        setIsLogin(!isLogin);
        clearFormHandler();
    };
    // clear form function
    function clearFormHandler() {
        name.clear();
        bio.clear();
        username.clear();
        password.clear();
        avatar.clear();
    }
    return (
        <div style={{ backgroundImage: BG_GRADIENT }}>
            <Container
                component="main"
                maxWidth="xs"
                sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
                <Paper
                    elevation={3}
                    sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                    {isLogin ? (
                        <>
                            <Typography variant="h5"> Login </Typography>
                            <form
                                style={{
                                    width: "100%",
                                    marginTop: "16px",
                                }}
                                onSubmit={loginHandler}
                            >
                                <TextField
                                    required
                                    label="Username"
                                    variant="outlined"
                                    placeholder="Enter Your Username"
                                    margin="normal"
                                    fullWidth
                                    value={username.value}
                                    onChange={username.changeHandler}
                                />
                                {username.error && (
                                    <Typography color={"error"} variant="caption">
                                        {username.error}
                                    </Typography>
                                )}
                                <TextField
                                    required
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    placeholder="Enter Your Password"
                                    margin="normal"
                                    fullWidth
                                    value={password.value}
                                    onChange={password.changeHandler}
                                />
                                <Button
                                    sx={{
                                        marginTop: "16px",
                                    }}
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    type="submit"
                                >
                                    Login
                                </Button>
                                <Typography sx={{ marginTop: "16px" }} textAlign={"center"}>
                                    OR
                                </Typography>
                                <Button color="secondary" variant="text" fullWidth onClick={toggelHandler}>
                                    Don&apos;t Have an Account
                                </Button>
                            </form>
                        </>
                    ) : (
                        <>
                            <Typography variant="h5">Create a New Account</Typography>
                            <form
                                onSubmit={registerHandler}
                                style={{
                                    width: "100%",
                                    marginTop: "16px",
                                }}
                            >
                                <Stack
                                    width={"96px"}
                                    margin={"auto"}
                                    position={"relative"}
                                    marginBottom={"16px"}
                                >
                                    <Avatar
                                        src={avatar.preview}
                                        sx={{
                                            width: "96px",
                                            height: "96px",
                                            objectFit: "contain",
                                        }}
                                    />
                                    <IconButton
                                        sx={{
                                            position: "absolute",
                                            height: "28.8px",
                                            width: "28.8px",
                                            bottom: 0,
                                            right: 0,
                                            color: "white",
                                            bgcolor: "rgba(0,0,0,0.5)",
                                            ":hover": {
                                                color: "rgba(0,0,0,0.5)",
                                            },
                                        }}
                                        component="label"
                                    >
                                        <>
                                            <CameraAlt style={{ fontSize: "19.2px" }} />
                                            <VisuallyHiddenInput
                                                accept="image/*"
                                                type="file"
                                                onChange={avatar.changeHandler}
                                            />
                                        </>
                                    </IconButton>
                                </Stack>
                                {avatar.error && (
                                    <Typography
                                        width={"fit-content"}
                                        display={"block"}
                                        color={"error"}
                                        variant="caption"
                                    >
                                        {avatar.error}
                                    </Typography>
                                )}
                                <TextField
                                    required
                                    label="Name"
                                    variant="outlined"
                                    placeholder="Enter Your Name"
                                    margin="dense"
                                    fullWidth
                                    value={name.value}
                                    onChange={name.changeHandler}
                                />
                                <TextField
                                    required
                                    label="Username"
                                    variant="outlined"
                                    placeholder="Enter Your Username"
                                    margin="dense"
                                    fullWidth
                                    value={username.value}
                                    onChange={username.changeHandler}
                                />
                                {username.error && (
                                    <Typography color={"error"} variant="caption">
                                        {username.error}
                                    </Typography>
                                )}
                                <TextField
                                    required
                                    label="Bio"
                                    variant="outlined"
                                    placeholder="Enter Your Bio"
                                    margin="dense"
                                    fullWidth
                                    value={bio.value}
                                    onChange={bio.changeHandler}
                                />
                                <TextField
                                    required
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    placeholder="Enter Your Password"
                                    margin="dense"
                                    fullWidth
                                    value={password.value}
                                    onChange={password.changeHandler}
                                />
                                <Button
                                    sx={{
                                        marginTop: "8px",
                                    }}
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    type="submit"
                                >
                                    Register
                                </Button>
                                <Typography sx={{ marginTop: "8px" }} textAlign={"center"}>
                                    OR
                                </Typography>
                                <Button color="secondary" variant="text" fullWidth onClick={toggelHandler}>
                                    Already Have an Account
                                </Button>
                            </form>
                        </>
                    )}
                </Paper>
            </Container>
        </div>
    );
};

export default Login;
