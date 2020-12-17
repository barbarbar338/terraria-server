import { ChildProcess, spawn, execFile } from "child_process";
import { IConfig } from "terraria-server";
import { existsSync } from "fs";
import express from "express";
import "colors";
import { AddressInfo } from "net";
import ip from "ip";

export default function (CONFIG: IConfig): ChildProcess | void {
    if (
        existsSync(
            `${CONFIG.BUILD_DIRECTORY}/1412/Linux/TerrariaServer.bin.x86_64`,
        )
    ) {
        console.info(
            `${"[TerrariaServer]".bgRed.black}: ${"Starting server...".blue}`,
        );

        const app = express();

        app.use((_req, res) => {
            res.send(
                `<h1><span style="color: blue;">Terraria server started on</span> <span style="color: green;">${
                    ip.address() + ":" + CONFIG.SERVER_CONFIG.PORT
                }</span></h1>`,
            ).end();
        });

        const listener = app.listen(CONFIG.PORT, "0.0.0.0", () => {
            console.info(
                `${"[TerrariaServer]".bgRed.black}: ${
                    "Express server started on".blue
                } ${
                    (
                        ip.address() +
                        ":" +
                        (listener.address() as AddressInfo).port.toString()
                    ).green
                }`,
            );
        });

        return spawn(
            "1412/Linux/TerrariaServer.bin.x86_64",
            ["-config", "serverconfig.txt"],
            {
                stdio: "inherit",
                cwd: CONFIG.BUILD_DIRECTORY,
            },
        );
    } else {
        console.info(
            `${"[TerrariaServer]".bgRed.black}: ${
                "TerrariaServer.bin.x86_64".yellow
            } ${"not found. Run".blue} ${"build".yellow} ${"first.".blue}`,
        );
        process.exit(0);
    }
}
