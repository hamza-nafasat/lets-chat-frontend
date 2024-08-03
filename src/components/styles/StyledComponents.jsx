import { styled } from "@mui/material";
import { Link as LinkTag } from "react-router-dom";
import { GRAY_COLOR } from "../../constants/color";

export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
});

export const StyledLink = styled(LinkTag)({
    textDecoration: "none",
    color: "black",
    padding: "1rem",
    "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)",
    },
    "&:focus": {
        color: "white",
        backgroundColor: "rgba(0,0,0)",
    },
});

export const InputBox = styled("input")({
    border: "none",
    width: "100%",
    height: "100%",
    outline: "none",
    padding: "1rem",
    paddingLeft: "3rem",
    borderRadius: "0.5rem",
    backgroundColor: `${GRAY_COLOR}`,
});
