import { ChildProcess, spawn } from "child_process";
import { IConfig } from "terraria-server";
import { existsSync } from "fs";
import express from "express";
import { AddressInfo } from "net";
import * as pogger from "pogger";
import runNGROK from "./runNGROK";

export default async function (CONFIG: IConfig): Promise<ChildProcess | void> {
    if (existsSync(CONFIG.SERVER_FILE)) {
        pogger.event("Starting NGROK");
        const host = await runNGROK(CONFIG);
        pogger.success(`NGROK forward started on ${host}`);
        pogger.event("Starting server");
        const app = express();
        app.use((_req, res) => {
            res.send(
                `<h1><span style="color: blue;">Terraria server started on </span> <span style="color: green;">${host}</span></h1>`,
            ).end();
        });
        const listener = app.listen(CONFIG.PORT, "0.0.0.0", () => {
            pogger.success(
                `Express server started on port ${(listener.address() as AddressInfo).port.toString()}`,
            );
        });
        const serverProcess = spawn(
            CONFIG.SERVER_FILE,
            ["-config", `${CONFIG.SERVER_FOLDER}\\serverconfig.txt`],
            {
                stdio: "inherit",
                cwd: process.cwd(),
            },
        );
        return serverProcess;
    } else {
        pogger.error(`${CONFIG.SERVER_FILE} not found.`);
        pogger.info("Run 'yarn build' or 'npm run build' command first");
        process.exit(0);
    }
}
