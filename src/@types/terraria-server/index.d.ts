declare module "terraria-server" {
    export interface IConfig {
        BUILD_DIRECTORY: string;
        FILE_NAME: string;
        SERVER_URL: string;
        PORT: number;
        SERVER_FOLDER: string;
        SERVER_FILE: string;
        NGROK_TOKEN: string;
        SERVER_CONFIG: {
            WORLDS_FOLDER: string;
            WORLD_FILE: string;
            BAN_LIST: string;
            MOTD: string;
            PORT: number;
            PASSWORD: string;
            MAX_PLAYERS: number;
            LANGUAGE:
                | "en-US"
                | "de-DE"
                | "it-IT"
                | "fr-FR"
                | "es-ES"
                | "ru-RU"
                | "zh-Hans"
                | "pt-BR"
                | "pl-PL";
            DIFFICULTY: 0 | 1 | 2 | 3;
            WORLD_SIZE: 0 | 1 | 2 | 3;
        };
    }
}
