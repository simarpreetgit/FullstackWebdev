const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({

    airportSource:{
        type:String,
        require:true,
        enum :["Germany","India","UnitedState","Spain","Canada","London","Berlin","Poland","Denmark","France"]

    },
    airportDestination:{
        type:String,
        require:true,
        enum :["Germany","India","UnitedState","Spain","Canada","London","Berlin","Poland","Denmark","France"]

    },

    departureDate:{

        type:Date,
        require:true
        
  },

     ArrivingDate:{

    type:Date,
    require:true

},

     classs:{

    type:String,
    require:true,
    enum:["Economy","Business","First"]
},
tickets: {
    type: Schema.Types.ObjectId,
    ref: 'Ticket'
},
airlineName:{

     type:String,
     require:true,
     enum:["Emirates Airline","British Airways","Lufthansa","Ryanair"]
}

}) 



const flight = mongoose.model('Flight', flightSchema);
module.exports = flight;