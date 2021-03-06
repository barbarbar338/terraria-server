import build from "./build";
import start from "./start";
import CONFIG from "./config";
import daph from "daph";

daph.createCommand(
    {
        name: "build",
        usage: "",
        example: [""],
        description: "Builds server files",
        category: "Server",
        aliases: ["b", "generate", "g"],
        argDefinitions: [],
    },
    () => {
        build(CONFIG);
    },
)
    .createCommand(
        {
            name: "start",
            usage: "",
            example: [""],
            description: "Starts server",
            category: "Server",
            aliases: ["s", "bootstrap", "b"],
            argDefinitions: [],
        },
        () => {
            start(CONFIG);
        },
    )
    .help();
