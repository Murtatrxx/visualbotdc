import type { VisualBotEnv } from './EnvTypes';

declare global {
	namespace NodeJS {
		interface ProcessEnv extends VisualBotEnv {}
	}
}