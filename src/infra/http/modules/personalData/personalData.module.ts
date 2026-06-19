import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/infra/database/database.module'
import { AdminProfileGuard } from 'src/infra/http/modules/auth/guards/adminProfile.guard'
import { CreatePersonalDataUseCase } from 'src/modules/personalData/useCases/createPersonalDataUseCase/createPersonalDataUseCase'
import { GetPersonalDataUseCase } from 'src/modules/personalData/useCases/getPersonalDataUseCase/getPersonalDataUseCase'
import { UpdatePersonalDataUseCase } from 'src/modules/personalData/useCases/updatePersonalDataUseCase/updatePersonalDataUseCase'
import { MePersonalDataController } from './mePersonalData.controller'
import { PersonalDataController } from './personalData.controller'

@Module({
    imports: [DatabaseModule],
    controllers: [PersonalDataController, MePersonalDataController],
    providers: [
        AdminProfileGuard,
        CreatePersonalDataUseCase,
        GetPersonalDataUseCase,
        UpdatePersonalDataUseCase,
    ],
})
export class PersonalDataModule {}
