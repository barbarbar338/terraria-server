import request from "request";
import AdmZip from "adm-zip";
import { mkdir, createWriteStream } from "fs";
import { IConfig } from "terraria-server";
import "colors";

export default function (CONFIG: IConfig): Promise<void> {
    console.info(
        `${"[TerrariaServer]".bgRed.black}: ${"Building server files.".blue}`,
    );
    return new Promise((resolve, reject) => {
        mkdir(CONFIG.BUILD_DIRECTORY, (err) => {
            if (err && err.code != "EEXIST") reject(err);
            const file = createWriteStream(
                CONFIG.BUILD_DIRECTORY + "/" + CONFIG.FILE_NAME,
            );
            request({
                uri: CONFIG.SERVER_URL,
                gzip: true,
            })
                .pipe(file)
                .on("finish", () => {
                    new AdmZip(
                        CONFIG.BUILD_DIRECTORY + "/" + CONFIG.FILE_NAME,
                    ).extractAllTo(CONFIG.BUILD_DIRECTORY, true);
                    resolve();
                })
                .on("error", reject);
        });
    });
}
