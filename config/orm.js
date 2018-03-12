var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (table, description) {
        var queryString = `INSERT INTO ${table} (burger_name) VALUES ("${description}")`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (table, description, devouredBool) {
        var queryString = `UPDATE ${table} SET devoured = ${devouredBool} WHERE (burger_name) = "${description}"` ;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
}

module.exports = orm;

