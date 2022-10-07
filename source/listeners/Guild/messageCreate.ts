import { ApplyOptions } from '@sapphire/decorators';
import { Events, Listener } from '@sapphire/framework';

@ApplyOptions<Listener.Options> ({
  once: false  
})

export default class MessageCreateEvent extends Listener <typeof Events.MessageCreate> {
  public async run () {

  }
}