## CONTEXTO DO PROJETO

Estou desenvolvendo uma aplicação com:
- Framework: Nest.js
- Arquitetura: Clean Architecture em camadas (domain, application, infrastructure, presentation)
- Paradigma: Clean Code + DDD + TDD
- Linguagem: TypeScript
- Lib de testes: Jest
- Outras libs relevantes: Prisma

## ESTRUTURA DE PASTAS

Mercado-SemiLivre.api/
├── prisma/                        # Schema e migrations do banco de dados
├── src/
│   ├── domain/
│   │   └── errors/
│   │       ├── product/           # Erros de domínio de produto
│   │       └── user/              # Erros de domínio de usuário
│   │
│   ├── modules/                   # Camada de domínio / casos de uso
│   │   ├── auth/
│   │   │   ├── models/
│   │   │   ├── strategies/
│   │   │   └── useCases/
│   │   │       ├── loginUseCase/
│   │   │       └── validateUserUseCase/
│   │   ├── categoryProducts/
│   │   │   ├── entities/
│   │   │   ├── repositories/      # Interfaces de repositório
│   │   │   └── useCases/
│   │   │       ├── createCategoryProductUseCase/
│   │   │       └── listCategoryProductUseCase/
│   │   ├── product/
│   │   │   ├── entities/
│   │   │   ├── repositories/
│   │   │   └── useCases/
│   │   │       ├── createProductUseCase/
│   │   │       ├── listManyProductUseCase/
│   │   │       └── updateProductUseCase/
│   │   ├── profile/
│   │   │   ├── entities/
│   │   │   ├── repositories/
│   │   │   └── useCases/
│   │   │       ├── createProfileUseCase/
│   │   │       └── listManyProfileUseCase/
│   │   └── user/
│   │       ├── entities/
│   │       ├── factories/
│   │       ├── policies/
│   │       ├── repositories/
│   │       └── useCases/
│   │           ├── createUserUseCase/
│   │           ├── listUserUseCase/
│   │           └── updateUserUseCase/
│   │
│   ├── infra/                     # Camada de infraestrutura
│   │   ├── database/
│   │   │   └── prisma/
│   │   │       ├── mappers/       # Conversão entre entidades e modelos Prisma
│   │   │       └── repositories/  # Implementações concretas dos repositórios
│   │   └── http/
│   │       ├── errors/
│   │       └── modules/           # Controllers NestJS + DTOs por módulo
│   │           ├── auth/
│   │           │   ├── decorators/
│   │           │   ├── dtos/
│   │           │   ├── guards/
│   │           │   ├── middleware/
│   │           │   └── models/
│   │           ├── categoryProduct/
│   │           │   ├── dtos/
│   │           │   ├── schemas/   # Schemas Zod
│   │           │   └── viewModel/
│   │           ├── product/
│   │           │   ├── dtos/
│   │           │   ├── schemas/
│   │           │   └── viewModel/
│   │           ├── profile/
│   │           │   ├── dtos/
│   │           │   ├── schemas/
│   │           │   └── viewModel/
│   │           └── user/
│   │               ├── dtos/
│   │               ├── schemas/
│   │               └── viewModel/
│   │
│   └── utils/
│
└── test/                          # Testes e2e

## O QUE QUERO

Gere os testes seguindo estas diretrizes obrigatórias:

1. TDD mindset: testes descrevem comportamento, não implementação
2. Nomenclatura: use padrão "dado X, quando Y, então Z" nos describes/its
3. Cobertura mínima: caminho feliz, edge cases, erros esperados
4. Mocks: faça mock apenas de dependências externas (DB, APIs, serviços); nunca mocke a própria unidade testada
5. Isolamento por camada:
   - Domain: zero mocks, lógica pura
   - Application (use cases): mock dos repositories/services via interface
   - Infrastructure: testes de integração ou use test doubles reais
   - Presentation: React Testing Library, teste comportamento do usuário
6. Sem testes de implementação: não teste métodos privados nem estrutura interna
7. Um assert principal por teste (múltiplos só se logicamente acoplados)
8. Factories/builders para criação de entidades de teste reutilizáveis

## FORMATO DE SAÍDA

- Arquivo de teste completo, pronto para rodar
- Comentários explicando decisões não óbvias
- Se necessário, crie também o arquivo de factory/stub separado
- Aponte ao final qualquer cenário que não conseguiu cobrir e por quê

## INTEGRAÇÃO DE FRETE (Melhor Envio)

O cálculo de frete usa a API da Melhor Envio (`MELHOR_ENVIO_TOKEN`, `MELHOR_ENVIO_BASE_URL`, `SHIPPING_ORIGIN_CEP` no `.env`). Pré-requisito: criar uma conta de desenvolvedor no sandbox (`https://sandbox.melhorenvio.com.br`) e gerar um token de aplicação — sem token válido, o endpoint `POST /shipping/quote` retorna 503. Em produção, a conta precisa de CNPJ/CPF verificado junto à Melhor Envio.

**NUNCA implementar funcionalidades da Melhor Envio que gerem custo real**, como geração/compra de etiqueta de postagem (`shipping-generate`, `/me/shipment/checkout`, `/me/shipment/generate`), impressão de etiqueta paga ou qualquer chamada que debite saldo da carteira Melhor Envio. Apenas cotação (`shipping-calculate` / `/shipment/calculate`) é permitida — é gratuita e não gera cobrança. Se uma tarefa pedir compra/geração de frete, sinalizar o risco de custo antes de implementar, mesmo em ambiente de sandbox.