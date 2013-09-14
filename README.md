### Example Ember/Epf App

This app uses Epf for data persistence.  This shows (what I think is) a bug.

The background is that this is an application to edit existing information about
users.  The data already exists, and so I want a nice UI to seeing their information
and changing it.  When it's changed, the "Save" button should light up so that updates
can be saved.

I've added a property to the "Persona" Ember model (using coffeescript):

        isClean: ( ->
          ! @get("isDirty")
        ).property("name", "age", "favorite_food")

So that the code can know if the data has been updated.

To see the problem, run the following commands.  This is a Rails app, so you'll need to
have Ruby (at least version 1.9.2) set up.

% bundle install

% rake db:migrate

% rake db:seed

% rails s

Then you can visit the app on http://localhost:3000

Click the "See and Edit Personas" link.

Click Fred or Janey -- they are "(clean)" and the "Save" button is disabled.

Change any field -- that person is marked as "(dirty)" and the "Save" button is enabled
(yay Ember!).

Click "Save" -- the data is saved, BUT the "(dirty)" marker is still there.  Reloading
the page clears it.

Nuts.
