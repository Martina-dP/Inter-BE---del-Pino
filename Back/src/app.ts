import express from 'express' 
import SwaggerUi  from 'swagger-ui-express';
import swaggerSpec from './data';
import router from './Routes/index';
import fs from 'fs/promises';

const PORT = 3001;
const server = express();
server.use(express.json())

server.use('/', router);

server.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerSpec))

export async function readData(filePath: string): Promise<any> {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}

export async function writeData(filePath: string, data: any): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});