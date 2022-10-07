import { ApplyOptions } from '@sapphire/decorators';
import { Events, Listener } from '@sapphire/framework';

@ApplyOptions<Listener.Options> ({
  once: false  
})

export default class GuildCreateEvent extends Listener <typeof Events.GuildCreate> {
  public async run () {

  }
}