import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as proxy from "http-proxy-middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Proxy request to services
  app.use("/users", proxy.createProxyMiddleware({ target: "http://user-service:3001", changeOrigin: true }));
  app.use("/products", proxy.createProxyMiddleware({ target: "http://user-service:3001", changeOrigin: true }));

  await app.listen(3000);
}

bootstrap();
