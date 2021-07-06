var express = require('express');

var router = express.Router();

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/dulich', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

console.log('connect success!')




var toursSchema = mongoose.Schema({

    tourID: String,

    tourName: String,

    price: String,

    nights: String,

    days: String

});

var Tour = mongoose.model("Tours", toursSchema);

router.use(express.json());

router.use(express.urlencoded({ extended: true }));




router.get('/', function (req, res) {

    Tour.find({}, function (_err, response) {

        if (_err) console.log("error");

        res.json(response);

        console.log("alltour")

    });

});

router.get('/name', function (_req, res) {

    Tour.find({ tourName: _req.query.tourName }, function (_err, response) {

        if (_err) console.log("error");

        {
            res.json(response);

            console.log(response)

        }

    });

});

router.post('/post', (req, res) => {

    if (!req.body.tourName || !req.body.tourID || !req.body.price || !req.body.nights || !req.body.days) {

        res.send('thieu thong tin');

    } else {

        var newtour = new Tour(req.body);

        newtour.save(function (err, Pro) {

            if (err)

                res.end("ERROR")

            else

                res.json(req.body);



        });

    }

})

module.exports = router;