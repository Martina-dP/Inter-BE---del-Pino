const express = require('express');

const APP = express();
const PORT = 3001;

APP.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});