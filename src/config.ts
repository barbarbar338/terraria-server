import { IConfig } from "terraria-server";
import * as dotenv from "dotenv";
import * as os from "os";
import * as pogger from "pogger";

dotenv.config();

const supportedPlatforms = ["linux", "win32"];
const platform = os.platform();
if (!supportedPlatforms.includes(platform)) {
    pogger.error(`Supported platforms: ${supportedPlatforms.join(", ")}`);
    process.exit(1);
}

const BUILD_DIRECTORY = "./server";

let SERVER_FOLDER = `${BUILD_DIRECTORY}/1412/Linux`;
let SERVER_FILE = `${BUILD_DIRECTORY}/1412/Linux/TerrariaServer.bin.x86_64`;
switch (platform) {
    case "linux":
        SERVER_FOLDER = `${BUILD_DIRECTORY}/1412/Linux`;
        SERVER_FILE = `${BUILD_DIRECTORY}/1412/Linux/TerrariaServer.bin.x86_64`;
        break;
    case "win32":
        SERVER_FOLDER = `${BUILD_DIRECTORY}/1412/Windows`;
        SERVER_FILE = `${BUILD_DIRECTORY}/1412/Windows/TerrariaServer.exe`;
        break;
}

const CONFIG: IConfig = {
    SERVER_URL:
        "https://terraria.org/system/dedicated_servers/archives/000/000/042/original/terraria-server-1412.zip", // Terraria official server 1.4.1.2
    BUILD_DIRECTORY,
    SERVER_FOLDER,
    SERVER_FILE,
    FILE_NAME: "server.zip",
    PORT: parseInt(process.env.PORT as string) || 3000,
    NGROK_TOKEN: process.env.NGROK_TOKEN as string,
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
