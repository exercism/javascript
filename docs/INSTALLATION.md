# Installation

This track relies on [Node.js][web-nodejs] throughout to provide a runtime for JavaScript.
This means that we assume all execution of JavaScript on your computer will happen using [Node.js][web-nodejs].

## Track Requirements

Many machines come pre-installed with [Node.js][web-nodejs] or might have been installed previously, or as a dependency.
So before we do anything, we should check if it's already installed:

1. Open up a _terminal_ (`Terminal`, `cmd`, `Powershell`, `bash`, ...)
1. `node -v`

If [Node.js][web-nodejs] is installed, a version is displayed.
Write this version down.
If [Node.js][web-nodejs] is _not_ installed, an error will be written out.
Usually, something along the lines of `'node' is not recognised`.

## Node.js

### If Node.js is pre-installed

Browse to [the Node.js website][web-nodejs].
It will display _two_ versions (if it detects your OS. Otherwise, select your OS first).
If your `node -v` version matches one of these, you're good.
If it doesn't, we recommend that you use Node.js LTS.
If you're worried upgrading might break something on your system, you can continue as if everything is fine;
we might not be able to provide support when something unexpected happens.

### If Node.js is not installed

There are a couple of ways to install [Node.js][web-nodejs]:

- via an [Installer or Binary][web-nodejs-download]
- via a [package manager][web-nodejs-package]

Both options support Windows, macOS, and Linux. If you don't know what to do, using an installer is the easiest.

- We recommend using the **LTS** version. This is also indicated as _recommended_ on the [Node.js][web-nodejs] website "for most users".
- Follow the instructions on the webpage and/or during the installer and install [Node.js][web-nodejs].

## Testing the installation

After the installer is done, or the package manager has completed, or the binary has been copied and the instructions have been followed, it's good to test if everything is alright.

1. Open up a _terminal_ (`Terminal`, `cmd`, `Powershell`, `bash`, ...)
1. `node -v`

The version should match the one on the website.

> [!NOTE]
> It is important to open a _new_ terminal window.
> Any open terminal windows might not have been refreshed after the installation completed.
> This means that the open terminals don't know that a new program was installed.

> [!IMPORTANT] > _**Help**_: `'node' is not recognised`
>
> If you've used the official installer, your `PATH` should have been automatically configured, but if your shell has trouble locating your globally installed modules &mdash; or if you build Node.js from source &mdash; update your `PATH` to include the `npm` binaries.
>
> On macOS and Linux you may accomplish this by adding the following to either `~/.bash_profile` or `~/.zshrc`:
>
> ```shell
> export PATH=/usr/local/share/npm/bin:$PATH
> ```
>
> On Windows open the start menu and search for "environment variables".
> You'll need to edit the `PATH` entry and _add_ the path to the `npm` binaries here.
> Usually, these are found at `C:\Program Files\nodejs`.
> If you browse here with your `File Explorer`, you should find `node.exe`, `npm.bat` and `npx.bat`.
>
> Close any open terminals and open a new one.

## Enabling corepack

In order to use a versioned package manager compatible with this track, `corepack` needs to be enabled once:

```shell
corepack enable pnpm
```

## Assignment Requirements

Please follow [these instructions][cli-walkthrough] to download the Exercism CLI for your OS.

Once the CLI is set up and configured, download the first exercise - `hello-world`:

```shell
exercism download --exercise=hello-world --track=javascript
```

Each assignment then needs some tools to run the tests.
They can be installed running this command within each assignment directory:

```shell
corepack pnpm install
```

As this track has switched to pnpm, you should not be concerned about disk space.
Take a look at [pnpm](https://pnpm.io/), which ensures only one copy of each package-version is ever installed on disk.

> **But what is corepack and why does this work?**
>
> You don't need this information to complete the JavaScript track, but if you're eager to understand what just happened, the following paragraphs are for you:
>
> This works because `corepack` is a tool that comes bundled with Node.js, which has been installed per the steps above.
> It can install the package manager `pnpm`. It configures the system
> The `corepack` command looks for a `package.json` file, which is present in _each_ assignment folder.
> It then checks `packageManager` which matches `pnpm`, so it may continue. If necessary it will upgrade `pnpm` first.
> This file also lists the `"dependencies"` above, which are then downloaded by `pnpm` and placed into a local cache.
>
> The scripts in the `package.json` use the binaries from the local cache, and it's these scripts that are used to run the tests, as listed in the `exercise` description.

[web-nodejs]: https://nodejs.org/
[web-nodejs-download]: https://nodejs.org/en/download/
[web-nodejs-package]: https://nodejs.org/en/download/package-manager/
[cli-walkthrough]: https://exercism.org/cli-walkthrough
