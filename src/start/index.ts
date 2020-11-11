import { ChildProcess, spawn } from "child_process";
import { IConfig } from "terraria-server";
import { existsSync } from "fs";
import "colors";

export default function (CONFIG: IConfig): ChildProcess | void {
    if (existsSync(`${CONFIG.BUILD_DIRECTORY}/TerrariaServer.exe`)) {
        console.info(
            `${"[TerrariaServer]".bgRed.black}: ${"Starting server...".blue}`,
        );
        return spawn("TerrariaServer.exe", ["-config", "serverconfig.txt"], {
            stdio: "inherit",
            cwd: CONFIG.BUILD_DIRECTORY,
        });
    } else {
        console.info(
            `${"[TerrariaServer]".bgRed.black}: ${
                "TerrariaServer.exe".yellow
            } ${"not found. Run".blue} ${"build".yellow} ${"first.".blue}`,
        );
        process.exit(0);
    }
}
