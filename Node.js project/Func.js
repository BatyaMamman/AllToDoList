
const axios = require('axios');

async function getMyApps() {
    try {
        // קריאה ל-API של Render כדי לקבל את רשימת האפליקציות
        const renderToken = 'rnd_zdL7wlRkWbJTasL3dL8KYcGECGDn'

        //  --header 'Authorization: Bearer {{render_api_token_goes_here}}
        const response = await axios.get('https://api.render.com/v1/services?limit=20', {
            headers: {
                'Authorization': `Bearer ${renderToken}`,
                'Accept': 'application/json'
            }
        });
        // החזרת רשימת האפליקציות מתוך תשובת ה-API
        return response.data;
    } catch (error) {
        // אם התרחשה שגיאה בבקשה
        console.log('Error fetching apps:', error.response ? error.response.data : error.message);

        // console.error('Error fetching apps:', error.response ? error.response.data : error.message);
        return null;
    }
}

module.exports = { getMyApps };