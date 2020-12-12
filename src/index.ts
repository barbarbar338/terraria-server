import build from "./build";
import start from "./start";
import parser from "command-line-args";
import CONFIG from "./config";
import "colors";

const definitions = [
    { name: "build", alias: "b", type: Boolean },
    { name: "start", alias: "s", type: Boolean },
];

const args = parser(definitions, {
    partial: true,
});

if (args.build && !args.start) {
    build(CONFIG);
} else if (!args.build && args.start) {
    start(CONFIG);
} else {
    console.info(
        `${"[TerrariaServer]".bgRed.black}: ${"Available options".green} -> ${
            "--build, --start".yellow
        }`,
    );
}
