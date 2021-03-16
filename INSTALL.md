# Installation

March 16, 2021

Ideally, this project will be deprecated soon. However, if you still need to install it, see the following instructions before reaching out for debugging help.

1. Make sure you have Ruby 2.x.x installed and not 3.0.0+

Check this with the command `ruby -v`

If you have Ruby version 3.x.x, the project will not work. [Details on how to change your Ruby version here](https://www.ruby-lang.org/en/downloads/). The latest stable 2.x.x version as of the time of this post is 2.7.2, which should work fine.

2. Delete Gemfile.lock

3. Run `bundle install` inside this directory

4. If you run into issues (most people do on the first try) attempt the following:

```
gem install bundler:1.17.3
bundle _1.17.3_ install
bundle _1.17.3_ exec middleman build
```

If successful, run `bundle exec middleman server` and navigate to localhost:4567

### Issue with json gem

Try replacing `gem 'json', github: 'flori/json', branch: 'v1.8'` in Gemfile with `gem 'json', '>= 1.8'`. Run `bundle install` again.

### Help

I'm no longer involved with CUSD, but if nothing in this post works, feel free to reach out via email or private message.