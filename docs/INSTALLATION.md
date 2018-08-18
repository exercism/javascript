## Installing Node.js

There are at least two common options to run JavaScript code: the browsers and [Node.js](http://nodejs.org/). Here we are going to use Node.js to run our JavaScript code. Let's see how to install Node.js locally:

**Windows users**: find official installers on [Node.js downloads](https://nodejs.org/en/download/). Choose the LTS (long term support) version. It will install Node.js on your machine as well as `npm` (that stands for Node Package Manager), a tool that helps installing applications that run on top of Node.js.

**Mac OS X users**: same as Windows users, you will find official installers on [Node.js downloads](https://nodejs.org/en/download/). Choose the LTS version. It will install Node.js and `npm` on your machine.

**Linux users**: there are binaries for `node` and `npm` tools on the Node.js downloads page, but the recommended way to install them on a Linux machine is via a package manager. As of writing this, the recommended version of Node.js to install is 4.x. To install it on a Debian or Ubuntu Linux distribution just execute these commands:

    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    sudo apt-get install -y nodejs

If you are using a different distribution or package manager, you can find a complete list of supported ones on the official documentation page: [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).

## Installing additional tools

The next step is to install [Jasmine](https://jasmine.github.io/) globally so that you can run JavaScript tests:

    npm install -g jasmine

Depending on your setup, you may need super user privileges to install an `npm` module globally. This is the case if you've used the official installer linked to above. If `npm` gives you an error saying you don't have access, add `sudo` to the command above:

    sudo npm install -g jasmine

If you've used the official installer, your `PATH` should have been automatically configured, but if your shell has trouble locating your globally installed modules&mdash;or if you build Node.js from source&mdash;update your `PATH` to include the `npm` binaries by adding the following to either `~/.bash_profile` or `~/.zshrc`:

    export PATH=/usr/local/share/npm/bin:$PATH
