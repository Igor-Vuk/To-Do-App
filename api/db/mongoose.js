const mongoose = require("mongoose")

mongoose.Promise = global.Promise
// if(process.env.NODE_ENV === "development") {
    mongoose.connect("mongodb://localhost:27017/TodoApp")
// } else {
//     mongoose.connect(process.env.DATABASE_URL);
// }


module.exports = {
    mongoose:mongoose
}



