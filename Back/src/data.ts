import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Martina API Documentation",
            version: "1.0.0"
        },
        components: {
            schemas: {
            Course: {
                type: 'object',
                properties: {
                    id: { type: 'integer', description: 'ID del curso' },
                    title: { type: 'string', description: 'Título del curso' },
                    description: { type: 'string', description: 'Descripción del curso' },
                    modules: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/Module' }
                    }
                }
            },
            Module: {
                type: 'object',
                properties: {
                    title: { type: 'string', description: 'Título del módulo' },
                    lessons: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/Lesson' }
                    }
                }
            },
            Lesson: {
                type: 'object',
                properties: {
                    title: { type: 'string', description: 'Título de la lección' },
                    description: { type: 'string', description: 'Descripción de la lección' },
                    topics: {
                        type: 'array',
                        items: { type: 'string' },
                        description: 'Temas de la lección'
                    },
                    content: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/Content' }
                    }
                }
            },
            Content: {
                type: 'object',
                properties: {
                    type: { type: 'string', enum: ['text', 'video', 'audio'], description: 'Tipo de contenido' },
                    data: { type: 'string', description: 'Datos del contenido (texto o URL)' }
                }
            }
            }
        }
    },
    apis: [`${path.join(__dirname, "./Routes/*")}`],
}

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;