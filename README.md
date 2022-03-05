# NSEL
Make nodejs express server & json structured database in 3 lines!
```javascript
const NSEL = require('nsel');

// NSEL INIT
const db = new NSEL.DB('host', 'user', 'password', 'database'); // NSEL.DB class
const json = db.db; // json data structure
const app = NSEL.listen(); // start listening (default: port 80 || process.env.PORT)

// End Points
app.get('/', (req, res)=>{
    res.send('hello world');
});
```

## Database
NSEL.DB.db is a json object, that can be saved in your mysql db with the:
```javascript
db.saveDB();
```
command.