import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The Categories model' })
export class Locations {
  @Field(() => ID)
  id: string;

  @Field()
  @Property()
  zipcode: String;

  @Field()
  @Property()
  city: String;

  @Field()
  @Property()
  county: String;
}

export const LocationModel = getModelForClass(Locations);
