import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/products.routes.js';

const port = process.env.PORT || 3000;
const host = 'localhost';

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

app.use('/api/products', routes);

app.listen(port, host, () => {
  // console.log(`Server started at ${host} port ${port}`);
});

export default app;