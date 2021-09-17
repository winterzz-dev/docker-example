const express = require('express')
const cors = require('cors')
const {Sequelize, QueryTypes} = require("sequelize");

const main = async () => {
    try {
        const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
            host: '192.168.240.2',
            dialect: 'postgres',
            port: 5432
        });
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        const app = express()
        app.use(cors())
        app.get('/', async function (req, res) {
            const query = await sequelize.query("SELECT * FROM test", { type: QueryTypes.SELECT });
            res.send(query)
        })

        app.listen(3000)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();
