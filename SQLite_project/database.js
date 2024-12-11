import sqlite from 'sqlite3'

const db  = new sqlite.Database('./users.sqlite')


const initializeDb = async () => {
    await dbRun("DROP TABLE IF EXISTS users")
    await dbRun("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT SECONDARY KEY, firstname TEXT, lastname TEXT, class TEXT)");

     const users = [
         {firstname: "John",lastname:"Doe" , email: "john.doe@example.com" ,class:"matek"},
         {firstname: "John",lastname:"Doe" , email: "john.doe@example.com" ,class:"matek"},
         {firstname: "John",lastname:"Doe" , email: "john.doe@example.com" ,class:"matek"},

     ];
    
     for (const user of users) {
         await dbRun("INSERT INTO users (firstname, lastname, email, class) VALUES (?, ?, ?, ?)", [user.firstname,user.lastname, user.email,user.class]);
     }
};

async function dbQuery(sql,params = [])
{
    return new Promise((resolve,reject)=>{
        db.all(sql,params,(err,rows)=>{
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(rows)
            }
        })
    })
}


async function dbRun(sql,params = [])
{
    return new Promise((resolve,reject)=>{
        db.run(sql,params,(err)=>{
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(this)
            }
        })
    })
   

}

export{db, initializeDb ,dbQuery, dbRun}