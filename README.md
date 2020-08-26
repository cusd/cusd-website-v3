# Notes on this project

This site is built using [Foundation 5](https://foundation.zurb.com/sites/docs/v/5.5.3/) for the front end framework, Ruby on Rails as the templating language (.erb), YML (.yml) for easier data entry, SASS (.scss) for the css compiler, and [Middleman](https://middlemanapp.com/basics/install/)  as the static website generator. Cornell disallows us (we didn't pay ;P ) from using "live" websites where the website is connected to a database, so instead we use a static website. Basically, this means that whatever is uploaded via FTP (file transfer protocol) to the server is everything you see on the website, it is all known at compilation(build) time. This is what Middleman does for us. This is a Ruby tool so Windows may get some errors. 

The `build` folder is never touched during development. This **purely** holds the compiled code and is updated on each run of `middleman build`. 

The main working folders are `data` or `source`.

`data` is setup to take the repeated elements of the website (contact info, projects) and to make it simple. YML is designed to be simple, so that you don't **really** need a coder to update it. You'll notice that the names in the YML files are referenced in the .erb files. Think of it like a key value store.

`source` is where the main coding is done. This is where images, javascript, css, and the templates are stored. This is pretty common in big projects (follows more of the MVC style) where the data itself is separated in the `data` (Model) and templates are representative of how the data will be loaded for **every** template (View). The Controller is defined in the `config.rb` (don't really worry about that, just follow the pattern). 

# How to use this project

To run this directory, install [Middleman](https://middlemanapp.com/basics/install/)  onto your local device


From this directory, run 

`bundle exec middleman server`

from root directory.

This should spin up the live reload on port `localhost:4567`

From here, you should be able to make changes and the Live Reload will be able to detect your changes.

# How to push to Live server

The team lead needs to have access to Cornell's FTP server. This can be requested by emailing acadtech@cornell.edu (you should also CC Dave at dr.drschneider@gmail.com ) saying that you need FTP access to both 

https://cusd.cornell.edu

https://codi.engineering.cornell.edu

Once you have access, and you are **on RedRover or have a VPN setup**, build the current site with `middleman build`. From here, using your fav FTP client (I prefer [Filezilla](https://filezilla-project.org/)). Connect to the site at host: sftp://cusd.cornell.edu and I think the username and pass are your netID logins. You should see the website under the htdocs. Drag and drop the updated content from your local device to the server and you should see the live site updated instantaneously. 

# Check build

`cd build`

`ruby -run -e httpd . -p 8080`


# Known Errors
Downgrade `bundler` to version `1.1.0` if you see an error message about the bundler version.

On macOS High Sierra, there is a json issue with Middleman
Has something to do with the build version of the json. This command has fixed it in the past but who knows how Apple could change their configs.

`gem 'json', github: 'flori/json', branch: 'v1.8'`

If you encounter an error with this line above in `Gemfile`, replace it with `gem 'json', '>= 1.8'`, then run `bundle install`

If `middleman build` doesn't work, try `bundle exec middleman build`

# Request removal of information
This repo contains some archived files. If your information is in any of those files and you would like it removed, contact the director of CUSD and request that the technical operations team remove it.
