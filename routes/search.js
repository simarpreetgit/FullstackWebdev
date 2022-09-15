const router = require("express").Router();
const Flight = require('../models/Flight.js')
const Ticket = require('../models/Ticket.js')


router.get('/searchbar',(req,res)=>{

  res.render('search/searchbar')
})



router.get('/flightsearch',(req,res,next)=>{
  const queryString1 = req.query.q1
  const queryString2 = req.query.q2
  let result = []
  //console.log(queryString1,queryString2)
  Flight.find({})
  .then(flightsfromdtabase=>{

    for(let flight of flightsfromdtabase )
    {
      if(flight.airportSource.includes(queryString1) && flight.airportDestination.includes(queryString2) )
      {
      result.push(flight)
      }
    }
    //console.log(queryString1)
    res.render('flight',{flights:result})
  })
.catch(err=>{
  next(err)
})

})
  




module.exports = router;