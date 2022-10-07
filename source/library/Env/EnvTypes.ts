export type BooleanString = 'true' | 'false';
export type IntegerString = `${bigint}`;

export type VisualBotEnvAny = keyof VisualBotEnv;
export type VisualBotEnvString = {
	[K in VisualBotEnvAny]: VisualBotEnv[K] extends BooleanString | IntegerString ? never : K;
}[VisualBotEnvAny];
export type VisualBotEnvBoolean = {
	[K in VisualBotEnvAny]: VisualBotEnv[K] extends BooleanString ? K : string;
}[VisualBotEnvAny];
export type VisualBotEnvInteger = {
	[K in VisualBotEnvAny]: VisualBotEnv[K] extends IntegerString ? K : string;
}[VisualBotEnvAny];

export interface VisualBotEnv {
	NODE_ENV?: 'test' | 'development' | 'production';
	DOTENV_DEBUG_ENABLED?: BooleanString;

	CLIENT_NAME?: string;
	CLIENT_VERSION?: string;
	CLIENT_PREFIX?: string;
	CLIENT_REGEX_PREFIX?: string;
	CLIENT_OWNERS?: string;
	CLIENT_ID?: string;
	CLIENT_SHARDS?: string;

	DISCORD_TOKEN?: string;
	MONGO_SRV?: string;

	VOID_BOT_TOKEN?: string;
	TOP_BOT_TOKEN?: string;
}