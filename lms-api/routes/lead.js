const router = require('express').Router();
let Lead = require('../models/lead.model');

router.route('/').get((req, res) => {
  Lead.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const customername = req.body.customername;

  const newLead = new Lead({ customername });

  newLead.save()
    .then(() => res.json('Lead added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Lead.findById(req.params.id)
    .then(lead => res.json(lead))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Lead.findByIdAndDelete(req.params.id)
    .then(() => res.json('Lead deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Lead.findById(req.params.id)
    .then(lead => {
      lead.username = req.body.username;

      lead.save()
        .then(() => res.json('Lead updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;