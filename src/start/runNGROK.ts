import { IConfig } from "terraria-server";
import * as pogger from "pogger";
import ngrok from "ngrok";

export default async function (CONFIG: IConfig): Promise<string> {
    pogger.event("Starting NGROK");
    const ngrokURL = await ngrok.connect({
        addr: 7777,
        proto: "tcp",
        authtoken: CONFIG.NGROK_TOKEN,
    });
    const result = ngrokURL.slice("tcp://".length);
    return result;
}
