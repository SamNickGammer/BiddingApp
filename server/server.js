const app = require('./src/app')

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

process.on('uncaughtException', (err) => {
    console.log('uncaughtException', err);
    process.exit(1)
})

process.on('unhandledRejection', (err) => {
    console.log('unhandledRejection', err);
    process.exit(1)
})
