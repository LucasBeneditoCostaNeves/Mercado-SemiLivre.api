import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/infra/database/database.module'
import { CreateAddressUseCase } from 'src/modules/address/useCases/createAddressUseCase/createAddressUseCase'
import { DeleteAddressUseCase } from 'src/modules/address/useCases/deleteAddressUseCase/deleteAddressUseCase'
import { GetAddressUseCase } from 'src/modules/address/useCases/getAddressUseCase/getAddressUseCase'
import { ListAddressesUseCase } from 'src/modules/address/useCases/listAddressesUseCase/listAddressesUseCase'
import { SetDefaultAddressUseCase } from 'src/modules/address/useCases/setDefaultAddressUseCase/setDefaultAddressUseCase'
import { UpdateAddressUseCase } from 'src/modules/address/useCases/updateAddressUseCase/updateAddressUseCase'
import { AddressController } from './address.controller'

@Module({
    imports: [DatabaseModule],
    controllers: [AddressController],
    providers: [
        CreateAddressUseCase,
        ListAddressesUseCase,
        GetAddressUseCase,
        UpdateAddressUseCase,
        DeleteAddressUseCase,
        SetDefaultAddressUseCase,
    ],
})
export class AddressModule {}
