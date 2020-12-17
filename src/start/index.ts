import { ChildProcess, spawn, execFile } from "child_process";
import { IConfig } from "terraria-server";
import { existsSync } from "fs";
import "colors";

export default function (CONFIG: IConfig): ChildProcess | void {
    if (
        existsSync(
            `${CONFIG.BUILD_DIRECTORY}/1412/Linux/TerrariaServer.bin.x86_64`,
        )
    ) {
        console.info(
            `${"[TerrariaServer]".bgRed.black}: ${"Starting server...".blue}`,
        );
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
