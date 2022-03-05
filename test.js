import * as NSEL from './NSEL.js'; // important! to import my class in package.json add "type": "module"

// NSEL INIT
const db = new NSEL.DB('host', 'user', 'password', 'database'); // NSEL.DB class
const json = db.db; // json data structure
const app = NSEL.listen(); // start listening (default: port 80 || process.env.PORT)

// End Points
app.get('/', (req, res)=>{
    res.send('hello world');
});