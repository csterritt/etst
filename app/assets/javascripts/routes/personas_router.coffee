Etst.PersonasRoute = Ember.Route.extend
  model: ->
    @store.find("persona")
