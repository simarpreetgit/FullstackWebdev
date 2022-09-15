const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
   
         seat:{

            type:String,
            require:true,
            match: /[A-F][1-9]\d?/
         },

         price:{

            type:String,
            min:0,
            Symbol:["$","€"]
         }
        

})

const ticket = mongoose.model('Ticket', ticketSchema);
module.exports = ticket;