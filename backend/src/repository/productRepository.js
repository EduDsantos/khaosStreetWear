const db = require('../config/database')

function findAll(){
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM product', [], (err, rows) => {
                if (err){
                    reject(err);
                } else {
                    resolve(rows);
                }
            
            }
         )
        }
    )
}


function findById(id){
    return new Promise ((resolve, reject) => {
        db.get(
            'SELECT * FROM product WHERE id = ?',
            [id],
            (err,row) => {
                if(err){
                    reject(err);
                } else {
                    resolve(row || null);
                }
            }
        );
    }
 );
}





module.exports = {
    findAll,
    findById
};