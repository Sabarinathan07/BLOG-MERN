const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect Database
connectDB();

//middleware
app.use(express.json({extended : false}));


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Api working!!'))

//define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
