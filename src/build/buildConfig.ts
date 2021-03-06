import { resolve } from "path";
import { writeFile } from "fs";
import { IConfig } from "terraria-server";
import * as pogger from "pogger";

export default function (CONFIG: IConfig): Promise<void> {
    pogger.event("Building config file");
    return new Promise((res) => {
        const configString = [];
        configString.push(
            `world=${resolve(CONFIG.SERVER_CONFIG.WORLDS_FOLDER)}\\${
                CONFIG.SERVER_CONFIG.WORLD_FILE
            }.wld`,
        );
        configString.push(
            `worldpath=${resolve(CONFIG.SERVER_CONFIG.WORLDS_FOLDER)}`,
        );
        configString.push(`banlist=${CONFIG.SERVER_CONFIG.BAN_LIST}.txt`);
        configString.push(`motd=${CONFIG.SERVER_CONFIG.MOTD}`);
        configString.push(`port=${CONFIG.SERVER_CONFIG.PORT}`);
        configString.push(`password=${CONFIG.SERVER_CONFIG.PASSWORD}`);
        configString.push(`maxplayers=${CONFIG.SERVER_CONFIG.MAX_PLAYERS}`);
        configString.push(`language=${CONFIG.SERVER_CONFIG.LANGUAGE}`);
        configString.push(`worldname=${CONFIG.SERVER_CONFIG.WORLD_FILE}`);
        configString.push(`diffculty=${CONFIG.SERVER_CONFIG.DIFFICULTY}`);
        configString.push(`autocreate=${CONFIG.SERVER_CONFIG.WORLD_SIZE}`);
        configString.push("worldrollbackstokeep=5");
        configString.push("npcstream=60");
        configString.push("priority=1");
        configString.push("secure=1");
        configString.push("upnp=1");
        writeFile(
            `${CONFIG.SERVER_FOLDER}\\serverconfig.txt`,
            configString.join("\r\n"),
            () => res(),
        );
    });
}
