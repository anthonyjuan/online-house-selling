let House = require('../models/house')

module.exports = {
  getHouse: function(req, res) {
    House.find(function(err,results) {
      if(!err) {
        res.send(results)
      }
    })
  },
  postHouse: function(req ,res) {
    let newHouse = new House({
      title: req.body.title,
      description: req.body.description,
      address: req.body.address,
      price: req.body.price,
      owner: req.body.owner,
      image: req.body.image,
      loc: {
        lng: req.body.lng,
        lat: req.body.lat
      }

    })

    newHouse.save(function(err,result){
      if(!err) {
        res.send({success:true, msg:'create success', data:result})
      } else {
        res.send({success:false, msg:err})
      }
    })
  },
  deleteHouse: function(req, res) {
    House.findByIdAndRemove(req.params.id, function(err) {
      if(!err) {
        res.send({success:true, msg:'delete success'})
      } else {
        res.send({success:false, msg:err})
      }
    })
  },
  updateHouse: function(req, res) {
    House.findByIdAndUpdate(req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        address: req.body.address,
        price: req.body.price,
        owner: req.body.owner,
        image: req.body.image,
        loc: {
          lng: req.body.loc.lng,
          lat: req.body.loc.lat
        }
      },
      function(err) {
        if(!err) {
          res.send({success:true, msg:'update success'});
        } else {
          res.send({success:false, msg:err})
        }
      }
  )
  }
};