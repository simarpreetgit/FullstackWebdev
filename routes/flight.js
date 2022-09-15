const router = require("express").Router();
// const { populate } = require("../models/Flight.js");
const Flight = require('../models/Flight.js')
const Ticket = require('../models/Ticket.js')

router.get('/flight', (req, res, next) => {
	// get all the books from the db
	Flight.find()
		.then(flightFromDB => {
			console.log(flightFromDB)
			res.render('flight/index', { flights: flightFromDB })
		})
		.catch(err => next(err))
})


router.get('/flight/add', (req, res, next) => {
	// get all the flight

	Ticket.find()
		.then(ticketsFromDB => {
		
			res.render('flight/add', { tickets: ticketsFromDB })
		})
		.catch(err => next(err))
});



router.get('/flight/:id', (req, res, next) => {
	const flightId = req.params.id
	Flight.findById(flightId)
		.populate('tickets')
		.then(flightFromDB => {
			console.log(flightFromDB)
			res.render('flight/details', { flight: flightFromDB })
		})
		.catch(err => next(err))
});



router.post('/flight', (req, res, next) => {
	// console.log(req.body)
	const { airportSource, airportDestination, departureDate, ArrivingDate,tickets,classs,airlineName} = req.body
	Flight.create({airportSource, airportDestination, departureDate, ArrivingDate,tickets,classs,airlineName })
		.then(flightBook => {
			console.log(flightBook)
			res.redirect(`/flight/${flightBook._id}`)
		})
		.catch(err => next(err))

});


router.get('/flight/edit/:id', (req, res, next) => {
	Flight.findById(req.params.id)
	
		.then(flightFromDB => {
			res.render('flight/edit', { flightt: flightFromDB })
			console.log(flightFromDB)
		})
		.catch(err => next(err))
});

router.post('/flight/edit/:id', (req, res, next) => {
	const { airportSource, airportDestination, departureDate, ArrivingDate,tickets,classs,airlineName } = req.body
	Flight.findByIdAndUpdate(req.params.id, {
		airportSource,
		airportDestination,
		departureDate,
		ArrivingDate,
		tickets,
		classs,
		airlineName
	})
		.then(() => {
			// redirect to the book details page
			res.redirect(`/flight/${req.params.id}`)
		})
		.catch(err => next(err))
});

router.get('/flight/delete/:id', (req, res, next) => {
	Flight.findByIdAndDelete(req.params.id)
		.then(() => {
			res.redirect('/flight')
		})
		.catch(err => next(err))
});




  


module.exports = router;