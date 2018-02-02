module.exports=(app)=>{

    var emp=require('../controllers/emp.controller.js');
    app.post('/emp',emp.create);

    app.get('/emplist',emp.findAll);

    app.get('/emp/:empid',emp.findById);

    app.put('/emp/:empid',emp.update);

    app.delete('/emp/:empid',emp.delete);
}
// var express=require('express');
// var router=express.Router();
// var emp=require('../controllers/emp.controller.js');
// router.post('/emp',emp.create);
//
// router.get('/emplist',emp.findAll);
//
// module.exports=router;