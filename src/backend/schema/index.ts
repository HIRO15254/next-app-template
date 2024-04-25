import {builder} from '../lib/pothos';

import './objects/user';
import './objects/userRole';

builder.queryType();
builder.mutationType();

export const schema = builder.toSchema();
