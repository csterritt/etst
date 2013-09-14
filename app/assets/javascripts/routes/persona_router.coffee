Etst.PersonaRoute = Ember.Route.extend
  actions:
    saveAction: ->
      console?.log "saveAction invoked for #{@controller.get('model')}"
      promise = @session.flush()
      promise.then ->
        console?.log "Flush succeeded... rolling back"
        @controller.get('model').rollback()
        console?.log "Post roll-back"
      , ->
        console?.log "Flush failed!"
      console?.log "After flush"
