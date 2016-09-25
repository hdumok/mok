/**
 * Created by hdumok on 2016/9/24.
 */

"use strict";

import Redis from 'ioredis';

export default new Redis(CONFIG.redis);
