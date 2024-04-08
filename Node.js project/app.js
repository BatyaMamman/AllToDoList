const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { getMyApps } = require('./Func');

app.use(bodyParser.json())

app.get('/', async (req, res) => {
    const render = await getMyApps()
    //send - מה שיחזור ויוצג על הדפדפן / לצד לקוח
    res.status(200).send(render)
})



///////////////
//  const axios = require('axios');

// async function getMyApps(renderToken) {
//   try {
//     // קריאה ל-API של Render כדי לקבל את רשימת האפליקציות

   
//     //  --header 'Authorization: Bearer {{render_api_token_goes_here}}
//     const response = await axios.get('https://api.render.com/v1/services?limit=20', {
//       headers: {
//         'Authorization': `Bearer ${renderToken}`,
//         'Accept': 'application/json'
//       }
//     });
//     // החזרת רשימת האפליקציות מתוך תשובת ה-API
//     return response.data;
//   } catch (error) {
//     // אם התרחשה שגיאה בבקשה
//      console.log('Error fetching apps:', error.response ? error.response.data : error.message);

//     // console.error('Error fetching apps:', error.response ? error.response.data : error.message);
//     return null;
//   }
// }

// השתמשי בפונקציה עם הטוקן שלך

//   .then(apps => {
//     console.log('My apps:', apps);
//   });

/////////////////





app.listen(3003, () => {
    console.log(`my app is listening in http://localhost:3003`);
})