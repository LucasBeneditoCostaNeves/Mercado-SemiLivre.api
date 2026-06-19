import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import { CreateAddressUseCase } from 'src/modules/address/useCases/createAddressUseCase/createAddressUseCase'
import { DeleteAddressUseCase } from 'src/modules/address/useCases/deleteAddressUseCase/deleteAddressUseCase'
import { GetAddressUseCase } from 'src/modules/address/useCases/getAddressUseCase/getAddressUseCase'
import { ListAddressesUseCase } from 'src/modules/address/useCases/listAddressesUseCase/listAddressesUseCase'
import { SetDefaultAddressUseCase } from 'src/modules/address/useCases/setDefaultAddressUseCase/setDefaultAddressUseCase'
import { UpdateAddressUseCase } from 'src/modules/address/useCases/updateAddressUseCase/updateAddressUseCase'
import { AddressViewModel } from './viewModel/AddressViewModel'
import {
    AddressParamsDto,
    AddressUserParamsDto,
    CreateAddressBodyDto,
    UpdateAddressBodyDto,
} from './dtos/address.dto'

@Controller('users/:userId/addresses')
@UsePipes(ZodValidationPipe)
export class AddressController {
    constructor(
        private createAddressUseCase: CreateAddressUseCase,
        private listAddressesUseCase: ListAddressesUseCase,
        private getAddressUseCase: GetAddressUseCase,
        private updateAddressUseCase: UpdateAddressUseCase,
        private deleteAddressUseCase: DeleteAddressUseCase,
        private setDefaultAddressUseCase: SetDefaultAddressUseCase,
    ) {}

    @Post()
    async create(@Param() params: AddressUserParamsDto, @Body() body: CreateAddressBodyDto) {
        const address = await this.createAddressUseCase.execute({ userId: params.userId, ...body })
        return AddressViewModel.toHTTP(address)
    }

    @Get()
    async listMany(@Param() params: AddressUserParamsDto) {
        const addresses = await this.listAddressesUseCase.execute({ userId: params.userId })
        return addresses.map(AddressViewModel.toHTTP)
    }

    @Get(':id')
    async getOne(@Param() params: AddressParamsDto) {
        const address = await this.getAddressUseCase.execute({ id: params.id, userId: params.userId })
        return AddressViewModel.toHTTP(address)
    }

    @Put(':id')
    async update(@Param() params: AddressParamsDto, @Body() body: UpdateAddressBodyDto) {
        await this.updateAddressUseCase.execute({ id: params.id, userId: params.userId, ...body })
        return { message: 'Endereço atualizado com sucesso' }
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param() params: AddressParamsDto) {
        await this.deleteAddressUseCase.execute({ id: params.id, userId: params.userId })
    }

    @Patch(':id/default')
    async setDefault(@Param() params: AddressParamsDto) {
        await this.setDefaultAddressUseCase.execute({ id: params.id, userId: params.userId })
        return { message: 'Endereço padrão definido com sucesso' }
    }
}
