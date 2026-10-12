import pino from 'pino';

const level = process.env.LEVEL || 'error';
const NODE_ENV = process.env.NODE_ENV || 'development';

export const Logger = pino({
    base: {
        service: 'marketplace',
        env: NODE_ENV,
    }, 
    level, 
    transport: {
        targets: [
            {
                target: 'pino-pretty',
            },
            {
                target: 'pino/file',
                options: { destination: './logs/app.log', mkdir: true },
            },
        ],
    },
});