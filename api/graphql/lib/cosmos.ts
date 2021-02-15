import { CosmosClient } from '@azure/cosmos'

const client = new CosmosClient(process.env.CosmosConnectionString)
const databaseName = process.env.CosmosDatabaseName

export { client, databaseName }
