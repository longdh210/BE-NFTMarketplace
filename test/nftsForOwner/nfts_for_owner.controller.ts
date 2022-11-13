import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UsecasesProxyModule } from '../../usecases-proxy/usecases-proxy.module';
import { NftsForOwnerPresenter } from './nfts_for_owner.presenter';
// import { ApiResponseType } from '../../common/swagger/response.decorator';
import { getNftsForOwnerUseCases } from '../../../nftsForOwner/getNftsForOwners.usecases';
import { AddNftsForOwnerDto, UpdateNftsForOwnerDto } from './nfts_for_owner.dto';
import { addNftsForOwnerUseCases } from '../../../nftsForOwner/addNftsForOwner.usecases';

@Controller('nftsforowner')
export class NftsForOwnerController {
    constructor(
        // @Inject(UsecasesProxyModule.GET_TODO_USECASES_PROXY)
        // private readonly getTodoUsecaseProxy: UseCaseProxy<GetTodoUseCases>,
        @Inject(UsecasesProxyModule.GET_TODOS_USECASES_PROXY)
        private readonly getAllTodoUsecaseProxy: UseCaseProxy<getNftsForOwnerUseCases>,
        // @Inject(UsecasesProxyModule.PUT_TODO_USECASES_PROXY)
        // private readonly updateTodoUsecaseProxy: UseCaseProxy<updateTodoUseCases>,
        // @Inject(UsecasesProxyModule.DELETE_TODO_USECASES_PROXY)
        // private readonly deleteTodoUsecaseProxy: UseCaseProxy<deleteTodoUseCases>,
        @Inject(UsecasesProxyModule.POST_TODO_USECASES_PROXY)
        private readonly addTodoUsecaseProxy: UseCaseProxy<addNftsForOwnerUseCases>,
    ) { }

    @Get('me')
    async getNftsForOwners() {
        const todos = await this.getAllTodoUsecaseProxy.getInstance().execute();
        return todos.map((todo) => new NftsForOwnerPresenter(todo));
    }

    @Post(':address')
    async addTodo(@Param() params) {
        const nftsForOwnerCreated = await this.addTodoUsecaseProxy.getInstance().execute(params.address);
        return new NftsForOwnerPresenter(nftsForOwnerCreated);
    }
}
