var helper = require('./databaseHelper');

var database = require('../../configs/database');

describe('Conection OK', function() { 
  it('should Return Hello world',function() { 
    await database.db.authenticate()
      .then(() => {
        console.log('1 ++++++++++++++++++++++');
        return 'OK';
      })
      .catch(err => {
        console.log('2 ++++++++++++++++++++++');
        return err;
      });
    //expect(database.helloworld()).toEqual('Hello World'); 
  }); 
});