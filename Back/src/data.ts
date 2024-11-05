import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "hola",
            version: "1.0.0"
        }
    },
    apis: [`${path.join(__dirname, "./Routes/*")}`],
}

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;