import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import type { AuthenticatedUser } from 'src/infra/http/modules/auth/models/authRequestModel'
import { CreateAddressUseCase } from 'src/modules/address/useCases/createAddressUseCase/createAddressUseCase'
import { DeleteAddressUseCase } from 'src/modules/address/useCases/deleteAddressUseCase/deleteAddressUseCase'
import { GetAddressUseCase } from 'src/modules/address/useCases/getAddressUseCase/getAddressUseCase'
import { ListAddressesUseCase } from 'src/modules/address/useCases/listAddressesUseCase/listAddressesUseCase'
import { SetDefaultAddressUseCase } from 'src/modules/address/useCases/setDefaultAddressUseCase/setDefaultAddressUseCase'
import { UpdateAddressUseCase } from 'src/modules/address/useCases/updateAddressUseCase/updateAddressUseCase'
import { CurrentUser } from '../auth/decorators/currentUser.decorator'
import { AddressIdParamDto, CreateAddressBodyDto, UpdateAddressBodyDto } from './dtos/address.dto'
import { AddressViewModel } from './viewModel/AddressViewModel'

@Controller('me/addresses')
@UsePipes(ZodValidationPipe)
export class MeAddressController {
    constructor(
        private createAddressUseCase: CreateAddressUseCase,
        private listAddressesUseCase: ListAddressesUseCase,
        private getAddressUseCase: GetAddressUseCase,
        private updateAddressUseCase: UpdateAddressUseCase,
        private deleteAddressUseCase: DeleteAddressUseCase,
        private setDefaultAddressUseCase: SetDefaultAddressUseCase,
    ) {}

    @Post()
    async create(@CurrentUser() user: AuthenticatedUser, @Body() body: CreateAddressBodyDto) {
        const address = await this.createAddressUseCase.execute({ userId: user.id, ...body })
        return AddressViewModel.toHTTP(address)
    }

    @Get()
    async listMany(@CurrentUser() user: AuthenticatedUser) {
        const addresses = await this.listAddressesUseCase.execute({ userId: user.id })
        return addresses.map(AddressViewModel.toHTTP)
    }

    @Get(':id')
    async getOne(@CurrentUser() user: AuthenticatedUser, @Param() params: AddressIdParamDto) {
        const address = await this.getAddressUseCase.execute({ id: params.id, userId: user.id })
        return AddressViewModel.toHTTP(address)
    }

    @Put(':id')
    async update(
        @CurrentUser() user: AuthenticatedUser,
        @Param() params: AddressIdParamDto,
        @Body() body: UpdateAddressBodyDto,
    ) {
        await this.updateAddressUseCase.execute({ id: params.id, userId: user.id, ...body })
        return { message: 'Endereço atualizado com sucesso' }
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@CurrentUser() user: AuthenticatedUser, @Param() params: AddressIdParamDto) {
        await this.deleteAddressUseCase.execute({ id: params.id, userId: user.id })
    }

    @Patch(':id/default')
    async setDefault(@CurrentUser() user: AuthenticatedUser, @Param() params: AddressIdParamDto) {
        await this.setDefaultAddressUseCase.execute({ id: params.id, userId: user.id })
        return { message: 'Endereço padrão definido com sucesso' }
    }
}
