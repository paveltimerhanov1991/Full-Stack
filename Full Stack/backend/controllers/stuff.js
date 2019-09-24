const Mobile = require('../models/mobile');

exports.createMobile = (req, res, next) => {
  const mobile = new Mobile({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  mobile.save().then(
    () => {
      res.status(201).json({
        message: 'Mobile saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneMobile = (req, res, next) => {
  Mobile.findOne({
    _id: req.params.id
  }).then(
    (mobile) => {
      res.status(200).json(mobile);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyMobile = (req, res, next) => {
  const mobile = new Mobile({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  Mobile.updateOne({_id: req.params.id}, mobile).then(
    () => {
      res.status(201).json({
        message: 'Mobile updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteMobile = (req, res, next) => {
  Mobile.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllStuff = (req, res, next) => {
  Mobile.find().then(
    (mobiles) => {
      res.status(200).json(mobiles);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};