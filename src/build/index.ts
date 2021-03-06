import buildServer from "./buildServer";
import buildConfig from "./buildConfig";
import { IConfig } from "terraria-server";
import rimraf from "rimraf";
import * as pogger from "pogger";

export default function (CONFIG: IConfig): Promise<void> {
    pogger.info("Building server...");
    return new Promise((resolve, reject) => {
        rimraf(CONFIG.BUILD_DIRECTORY, (err) => {
            if (err) reject(err);
            buildServer(CONFIG)
                .then(() => {
                    buildConfig(CONFIG)
                        .then(() => {
                            pogger.success("Building done!");
                            resolve();
                        })
                        .catch(reject);
                })
                .catch(reject);
        });
    });
}
