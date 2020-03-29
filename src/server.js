/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// Constants
const PORT = 3333;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);