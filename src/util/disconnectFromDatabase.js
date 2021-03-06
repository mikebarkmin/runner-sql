"use strict";

/**
 * Disconnects from the database
 */

const disconnectFromDatabase = function (collectible, db) {
  return new Promise(function (resolve, reject) {
    db.close((err) => {
      if (err) {
        reject({ ...collectible, test_results: false, error: err });
      }
      resolve(collectible);
    });
  });
};

exports.disconnectFromDatabase = disconnectFromDatabase;
