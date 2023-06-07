import { builder } from '../schema/builder'

import "./mutation"
import "./query"
import "./object"

builder.queryType();
builder.mutationType();

export const schema = builder.toSchema()