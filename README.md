# GovTech Assessment

This is a Unit Nukleus GovTech, Kem Digital Assessment for Software Developer roles.

This would be the entry point for all of my documentation.

## Introduction

This repositories serves as the Domain and Migrations packages for this assessment. Any database model needs to be generated or updated using this repositories.

**This repositories is not a back-end code but rather act as seperate repositories to generate schema in 1 place.**

## Documentation

### [Demo Link](https://nukleus-assessment.web3ramen.com/)

[API Url](https://nukleus-backend.onrender.com)

[Figma Documentation](https://www.figma.com/file/AE6vCE7lwxDaMI32c0nVWk/%5BFarhan%5D-GovTech-Assessment-Brainstorm-Board?type=whiteboard&t=ewtZZiMzR75Sc1k7-1)

[Migrations-Domain Repositories](https://github.com/paanjoe/nukleus-domain)

[Backend-Service Repositories](https://github.com/paanjoe/nukleus-backend)

[Frontend Repositories](https://github.com/paanjoe/nukleus-frontend)

[API Documentation](https://github.com/paanjoe/nukleus-backend/tree/main/test-cases)

## Tech Stack | Framework

#### Nukleus-Domain

- **ORM Framework:** PrismaORM
- **Serverless:** Supabase
- **Database Engine:** Postgres
- **CI/CD:** GitHub Actions --> Just a Migrations Checker is in sync with the Database

#### Nukleus-Backend

- **ORM Model:** PrismaORM
- **Backend Framework:** ExpressJS
- **Api Documentation:** Swagger
- **CI/CD:** GitHub Actions
- **Infrastructure:** Render.com
- **Unit Test:** Jest & Supertest

#### Nukleus-Frontend

- **Framework:** React Next.js
- **UI Kit:** TailwindCSS
- **Infrastructure:** Vercel.com

#### Deployment Infrastructure

- **Host for Backend:** Render.com
- **Host for Frontend:** Vercel.com
- **CI/CD:** GitHub Actions

## Environment Variables - Nukleus-Domain

To run this Nukleus Domain, you need this `.env` file in the root of the project. You can refer the .env.example file.

```
    SUPABASEURL=xxxxxxxxxxxxxxx
    SUPABASEKEY=xxxxxxxxxxxxxxx
    SUPABASEHOST=xxxxxxxxxxxxxxx
    SUPABASEPORT=xxxxxxxxxxxxxxx
    SUPABASEUSER=xxxxxxxxxxxxxxx
    SUPABASEPASSWORD=xxxxxxxxxxxxxxx
    SUPABASEDATABASE=xxxxxxxxxxxxxxx
    DATABASE_URL=xxxxxxxxxxxxxxx
```

## Deployment | Command

To run this project locally. Please use the command below whenever makes sense:

Cloning this repositories:

```bash
  git clone https://github.com/paanjoe/nukleus-domain.git
```

Installing Packages

```bash
  npm i
```

Pull Db Schema

```bash
  npm run db-pull
```

Generate Prisma Client

```bash
  npm run generate
```

Check Migrations Status

```bash
  npm run status
```

Performing Migrations to DB Schema

** Note: This already run seeder after successful migrations **

```bash
  npm run migrate
```

Manual Seeder Command:

```bash
  npm run seed
```

## License

[MIT License](https://choosealicense.com/licenses/mit/)
