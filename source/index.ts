import './library/Utilities/Setup';
import { VisualBot } from './library/Classes/VisualBot';

const client = new VisualBot();

async function main(): Promise<void> {
  try {
    await client.start(); 
    client.logger.info('Login was successful');
  } catch (error) {
    client.logger.fatal(error);
    client.destroy();
    process.exit(1);
  }
}

main();
