Etst.PersonaRoute = Ember.Route.extend
  actions:
    saveAction: ->
      model = @get("controller").get("model")
      model.save().then ->
        console?.log "Save succeeded."
      , ->
        console?.log "Save failed."
