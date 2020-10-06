# Update
So what was happening with my git repository was that my react part of my app (client) was creating its own repository everytime I would create a new repository. I fixed it after 3 hrs, but have no clue how I did it.

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

# Hypothesis: 
This app will help people learn more about pokemon and be able to make their own teams.
UserStories:
- When i enter the app I want to be able to search for pokemon related info
- I want to be able to search for pokemon by name
- I want to see what games it is from and the different sprites
- I want to be able to see about the specific pokemon (stats, description)
- I should only be able to add to team if I am logged in
- I want to be able to add it to my team(limited to 6)
- If I add it to my team I want to be able to give it specific moves

## API: https://pokeapi.co/
## wireFrame: https://imgur.com/uyYP0sR
## Database.V1:https://imgur.com/KKNujJb
## Database.V2:https://imgur.com/SdexDjl

# Routes: 
Initial page: get /
Sign in: get auth/login
Signout: get auth/logout
Creating user: post /user/
Add to team: /:id/team
Pokemon page: /pokemon


# MVP:
- Most be able to show all pokemon, where to find in what gen, stats and be able to make a team when logged in using the pokemon api
# Moscow Method: 
Must Have:
- Pokemon sprites, descriptions, stats
- Ability to log in
- Ability to make team
- Ability to search for pokemon by (name/id)

# Moscow Method: 
Must Have:
- Pokemon sprites, descriptions, evolution tree
- Ability to log in
- Ability to make team
- Ability to search for pokemon by (name/id)



Should Have:
- Able to edit moves pokemon know
- Able to see pokemon evolution tree


Could Have:
- Search up certain types of pokemon


* ...
# PokeApp
# Pokedex
# PokeApp
# PokeApp
# PokeApp
