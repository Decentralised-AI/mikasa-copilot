import app from "./app";

const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 5000;

app.listen({ port: FASTIFY_PORT });

console.log(`🚀  Fastify server running on port ${FASTIFY_PORT}`);
