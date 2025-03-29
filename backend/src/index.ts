import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
// import mysql from 'mysql2';
import path from "path";
import { getImageBase64, getSimilarity } from './evaluator';
import { generateImage } from './generate';
import { scoreDatum } from './types';

dotenv.config();


const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json())
// console.log(process.env.MYSQL_USER);
// console.log(process.env.MYSQL_PASSWORD);
// console.log(process.env.MYSQL_HOST);
// console.log(process.env.MYSQL_PORT);
// console.log(process.env.MYSQL_DATABASE);


// const db = mysql.createConnection({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   port: parseInt(process.env.MYSQL_PORT || '3307', 10),
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err.stack);
//     return;
//   }
//   console.log('Connected to MySQL as ID ' + db.threadId);
// });



// Example usage:
// const imagePath = path.join(__dirname, "assets", "bev_logo.png");
// const textPrompts = [
//   "I am a graphic designer designing a logo for my company that is selling beverages can you generate an image showing a lady laying down on the beach drinking beverages and showing the brand near the screen", 
//   "Beverage logo showing a lady laying down on the beach drinking beverages and showing the brand near the screen",
//   "Beverage logo"
// ];


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.get('/api/images/:id', (req: Request, res: Response) => {
  const imagePath = path.join(__dirname, "assets", "images", req.params.id + ".png");
  const image = getImageBase64(imagePath);
  res.json({
    image: image
  })
})

app.post('/api/prompts', async (req: Request, res: Response) =>{
  const prompt1: string = req.body.prompt1;
  const prompt2: string = req.body.prompt2;
  const imageId: string = req.body.imageId;

  const imagePath = path.join(__dirname, "assets", "images", imageId + ".png");
  const image = getImageBase64(imagePath);

  const scoreData: scoreDatum[] | number = await getSimilarity(image, [prompt1, prompt2]);

  if (typeof scoreData == "number"){
    res.status(scoreData);
    return
  }

  const score1 = scoreData[0].score;
  const score2 = scoreData[1].score;
  
  const genImage1Promise = generateImage(prompt1)
  const genImage2Promise = generateImage(prompt2);

  Promise.all([genImage1Promise, genImage2Promise]).then((images) => {
    res.json({
      score1: score1,
      score2: score2,
      genImage1: images[0],
      genImage2: images[1]
    })
  })
})

// app.get("/api-test", async (req: Request, res: Response) => {
//   const data = await getSimilarity(getImageBase64(imagePath), textPrompts);
//   res.send(data)
// })

// app.get('/users', (req, res) => {
//   db.query('SELECT * FROM users', (err, results) => {
//     if (err) {
//       res.status(500).send({ message: 'Database query failed', error: err });
//     } else {
//       res.json(results);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
