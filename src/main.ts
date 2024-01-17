import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setGlobalDispatcher, ProxyAgent } from 'undici';
const dispatcher = new ProxyAgent({
  uri: new URL(process.env.https_proxy).toString(),
});
//全局fetch调用启用代理
setGlobalDispatcher(dispatcher);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
