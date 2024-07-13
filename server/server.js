const app = require('./src/app')
const connectDB = require('./src/config/database');
const { PORT } = require('./src/config/env');



connectDB().then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})

process.on('uncaughtException', (err) => {
    console.log('uncaughtException', err);
    process.exit(1)
})

process.on('unhandledRejection', (err) => {
    console.log('unhandledRejection', err);
    process.exit(1)
})
