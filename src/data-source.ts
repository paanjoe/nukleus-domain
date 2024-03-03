import "reflect-metadata"
import { DataSource } from "typeorm"

const databaseConfig = {
    host: process.env.SUPABASEHOST || undefined,
    port: process.env.SUPABASEPORT || undefined,
    username: process.env.SUPABASEUSER || undefined,
    password: process.env.SUPABASEPASSWORD || undefined,
    database: process.env.SUPABASEDATABASE || undefined,
};

function createDataSource() {
    if (Object.values(databaseConfig).every(value => value !== undefined)) {
        return new DataSource({
            type: 'postgres',
            host: databaseConfig.host,
            port: Number(databaseConfig.port),
            username: databaseConfig.username,
            password: databaseConfig.password,
            database: databaseConfig.database,
            synchronize: true,
            logging: false,
            entities: [],
            migrations: [],
            subscribers: [],
        });
    } else {
        console.error('One or more environment variables are undefined');
        process.exit(1);
    }
}

export const AppDataSource = createDataSource();