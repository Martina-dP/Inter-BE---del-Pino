import express from 'express' 
import SwaggerUi  from 'swagger-ui-express';
import swaggerSpec from './data';
import router from './Routes/index';

const PORT = 3001;
const server = express();
server.use(express.json())

server.use('/', router);

server.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerSpec))

server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});