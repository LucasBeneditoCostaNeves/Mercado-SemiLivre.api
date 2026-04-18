import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DomainExceptionFilter } from './infra/http/errors/DomainExcepionFilter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new DomainExceptionFilter())
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
