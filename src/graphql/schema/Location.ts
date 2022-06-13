import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Location {
  @Field()
  id: number

  @Field()
  city: string

  @Field()
  county: string

  @Field()
  zipcode: string
}
