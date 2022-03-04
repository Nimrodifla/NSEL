import * as NSEL from './NSEL.js'; // important! to import my class in package.json add "type": "module"

// NSEL INIT
const db = new NSEL.DB('host', 'user', 'password', 'database').db; // json data structure
NSEL.listen(); // start listening (default: port 80 || process.env.PORT)
const app = NSEL.app;

// End Points
app.get('/', (req, res)=>{
    res.send('hello world');
});