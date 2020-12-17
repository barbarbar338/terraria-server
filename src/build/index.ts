import buildServer from "./buildServer";
import buildConfig from "./buildConfig";
import { IConfig } from "terraria-server";
import rimraf from "rimraf";
import "colors";

export default function(CONFIG: IConfig): Promise<void> {
    console.info(
        `${"[TerrariaServer]".bgRed.black}: ${"Building server...".blue}`,
    );
    return new Promise((resolve, reject) => {
        rimraf(CONFIG.BUILD_DIRECTORY, (err) => {
            if (err) reject(err);
            buildServer(CONFIG)
                .then(() => {
                    buildConfig(CONFIG)
                        .then(() => {
                            console.info(
                                `${"[TerrariaServer]".bgRed.black}: ${"Done!".blue
                                }`,
                            );
                            resolve();
                        })
                        .catch(reject);
                })
                .catch(reject);
        });
    });
}
