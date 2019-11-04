const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://michaelinfant940:nullvoid@first-qjhlw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true}, (err) => {
     { console.log('MongoDB Connection Succeeded.') }
});

require('./employee.model');
