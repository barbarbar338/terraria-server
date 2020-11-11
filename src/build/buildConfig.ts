import path from "path";
import fs from "fs";
import { IConfig } from "terraria-server";
import "colors";

export default function (CONFIG: IConfig): Promise<void> {
    console.info(
        `${"[TerrariaServer]".bgRed.black}: ${"Building config file.".blue}`,
    );
    return new Promise((resolve) => {
        const configString = [];
        configString.push(
            `world=${path.resolve(CONFIG.SERVER_CONFIG.WORLDS_FOLDER)}\\${
                CONFIG.SERVER_CONFIG.WORLD_FILE
            }.wld`,
        );
        configString.push(
            `worldpath=${path.resolve(CONFIG.SERVER_CONFIG.WORLDS_FOLDER)}`,
        );
        configString.push(
            `banlist=${path.resolve(
                CONFIG.SERVER_CONFIG.WORLDS_FOLDER,
            )}\\${path.normalize(CONFIG.SERVER_CONFIG.BAN_LIST)}.txt`,
        );
        configString.push(`motd=${CONFIG.SERVER_CONFIG.MOTD}`);
        configString.push(`port=${CONFIG.SERVER_CONFIG.PORT}`);
        configString.push(`password=${CONFIG.SERVER_CONFIG.PASSWORD}`);
        configString.push(`maxplayers=${CONFIG.SERVER_CONFIG.MAX_PLAYERS}`);
        configString.push(`lang=${CONFIG.SERVER_CONFIG.LANGUAGE}`);
        configString.push(`worldname=${CONFIG.SERVER_CONFIG.WORLD_FILE}`);
        configString.push(`diffculty=${CONFIG.SERVER_CONFIG.DIFFICULTY}`);
        configString.push(`autocreate=${CONFIG.SERVER_CONFIG.WORLD_SIZE}`);
        configString.push("priority=1");
        configString.push("secure=1");
        fs.writeFile(
            `${CONFIG.BUILD_DIRECTORY}/serverconfig.txt`,
            configString.join("\r\n"),
            () => resolve(),
        );
    });
}
