import { type SchemaTypeDefinition } from 'sanity'
import carSchema from './car';
import userOrderSchema from './userOrder';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ carSchema, userOrderSchema ],
}