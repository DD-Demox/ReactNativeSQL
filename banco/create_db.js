import * as SQLite from 'expo-sqlite';

export const create = async () => {
    try {
        db = await SQLite.openDatabaseAsync('bancoarmando',{
            useNewConnection: true
        });
        db? console.log("Database Connected") : console.log("Database Not Connected");
        result = await db.execAsync(`PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS senhas (id INTEGER PRIMARY KEY NOT NULL, senha TEXT NOT NULL);`);
        
        if (result.changes > 0)
            console.log("[LOG] Query executed");
        else
            console.log("[LOG] Empty result retrieved from query");
    } catch (error) {
        console.log(error);
    }
    return db;
}