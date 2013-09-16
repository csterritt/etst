# for more details see: http://emberjs.com/guides/models/defining-models/

Etst.Persona = DS.Model.extend
  name: DS.attr 'string'
  age: DS.attr 'number'
  favorite_food: DS.attr 'string'
  isClean: ( ->
    ! @get("isDirty")
  ).property("isDirty")
