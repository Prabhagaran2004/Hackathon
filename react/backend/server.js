const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const config = require('./config/config');

const farmerRoutes = require('./routes/farmerRoutes');
const inputRoutes = require('./routes/inputRoutes.js');
const inputApplicationRoutes = require('./routes/inputApplicationRoutes.js');
const harvestRoutes = require('./routes/harvestRoutes.js');
const batchRoutes = require('./routes/batchRoutes.js');
const intermediaryRoutes = require('./routes/intermediaryRoutes.js');
const transferRoutes = require('./routes/transferRoutes.js');
const processingRoutes = require('./routes/processingRoutes.js');
const saleRoutes = require('./routes/saleRoutes.js');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Use Routes
app.use('/api/farmers', farmerRoutes);
app.use('/api/inputs', inputRoutes);
app.use('/api/applications', inputApplicationRoutes);
app.use('/api/harvests', harvestRoutes);
app.use('/api/batches', batchRoutes);
app.use('/api/intermediaries', intermediaryRoutes);
app.use('/api/transfers', transferRoutes);
app.use('/api/processing', processingRoutes);
app.use('/api/sales', saleRoutes);

const port = config.port;

app.listen(port, () => console.log(`Server running on port ${port}`));