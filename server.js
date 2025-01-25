const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Enable Cross-Origin Resource Sharing (CORS) to allow React to access the API
app.use(cors());

// Sample tour data
const tours = [
  {
    "id": "rec6d6T3q5EBIdCfD",
    "name": "Best of Paris in 7 Days Tour",
    "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas...",
    "image": "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
    "price": "1,995"
  },
  {
    "id": "recIwxrvU9HfJR3B4",
    "name": "Best of Ireland in 14 Days Tour",
    "info": "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites...",
    "image": "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
    "price": "3,895"
  },
  {
    "id": "recJLWcHScdUtI3ny",
    "name": "Best of Salzburg & Vienna in 8 Days Tour",
    "info": "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria...",
    "image": "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
    "price": "2,695"
  },
  {
    "id": "recK2AOoVhIHPLUwn",
    "name": "Best of Rome in 7 Days Tour",
    "info": "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style...",
    "image": "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
    "price": "2,095"
  },
  {
    "id": "receAEzz86KzW2gvH",
    "name": "Best of Poland in 10 Days Tour",
    "info": "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland...",
    "image": "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
    "price": "2,595"
  }
];

// API route to get tours data
app.get("/api/tours", (req, res) => {
  res.json(tours); // Send the tours data as JSON
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
