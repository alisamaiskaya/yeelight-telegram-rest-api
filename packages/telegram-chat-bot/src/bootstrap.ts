import * as path from 'path';

import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import { bootstrap } from './main';

bootstrap();
