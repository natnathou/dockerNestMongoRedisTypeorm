import { Connection, createConnection } from 'typeorm';
import { AuroraDataApiConnectionOptions } from 'typeorm/driver/aurora-data-api/AuroraDataApiConnectionOptions';
import * as config from '../ormconfig.js';

let connection: Connection;
jest.setTimeout(30000);

global.beforeEach(async () => {
    connection = await createConnection(config as unknown as AuroraDataApiConnectionOptions);
    const entities = connection.entityMetadatas;

    for (const entity of entities) {
        const repository = connection.getRepository(entity.name);
        await repository.delete({});
    }

    await connection.close();
});
