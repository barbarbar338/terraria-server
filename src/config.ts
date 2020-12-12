import { IConfig } from "terraria-server";

const CONFIG: IConfig = {
    SERVER_URL:
        "https://terraria.org/system/dedicated_servers/archives/000/000/042/original/terraria-server-1412.zip", // Terraria official server 1.4.1.2
    BUILD_DIRECTORY: "./server",
    FILE_NAME: "server.zip",
    SERVER_CONFIG: {
        WORLDS_FOLDER: "./server/worlds",
        WORLD_FILE: "MyWorld",
        BAN_LIST: "banlist",
        MOTD: "Welcome to Terraria!",
        PORT: 7777,
        PASSWORD: "p@55w0rd",
        MAX_PLAYERS: 2,
        LANGUAGE: "en-US",
        DIFFICULTY: 0,
        WORLD_SIZE: 1,
    },
};

export default CONFIG;
