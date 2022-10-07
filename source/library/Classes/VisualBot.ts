import { LogLevel, SapphireClient } from '@sapphire/framework';
import { ApplicationCommandRegistries, RegisterBehavior } from '@sapphire/framework';

import { container } from '@sapphire/framework';
import { PrismaClient } from '@prisma/client';

export class VisualBot extends SapphireClient {
  public constructor () {
    super({
      logger: {
        level: LogLevel.Debug
      },
      allowedMentions: {
        parse: ['everyone', 'roles', 'users'],
        repliedUser: true
      },
      partials: [
        'CHANNEL',
        'MESSAGE',
        'GUILD_MEMBER'
      ],
      shards: 'auto',
      intents: [102991],
    });
  }

  /**
   * Login to the client with other utilities
   */

  public async start(): Promise<string> {
    ApplicationCommandRegistries
      .setDefaultBehaviorWhenNotIdentical(RegisterBehavior.Overwrite);

    container.prisma = new PrismaClient();
    await container.prisma.$connect();

    return super.login(process.env.DISCORD_TOKEN);
  }
}

declare module '@sapphire/pieces' {
  interface Container {
    prisma: PrismaClient;
  }
}