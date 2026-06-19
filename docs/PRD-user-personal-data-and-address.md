# PRD — Dados Pessoais e Endereço do Usuário

**Versão:** 1.0  
**Data:** 2026-06-18  
**Status:** Draft  
**Autor:** Lucas  

---

## 1. Contexto

O Mercado SemiLivre é uma plataforma de marketplace para compra e venda de produtos semi-novos. Atualmente, o cadastro de usuário captura apenas dados de autenticação (nome, e-mail, senha) e perfil de acesso. Para avançar para operações de compra, venda e entrega, a plataforma precisa coletar **dados pessoais** (identidade e contato) e **endereços de entrega** dos usuários.

---

## 2. Problema

Sem CPF, data de nascimento, telefone e endereço, a plataforma não consegue:

- Verificar a identidade do usuário (KYC básico)
- Calcular frete e direcionar entregas
- Emitir notas fiscais e documentos legais
- Cumprir requisitos da LGPD com isolamento adequado de dados sensíveis

---

## 3. Objetivos

- Coletar dados pessoais do usuário em etapa dedicada do onboarding
- Permitir que um usuário cadastre um ou mais endereços de entrega
- Manter os dados sensíveis (CPF, data de nascimento) isolados da entidade de autenticação
- Garantir conformidade com a LGPD desde a modelagem

---

## 4. Fora de Escopo

- Validação de CPF junto à Receita Federal
- Verificação de endereço via Correios (além do preenchimento por CEP)
- Gerenciamento de múltiplos endereços na UI (v1 apenas endereço padrão)
- Autenticação em dois fatores via telefone

---

## 5. Requisitos Funcionais

### 5.1 Dados Pessoais (`PersonalData`)

| ID | Requisito |
|----|-----------|
| RF-01 | O sistema deve permitir que um usuário cadastre seus dados pessoais após a criação da conta |
| RF-02 | Cada usuário deve ter no máximo um registro de dados pessoais (relação 1:1) |
| RF-03 | O CPF deve ser único na plataforma |
| RF-04 | Os campos CPF, data de nascimento, telefone e gênero são obrigatórios |
| RF-05 | O sistema deve validar o formato do CPF (000.000.000-00) antes de persistir |
| RF-06 | O sistema deve validar o formato do telefone celular ((00) 00000-0000) |
| RF-07 | Ao deletar um usuário, seus dados pessoais devem ser deletados em cascata |

### 5.2 Endereço (`Address`)

| ID | Requisito |
|----|-----------|
| RF-08 | O sistema deve permitir que um usuário cadastre um ou mais endereços |
| RF-09 | Cada endereço deve ter CEP, estado, cidade, logradouro e número obrigatórios |
| RF-10 | O complemento é opcional |
| RF-11 | Um endereço pode ser marcado como padrão (`isDefault: true`) |
| RF-12 | Apenas um endereço pode ser o padrão por usuário |
| RF-13 | Ao deletar um usuário, todos os seus endereços devem ser deletados em cascata |
| RF-14 | O sistema deve permitir listar todos os endereços de um usuário |

---

## 6. Requisitos Não Funcionais

| ID | Requisito |
|----|-----------|
| RNF-01 | CPF deve ser armazenado com hash ou criptografia (LGPD — dado sensível) |
| RNF-02 | A API deve retornar CPF mascarado (ex: `***.456.789-**`) nas respostas |
| RNF-03 | Dados pessoais e endereços devem ser excluídos em cascata ao deletar o usuário |
| RNF-04 | As rotas de dados pessoais devem exigir autenticação JWT |
| RNF-05 | Validações de formato devem ocorrer na camada de apresentação (Zod schema) |

---

## 7. Modelo de Dados

### 7.1 Entidade `PersonalData`

```
PersonalData
├── id          String    (UUID, PK)
├── cpf         String    (único)
├── birthDate   DateTime
├── phone       String
├── gender      String    (enum: MALE | FEMALE | OTHER | PREFER_NOT_TO_SAY)
├── userId      String    (FK → User, único)
├── createdAt   DateTime
└── updatedAt   DateTime
```

**Relação:** `User` 1 ──── 1 `PersonalData`

---

### 7.2 Entidade `Address`

```
Address
├── id          String    (UUID, PK)
├── cep         String
├── state       String    (sigla, ex: SP)
├── city        String
├── street      String
├── number      String
├── complement  String?   (opcional)
├── isDefault   Boolean   (default: false)
├── userId      String    (FK → User)
├── createdAt   DateTime
└── updatedAt   DateTime
```

**Relação:** `User` 1 ──── N `Address`

---

### 7.3 Diagrama de Relações (atualizado)

```
Profile ──(1:N)── User ──(1:1)── PersonalData
                    └──(1:N)── Address
                    └──(1:N)── Product ──(1:N)── ProductVariation
                                  └──(N:1)── CategoryProducts
```

---

## 8. Endpoints da API

### PersonalData

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/users/:userId/personal-data` | Cadastra dados pessoais | JWT |
| GET | `/users/:userId/personal-data` | Retorna dados pessoais | JWT |
| PUT | `/users/:userId/personal-data` | Atualiza dados pessoais | JWT |

### Address

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/users/:userId/addresses` | Cadastra novo endereço | JWT |
| GET | `/users/:userId/addresses` | Lista todos os endereços | JWT |
| GET | `/users/:userId/addresses/:id` | Retorna um endereço | JWT |
| PUT | `/users/:userId/addresses/:id` | Atualiza um endereço | JWT |
| DELETE | `/users/:userId/addresses/:id` | Remove um endereço | JWT |
| PATCH | `/users/:userId/addresses/:id/default` | Define endereço padrão | JWT |

---

## 9. Casos de Uso

| ID | Caso de Uso | Ator |
|----|-------------|------|
| UC-01 | Cadastrar dados pessoais | Usuário autenticado |
| UC-02 | Atualizar dados pessoais | Usuário autenticado |
| UC-03 | Consultar dados pessoais | Usuário autenticado |
| UC-04 | Cadastrar endereço | Usuário autenticado |
| UC-05 | Listar endereços | Usuário autenticado |
| UC-06 | Atualizar endereço | Usuário autenticado |
| UC-07 | Remover endereço | Usuário autenticado |
| UC-08 | Definir endereço padrão | Usuário autenticado |

---

## 10. Critérios de Aceite

### PersonalData
- [ ] Usuário consegue cadastrar dados pessoais via `POST /users/:userId/personal-data`
- [ ] Tentativa de cadastrar segundo registro retorna erro `409 Conflict`
- [ ] CPF duplicado retorna erro `409 Conflict`
- [ ] CPF inválido retorna erro `422 Unprocessable Entity`
- [ ] Resposta nunca expõe o CPF completo

### Address
- [ ] Usuário consegue cadastrar múltiplos endereços
- [ ] Definir um endereço como padrão remove o `isDefault` do anterior
- [ ] Deletar usuário remove todos os endereços em cascata
- [ ] Tentativa de acessar endereço de outro usuário retorna `403 Forbidden`

---

## 11. Plano de Implementação

```
Fase 1 — Domínio
├── Entidade PersonalData
├── Entidade Address
├── Interface IPersonalDataRepository
└── Interface IAddressRepository

Fase 2 — Casos de Uso
├── CreatePersonalDataUseCase
├── UpdatePersonalDataUseCase
├── GetPersonalDataUseCase
├── CreateAddressUseCase
├── ListAddressesUseCase
├── UpdateAddressUseCase
├── DeleteAddressUseCase
└── SetDefaultAddressUseCase

Fase 3 — Infraestrutura
├── Migration Prisma (PersonalData + Address)
├── PrismaPersonalDataRepository
├── PrismaAddressRepository
├── PersonalDataMapper
└── AddressMapper

Fase 4 — Apresentação
├── DTOs + Schemas Zod
├── ViewModels
└── Controllers (PersonalDataController, AddressController)

Fase 5 — Testes
├── Testes unitários (entidades e use cases)
└── Testes e2e (endpoints)
```

---

## 12. Dependências e Riscos

| Item | Tipo | Impacto | Mitigação |
|------|------|---------|-----------|
| LGPD — armazenamento de CPF | Risco legal | Alto | Armazenar com criptografia desde v1 |
| Um endereço padrão por usuário | Consistência | Médio | Garantir invariante no use case, não no DB |
| Preenchimento de endereço por CEP | Dependência externa | Baixo | Via API ViaCEP no frontend (fora de escopo da API) |
