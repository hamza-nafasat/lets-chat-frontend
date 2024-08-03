export const usernameValidator = (userName) => {
    // check user name validation with regex
    if (!userName) {
        return;
    } else if (/^[a-z0-9_-]+$/.test(userName)) {
        return;
    } else {
        return {
            isValid: false,
            errorMessage: "Please enter a valid username.",
        };
    }
};
