import buildServer from "./buildServer";
import buildConfig from "./buildConfig";
import { IConfig } from "terraria-server";
import rimraf from "rimraf";
import * as pogger from "pogger";
import * as os from "os";
import { execSync } from "node:child_process";

export default function (CONFIG: IConfig): Promise<void> {
    pogger.info("Building server...");
    return new Promise((resolve, reject) => {
        rimraf(CONFIG.BUILD_DIRECTORY, (err) => {
            if (err) reject(err);
            buildServer(CONFIG)
                .then(() => {
                    buildConfig(CONFIG)
                        .then(() => {
                            const platform = os.platform();
                            if (platform === "linux") {
                                pogger.info(
                                    "Linux operating sistem detected, running chmod command",
                                );
                                execSync(
                                    `chmod -R 777 ${CONFIG.BUILD_DIRECTORY}`,
                                    {
                                        stdio: "inherit",
                                        cwd: process.cwd(),
                                    },
                                );
                            }
                            pogger.success("Building done!");
                            resolve();
                        })
                        .catch(reject);
                })
                .catch(reject);
        });
    });
}
