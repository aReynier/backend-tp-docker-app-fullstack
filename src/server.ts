import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(cors())

app.use(bodyParser.json());

app.get('/server/time', async (req, res, next) => {
    res.json({ time: new Date().toISOString() });
  });

app.get('/hello/:name', async (req, res, next) => {
    const { name } = req.params;
    res.json({ message: `Hello ${name}` });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})