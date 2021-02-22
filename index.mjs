import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.get('/', (req, res) => 
    res.sendFile(__dirname +'/app/index.html')
);



const port = 3000;
app.listen(port, () => console.log('Server start on'));