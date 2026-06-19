import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/infra/database/database.module'
import { CreatePersonalDataUseCase } from 'src/modules/personalData/useCases/createPersonalDataUseCase/createPersonalDataUseCase'
import { GetPersonalDataUseCase } from 'src/modules/personalData/useCases/getPersonalDataUseCase/getPersonalDataUseCase'
import { UpdatePersonalDataUseCase } from 'src/modules/personalData/useCases/updatePersonalDataUseCase/updatePersonalDataUseCase'
import { PersonalDataController } from './personalData.controller'

@Module({
    imports: [DatabaseModule],
    controllers: [PersonalDataController],
    providers: [CreatePersonalDataUseCase, GetPersonalDataUseCase, UpdatePersonalDataUseCase],
})
export class PersonalDataModule {}
