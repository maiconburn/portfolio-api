
# Portfolio API

This is a NestJS-based API designed to manage portfolio projects. The API is built using modern web technologies such as GraphQL and TypeORM, and it is integrated with SQLite for the database. The goal is to provide a backend for managing project information, including name, description, images, and project links. The API is designed for portfolio websites, making it easier to manage projects dynamically.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **GraphQL**: For handling queries and mutations, providing a flexible way to interact with the API.
- **TypeORM**: An ORM for TypeScript and JavaScript that allows you to work with databases.
- **SQLite**: A lightweight SQL database used for data storage.
- **Apollo Server**: Integrated with GraphQL to handle the server-side logic.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.

## Libraries

### Dependencies

- `@apollo/server`: ^4.11.0
- `@nestjs/apollo`: ^12.2.0
- `@nestjs/common`: ^10.0.0
- `@nestjs/core`: ^10.0.0
- `@nestjs/graphql`: ^12.2.0
- `@nestjs/platform-express`: ^10.0.0
- `@nestjs/typeorm`: ^10.0.2
- `apollo-server-express`: ^3.13.0
- `graphql`: ^16.9.0
- `reflect-metadata`: ^0.2.0
- `rxjs`: ^7.8.1
- `sqlite3`: ^5.1.7
- `typeorm`: ^0.3.20

### Dev Dependencies

- `@nestjs/cli`: ^10.0.0
- `@nestjs/schematics`: ^10.0.0
- `@nestjs/testing`: ^10.0.0
- `@types/express`: ^4.17.17
- `@types/graphql`: ^14.5.0
- `@types/jest`: ^29.5.2
- `@types/node`: ^22.5.1
- `@types/supertest`: ^6.0.0
- `@typescript-eslint/eslint-plugin`: ^8.0.0
- `@typescript-eslint/parser`: ^8.0.0
- `eslint`: ^8.42.0
- `eslint-config-prettier`: ^9.0.0
- `eslint-plugin-prettier`: ^5.0.0
- `jest`: ^29.5.0
- `prettier`: ^3.0.0
- `source-map-support`: ^0.5.21
- `supertest`: ^7.0.0
- `ts-jest`: ^29.1.0
- `ts-loader`: ^9.4.3
- `ts-node`: ^10.9.1
- `tsconfig-paths`: ^4.2.0
- `typescript`: ^5.1.3

## Features

- Manage projects dynamically with GraphQL.
- Store project information, including images, descriptions, and links.
- Utilize SQLite for local data storage.
- Easily extendable to other databases via TypeORM.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **npm or yarn**: Make sure you have either npm or yarn installed for package management.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio-api.git
   cd portfolio-api
   ```

2. Install dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

### Running the API

#### Development Mode

To run the API in development mode with hot-reload:

```bash
npm run start:dev
```

or using yarn:

```bash
yarn start:dev
```

#### Production Mode

To build and run the API in production:

```bash
npm run build
npm run start:prod
```

or using yarn:

```bash
yarn build
yarn start:prod
```

### Running Tests

To run the unit tests:

```bash
npm run test
```

For end-to-end tests:

```bash
npm run test:e2e
```

To watch tests during development:

```bash
npm run test:watch
```

### API Endpoints

The API exposes several GraphQL endpoints for managing projects.

To explore the API via GraphQL Playground, after running the server, open:

```
http://localhost:3000/graphql
```

You can test queries and mutations such as adding new projects, fetching existing ones, and more.

## Project Structure

The project follows a typical NestJS structure with modules, controllers, and services.

```
src/
├── app.module.ts      # Main application module
├── main.ts            # Application entry point
├── projects/          # Project-related modules, services, and entities
│   ├── project.entity.ts  # Project entity (ORM)
│   ├── projects.module.ts # Project module
│   ├── projects.resolver.ts # GraphQL resolver
│   ├── projects.service.ts  # Project service
└── ...
```

## License

This project is licensed under UNLICENSED. See the LICENSE file for more details.

---

Feel free to contribute to this project by submitting issues or pull requests. If you have any questions, feel free to contact me!
