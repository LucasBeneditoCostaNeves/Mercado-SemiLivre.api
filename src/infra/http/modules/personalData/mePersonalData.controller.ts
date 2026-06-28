import { Body, Controller, Get, Post, Put, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import type { AuthenticatedUser } from 'src/infra/http/modules/auth/models/authRequestModel'
import { Gender } from 'src/modules/personalData/entities/PersonalData'
import { CreatePersonalDataUseCase } from 'src/modules/personalData/useCases/createPersonalDataUseCase/createPersonalDataUseCase'
import { GetPersonalDataUseCase } from 'src/modules/personalData/useCases/getPersonalDataUseCase/getPersonalDataUseCase'
import { UpdatePersonalDataUseCase } from 'src/modules/personalData/useCases/updatePersonalDataUseCase/updatePersonalDataUseCase'
import { CurrentUser } from '../auth/decorators/currentUser.decorator'
import { CreatePersonalDataBodyDto, UpdatePersonalDataBodyDto } from './dtos/personalData.dto'
import { PersonalDataViewModel } from './viewModel/PersonalDataViewModel'

@Controller('me/personal-data')
@UsePipes(ZodValidationPipe)
export class MePersonalDataController {
    constructor(
        private createPersonalDataUseCase: CreatePersonalDataUseCase,
        private getPersonalDataUseCase: GetPersonalDataUseCase,
        private updatePersonalDataUseCase: UpdatePersonalDataUseCase,
    ) {}

    @Post()
    async create(@CurrentUser() user: AuthenticatedUser, @Body() body: CreatePersonalDataBodyDto) {
        const personalData = await this.createPersonalDataUseCase.execute({
            userId: user.id,
            cpf: body.cpf,
            birthDate: body.birthDate,
            phone: body.phone,
            gender: body.gender as Gender,
        })
        return PersonalDataViewModel.toHTTP(personalData)
    }

    @Get()
    async get(@CurrentUser() user: AuthenticatedUser) {
        const personalData = await this.getPersonalDataUseCase.execute({ userId: user.id })
        return PersonalDataViewModel.toHTTP(personalData)
    }

    @Put()
    async update(@CurrentUser() user: AuthenticatedUser, @Body() body: UpdatePersonalDataBodyDto) {
        await this.updatePersonalDataUseCase.execute({
            userId: user.id,
            birthDate: body.birthDate,
            phone: body.phone,
            gender: body.gender as Gender | undefined,
        })
        return { message: 'Dados pessoais atualizados com sucesso' }
    }
}
