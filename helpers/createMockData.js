const fs = require('fs');
const path = require('path');
const mockData = require('../src/pages/Home/mockData');

fs.writeFileSync(path.join(__dirname, './mockedData.json'), JSON.stringify(mockData(), 0, 2));
