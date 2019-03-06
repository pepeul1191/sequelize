var models = require('../configs/models');

console.log('\nListar Departments\n');

models.Department.findAll(
    {
      attributes: ['id', 'name', ]
    }
  ).then(
    function (departments) {
      console.log(JSON.stringify(departments));
    }
  );