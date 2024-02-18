import {builder} from './builder';

import './objects/user';
import './objects/userRole';

builder.queryType();
builder.mutationType();

export const schema = builder.toSchema();
