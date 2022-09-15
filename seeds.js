require("dotenv/config");
const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI)
	.then(db => console.log(`connected to database`))
	.catch(err => console.log(err))

    const Flight = require('./models/Flight')
    const Ticket = require('./models/Ticket')

    const flights =[{
        
        airportSource:"Germany",
        airportDestination:"Spain",
        departureDate:"11 Oct 2022",
        ArrivingDate:"01 Oct 2022",
        classs:"Economy",
        tickets:{
            seat:"A1",
            price:"100 $"
        },
        airlineName:"Ryanair"
        
    },

    {

        airportSource:"Berlin",
        airportDestination:"Poland",
        departureDate:"20 Oct 2022",
        ArrivingDate:"20 Oct 2022",
        classs:"Economy",
        tickets:{
            seat:"A2",
            price:"120 $"
        },

        airlineName:"Ryanair"
        
        
    },

    {
        airportSource:"UnitedState",
        airportDestination:"India",
        departureDate:"22 Oct 2022",
        ArrivingDate:"23 Oct 2022",
        classs:"Economy",
        tickets:{
            seat:"A3",
            price:"820 $"
        },
        airlineName:"Lufthansa"
        

    },
    {
        airportSource:"London",
        airportDestination:"Berlin",
        departureDate:"25 Oct 2022",
        ArrivingDate:"28 Oct 2022",
        classs:"Economy",
        tickets:{
            seat:"A4",
            price:"1120 $"
        },
        airlineName:"British Airways"

    },

    {
        airportSource:"Denmark",
        airportDestination:"France",
        departureDate:"01 Nov 2022",
        ArrivingDate:"05 Nov 2022",
        classs:"Economy",
        tickets:{
            seat:"A5",
            price:"220 $"
        },
        airlineName:"Lufthansa"

    },

    {
        airportSource:"Canada",
        airportDestination:"Germany",
        departureDate:"05 Nov 2022",
        ArrivingDate:"08 Nov 2022",
        classs:"Economy",
        tickets:{
            seat:"A6",
            price:"1220 $"
        },
        airlineName:"Emirates Airline"

    }
]

flights.forEach(function(flight){
   Ticket.create(flight.tickets)
   .then(createdflight=>{

    flight.tickets = createdflight._id
     Flight.create(flight)
    
   })

})



    // flight.insertMany(flights)
	// .then(flights => {
	// 	console.log(`Success - added ${flights.length} books to the db`)
	// 	mongoose.connection.close()
	// })
	// .catch(err => console.log(err))