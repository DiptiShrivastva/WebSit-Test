const mysql = require('mysql');
let instance = null;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',//your password
    database: 'users'
    
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    // console.log('db ' + connection.state);
});


class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM Users;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }


    async insertNewName(name,nickname, age, bio) {
        try {
            
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO Users (name, nickname, age, bio) VALUES (?,?,?,?);";

                connection.query(query, [name,nickname, age, bio] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                })
            });
            return {
                name : name
                
            };
        } catch (error) {
            console.log(error);
        }
    }

    async deleteRowById(id) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "DELETE FROM users WHERE id = ?";
    
                connection.query(query, [id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async updateNameById(id, name) {
        try {
            id = parseInt(id, 10); 
            const response = await new Promise((resolve, reject) => {
                const query = "UPDATE users SET name = ? WHERE id = ?";
    
                connection.query(query, [name, id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.affectedRows);
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }

    }
    async getByid(id) {
        try {
            id = parseInt(id); 
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * from users where id = ?";
      
                connection.query(query, [id],(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
      }
    

    
}

module.exports = DbService;
