var database = require('../../configs/database');

exports.connection = function(){
  console.log("0 ++++++++++++++++++++++++++++++++++++");
  const asyncExample = async () => database.db.authenticate()
    .then(() => {
      return 'OK';
    })
    .catch(err => {
      return err;
    });
  const globalData = asyncExample().then( (success, err) => {
    if (err) { console.error(err); }
    console.log(success)
  });
  globalData.then(function(result){
    console.log(result);
  });
};
