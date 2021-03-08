import * as path from 'path';

import * as dotenv from 'dotenv';

import './rabbit/service';

dotenv.config({ path: path.resolve(__dirname, '../.env') });
