// NSEL - Nimi Server Express Library

import * as fs from 'fs';
import * as mysql from 'mysql';

class ServExNim {
    
    sqlDB; // mySql db - user doesnt touch it
    prevDb; // user doesnt touch it
    db; // json db - user changes this one
    
    sqlDataId;
    sqlColName;
    sqlTableName;
    constructor(host, user, pass, db, dataId = 0, colName = 'data', tableName = 'info') {
        // sql db settings
        this.sqlDataId = dataId;
        this.sqlColName = colName;
        this.sqlTableName = tableName;

        this.db = {};
        this.connectDB(host, user, pass, db);
    }
    
    connectDB(host, user, pass, db) {
        // set this.sqlDB
        this.sqlDB = mysql.createPool({
            host: host,
            user: user,
            password: pass,
            database: db
        });
    }

    // save db to sqlDB
    saveDB() {
        if (this.prevDb != this.db) // update database only if the data has changed
        {
            let data = JSON.stringify(db);
            let q = "UPDATE " + this.sqlTableName + " SET " + this.sqlColName + " = '" + data + "' WHERE id = " + this.sqlDataId.toString() + ";";
            db.query(q, (err, result)=>{
                if (err)
                    throw err;

                this.prevDb = this.db;
            });
        }
    }

    // loads sqlDB to db
    loadDB() {
        let q = "SELECT " + this.sqlColName + " FROM " + this.sqlTableName + " WHERE id = " + this.sqlDataId.toString() + ";";
        db.query(q, (err, result)=>{
            if (err)
                throw err;
            
            let res = result[0].data;
            this.db = JSON.parse(res);
        });
    }

    htmlReplace(htmlPath, src, dst)
    {
        const content = fs.readFileSync(htmlPath);
        html = String(content);
        while (html.includes(src))
        {
            html = html.replace(src, dst);
        }

        return html;
    }
}

export {ServExNim}; //export class so it can be imported