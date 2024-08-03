export const fileFormate = (url) => {
    const fileExt = url.split(".").pop();
    if (fileExt === "mp4" || fileExt === "ogg" || fileExt === "webm") {
        return "video";
    } else if (fileExt === "wav" || fileExt === "mp3") {
        return "audio";
    } else if (
        fileExt === "png" ||
        fileExt === "jpg" ||
        fileExt === "jpeg" ||
        fileExt === "gif" ||
        fileExt === "webp"
    ) {
        return "image";
    } else {
        return "file";
    }
};

export const transformImage = (url = "", width = 100) => {
    return url;
};
