import { Controller, Get, HttpCode } from '@nestjs/common'
import { Public } from '../auth/decorators/isPublic'

@Controller('health')
export class HealthController {
  @Get()
  @HttpCode(200)
  @Public()
  check() {
    return { status: 'ok' }
  }
}
