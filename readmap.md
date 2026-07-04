finance-api/
│
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
│
├── src/
│   │
│   ├── app.module.ts
│   ├── main.ts
│   │
│   ├── config/
│   │   ├── env.config.ts
│   │   ├── jwt.config.ts
│   │   ├── database.config.ts
│   │   └── swagger.config.ts
│   │
│   ├── common/
│   │   ├── decorators/
│   │   ├── dto/
│   │   ├── enums/
│   │   ├── exceptions/
│   │   ├── filters/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── interfaces/
│   │   ├── pipes/
│   │   ├── services/
│   │   ├── types/
│   │   ├── utils/
│   │   └── constants/
│   │
│   ├── infrastructure/
│   │   ├── database/
│   │   │   ├── prisma.module.ts
│   │   │   ├── prisma.service.ts
│   │   │   └── repositories/
│   │   │
│   │   ├── cache/
│   │   ├── logger/
│   │   ├── mail/
│   │   └── storage/
│   │
│   ├── modules/
│   │
│   │   ├── auth/
│   │   │
│   │   │   ├── application/
│   │   │   │   ├── dto/
│   │   │   │   ├── use-cases/
│   │   │   │   │   ├── login.use-case.ts
│   │   │   │   │   ├── refresh-token.use-case.ts
│   │   │   │   │   ├── logout.use-case.ts
│   │   │   │   │   └── register.use-case.ts
│   │   │   │   └── services/
│   │   │   │
│   │   │   ├── domain/
│   │   │   │   ├── entities/
│   │   │   │   ├── repositories/
│   │   │   │   └── interfaces/
│   │   │   │
│   │   │   ├── infrastructure/
│   │   │   │   ├── repositories/
│   │   │   │   └── strategies/
│   │   │   │
│   │   │   ├── presentation/
│   │   │   │   ├── controllers/
│   │   │   │   ├── responses/
│   │   │   │   └── requests/
│   │   │   │
│   │   │   └── auth.module.ts
│   │   │
│   │   ├── users/
│   │   │
│   │   │   ├── application/
│   │   │   │   ├── dto/
│   │   │   │   ├── use-cases/
│   │   │   │   └── services/
│   │   │   │
│   │   │   ├── domain/
│   │   │   │   ├── entities/
│   │   │   │   ├── repositories/
│   │   │   │   └── value-objects/
│   │   │   │
│   │   │   ├── infrastructure/
│   │   │   │   └── repositories/
│   │   │   │
│   │   │   ├── presentation/
│   │   │   │   ├── controllers/
│   │   │   │   └── responses/
│   │   │   │
│   │   │   └── users.module.ts
│   │   │
│   │   ├── roles/
│   │   │
│   │   │   ├── application/
│   │   │   ├── domain/
│   │   │   ├── infrastructure/
│   │   │   ├── presentation/
│   │   │   └── roles.module.ts
│   │   │
│   │   └── permissions/
│   │       ├── application/
│   │       ├── domain/
│   │       ├── infrastructure/
│   │       ├── presentation/
│   │       └── permissions.module.ts
│   │
│   └── shared/
│       ├── decorators/
│       ├── guards/
│       ├── interfaces/
│       ├── policies/
│       └── permissions/
│
├── test/
│
├── .env
├── .env.example
├── package.json
├── tsconfig.json
└── nest-cli.json