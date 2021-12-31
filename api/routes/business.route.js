const express = require('express');
const app = express();
const businessRoutes = express.Router();
const path = require('path');


// Require Business model in our routes module
let Business = require('../models/Business');

// Defined store route // To create a new route 
businessRoutes.route('/add').post(function (req, res) {
  console.log(req.body,'add');
  let business = new Business(req.body);

  // business.save()
  //   .then(business => {
  //     res.status(200).json({'business': 'business in added successfully'});
  //   })
  //   .catch(err => {
  //   res.status(400).send("unable to save to database");
  //   });

  business.save(function (err, savedJob) {
    if (err) {
      return  res.status(400).send("unable to save to database" + err);
    } else {
       return res.status(200).json({'business': 'business in added successfully'});
    }
  })
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
  console.log('get');
    Business.find(function (err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      return next(new Error('Could not load Document'));
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


businessRoutes.route('/addbusiness').get(function(req,res){
  res.sendFile(path.join(__dirname,'../public/add-business.html'));  // back out one level first:
});

// // This responds to a GET request for abcd, abxcd, ab123cd, and so on

// app.get('/ab*cd', function (req, res) {  
//     console.log("Got a GET request for /ab*cd");
//     res.send('Page Pattern Match');
// })

// // This response to a DELETE request for the /del_user page.

// app.delete('/del_user', function (req, res) { 
//     console.log("Got a DELETE request for /del_user");
//     res.send('Hello DELETE');
// })


module.exports = businessRoutes;
