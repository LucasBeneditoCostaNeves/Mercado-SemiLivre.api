import { Body, Controller, Get, Param, Post, Put, UseGuards, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import { AdminProfileGuard } from '../auth/guards/adminProfile.guard'
import { Gender } from 'src/modules/personalData/entities/PersonalData'
import { CreatePersonalDataUseCase } from 'src/modules/personalData/useCases/createPersonalDataUseCase/createPersonalDataUseCase'
import { GetPersonalDataUseCase } from 'src/modules/personalData/useCases/getPersonalDataUseCase/getPersonalDataUseCase'
import { UpdatePersonalDataUseCase } from 'src/modules/personalData/useCases/updatePersonalDataUseCase/updatePersonalDataUseCase'
import { PersonalDataViewModel } from './viewModel/PersonalDataViewModel'
import {
    CreatePersonalDataBodyDto,
    PersonalDataParamsDto,
    UpdatePersonalDataBodyDto,
} from './dtos/personalData.dto'

@Controller('users/:userId/personal-data')
@UseGuards(AdminProfileGuard)
@UsePipes(ZodValidationPipe)
export class PersonalDataController {
    constructor(
        private createPersonalDataUseCase: CreatePersonalDataUseCase,
        private getPersonalDataUseCase: GetPersonalDataUseCase,
        private updatePersonalDataUseCase: UpdatePersonalDataUseCase,
    ) {}

    @Post()
    async create(@Param() params: PersonalDataParamsDto, @Body() body: CreatePersonalDataBodyDto) {
        const personalData = await this.createPersonalDataUseCase.execute({
            userId: params.userId,
            cpf: body.cpf,
            birthDate: body.birthDate,
            phone: body.phone,
            gender: body.gender as Gender,
        })
        return PersonalDataViewModel.toHTTP(personalData)
    }

    @Get()
    async get(@Param() params: PersonalDataParamsDto) {
        const personalData = await this.getPersonalDataUseCase.execute({ userId: params.userId })
        return PersonalDataViewModel.toHTTP(personalData)
    }

    @Put()
    async update(@Param() params: PersonalDataParamsDto, @Body() body: UpdatePersonalDataBodyDto) {
        await this.updatePersonalDataUseCase.execute({
            userId: params.userId,
            birthDate: body.birthDate,
            phone: body.phone,
            gender: body.gender as Gender | undefined,
        })
        return { message: 'Dados pessoais atualizados com sucesso' }
    }
}
