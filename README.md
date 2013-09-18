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
have Ruby (at least version 1.9.3) set up.

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

#### Ember Data branch

### Fixed!

I had the same problem with Ember Data, but changed the Ember model to:

        isClean: ( ->
          ! @get("isDirty")
        ).property("isDirty")

This fixes the problem.

### The Epf people say that they're working on a fix as well.

I'll update as soon as it's out.
