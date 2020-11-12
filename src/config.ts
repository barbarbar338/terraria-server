import { IConfig } from "terraria-server";

const CONFIG: IConfig = {
    SERVER_URL:
        "http://download1588.mediafire.com/gcbkifyka1yg/cjw3webejoyv9k0/1412.zip", // Terraria server 1.4.1.2
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
