# Welcome

In this practical guide, you'll learn how to set up and use Mock Firebolt®, which is an app test tool that allows an app developer to create an app that is compliant with Firebolt® to test the App's behavior when receiving unexpected or high latency responses from the Firebolt® SDK, including support for new APIs that are under development. We'll also show you how to use Firebolt's® Hello World app as an example to show you how to connect your app to Mock Firebolt® so you can see how your app would respond in real-time to various platforms.

Mock Firebolt® allows you to create a Firebolt®-compliant app to \"artificially\" make calls to the Firebolt® SDK(s) and return responses to see how your app would run on an actual device.

For example, this might be used:

-   by a developer who only has an STB to get Firebolt® to answer as if it is a TV (or vice versa)

-   to test variations of accessibility settings, advertising settings, etc.

-   to test how the app responds to errors from the Firebolt® SDK

-   to test slow responses from the Firebolt® SDK, etc.

Note: The standard Firebolt® SDK has a set of static mock responses built-in but it is not controllable or extensible.

Since the Firebolt® SDK does not validate parameters on method calls, you can also use Mock Firebolt® as a way to validate that your invocations of Firebolt® methods are correct.

## Prerequisites

The ***Mock Firebolt®*** guide is designed with the following assumptions:

-   You have some experience with the basics of programming (building apps, working with APIs, etc) and have some experience working with the JavaScript programming language. This guide does not explain object-oriented programming or the JavaScript language.

-   You understand the basics of app file structures and concepts like repositories.

-   You understand how Git repos work and how to clone repositories.

-   You understand command-line interface calls.

-   You understand JavaScript run-time tools like Node and NPM.

-   You understand how to install and use JavaScript packages on your local machine.

## What you'll need

-   A computer running Windows or Linux, or a Mac running macOS.

-   Internet access or an alternative way of loading the latest Firebolt® SDK and Lighting™ JavaScript framework onto your computer.

## What you'll learn

-   How to install Mock Firebolt® on your local machine.

-   How to connect your app using the example of the Firebolt® Hello World app.

## What you'll do

-   Clone the Mock Firebolt® Repo

-   Get the Mock Firebolt® server up and running locally on your machine.

-   Connect the Firebolt® Hello World app to Mock Firebolt®.

-   Make real-time changes to the app in Mock Firebolt® and see those changes occur in your browser.

# Installing Node

**This is not required if you already have Node.**

> \"\"**Node.js** is an [open-source](https://en.wikipedia.org/wiki/Open-source_software), [cross-platform](https://en.wikipedia.org/wiki/Cross-platform), [back-end](https://en.wikipedia.org/wiki/Front_end_and_back_end) [JavaScript](https://en.wikipedia.org/wiki/JavaScript) [runtime environment](https://en.wikipedia.org/wiki/Runtime_system) that runs on the [V8 engine](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) and executes JavaScript code outside a [web browser](https://en.wikipedia.org/wiki/Web_browser). Node.js lets developers use JavaScript to write command line tools and for [server-side scripting](https://en.wikipedia.org/wiki/Server-side_scripting)---running scripts server-side to produce [dynamic web page](https://en.wikipedia.org/wiki/Dynamic_web_page) content before the page is sent to the user's web browser. Consequently, Node.js represents a \"JavaScript everywhere\" paradigm,\[[6\]](https://en.wikipedia.org/wiki/Node.js#cite_note-6) unifying [web-application](https://en.wikipedia.org/wiki/Web_application) development around a single programming language, rather than different languages for server-side and client-side scripts.\" - <https://en.wikipedia.org/wiki/Node.js>

## Installing for Windows

**Prerequisites**

It's assumed that you have PowerShell or Windows' command line as well as permissions to download and install software on your machine.

### Step 1:

**Download Node.js Installer**: In a web browser, put in the URL <https://nodejs.org/en/download/>. Select the **Windows Installer** button to download the latest default version. The Node.js installer includes the NPM package manager.

![Windows Installer Option](./images/WindowsInstallerOption.png)

### Step 2: Install Node.js and NPM from Browser:\*

1.  Once the installer finishes downloading, launch it. Open the **downloads** link in your browser and select the file. Or, browse to the location where you have saved the file and double-click it to launch.

2.  The system will ask if you want to run the software -- select **Run**.

3.  You will be welcomed to the Node.js Setup Wizard -- select **Next**.

4.  On the next screen, review the license agreement - select **Next** if you agree to the terms and install the software.

5.  The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else -- then select **Next**.

6.  The wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by selecting **Next**.

7.  Finally, select the **Install** button to run the installer. When it finishes, select **Finish**.

### Step 3: Verify installation:

Open PowerShell or your preferred command-line interface (CLI) tool and enter the following:

    node -v

The system should display the Node.js version installed on your system. You can do the same for NPM:

    npm -v

## Installing for Mac

**Prerequisites**

Node on Mac can be installed directly from Node.js or it can be installed with tools like [Homebrew](https://brew.sh/). For this installation we're going to keep it as simple as possible and go directly to Node.js. However, you may use a package manager tool such as Homebrew if you prefer.

It's assumed that you have access to Mac's terminal tool and have permissions to download and install software on your machine.

### Step 1:

**Download Node.js Installer**: In a web browser, put in the URL <https://nodejs.org/en/download/>. Select the **Mac Installer** button to download the latest default version. The Node.js installer includes the NPM package manager.

### Step 2:

1.  Once the installer finishes downloading, launch it. Open the **downloads** link in your browser and select the file. Or, browse to the location where you have saved the file and double-click it to launch.

2.  You will be introduced to the Node.js Setup Wizard -- select **Continue**.

3.  On the next screen, review the license agreement - select **Agree** if you agree to the terms and install the software.

4.  The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else -- then select **Install**.

    1.  At this point you can select **Customize** if you'd like to select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by selecting **Install**.

5.  When it finishes, select **Finish**.

### Step 3: Verify installation:

Open your favorite command-line interface (CLI) tool or Terminal and enter the following:

    node -v  

The system should display the Node.js version installed on your system. You can do the same for NPM:

    npm -v

## Installing for Linux

Linux has many flavors - here is our favorite \"How to guide\" on installing Node.js for your Linux machine. <https://upstack.co/knowledge/how-to-install-node-js-on-linux>

# Important dependency note

Mock Firebolt® (MFOS) requires that your client app import 0.6.0-alpha.1 or later of the Firebolt® SDK.

If you use an older version of the SDK (e.g., 0.5.3), no traffic will make it from the SDK to the Mock Firebolt®.

# SDK support

Mock Firebolt® OS supports these Firebolt® SDKs: **core**, **manage**, **discovery**.

By default, only the core SDK is enabled, meaning if you try to make calls to methods in the other SDKs, MFOS will display an error.

This default mode is appropriate for app developers developing third-party content apps that don't need (nor get) the permissions necessary to use the other SDKs.

For developers building \"operator apps\" / \"search and discover apps\" which need one or more of these SDKs, when running the Mock Firebolt® server, you can pass flags like `--manage` and/or `--discovery` to enable the specific SDK(s) desired[^1].

# Getting Started - Get the Mock Firebolt® on your machine

### Step 1 - Clone the Git repository

1.  Set your directory where you want to clone the repositories you'll need. You can name the local folder whatever you'd like.

2.  Clone the Mock Firebolt® repository from Github: <https://github.com/rdkcentral/mock-firebolt>

    1.  Clone it via GitHub desktop

![clone github repo](./images/clone-github-repo.jpg)

1.  Clone these two repositories using the same method.

    1.  `git clone https://github.com/rdkcentral/firebolt-openrpc.git`

    2.  `git clone https://github.com/rdkcentral/firebolt-core-sdk.git`

2.  Use your CLI to change your directory to Mock Firebolt® OS (MFOS) using the command `cd [filepath]\mock-firebolt-os`.

The file structure should place the Firebolt® Mock repo alongside the Firebolt® Core SDK and Firebolt® Open RPC repos.

### Step 2 - Start the Mock Firebolt® server

1.  Use the CLI command `cd server` to start the Mock Firebolt® server (if you're running locally).

        cd server

2.  Run the one-time install command(s) to clean, create, and build a sub-directory.

        npm install

        npm run clean

    This command will build the Core Firebolt® SDK:

        npm run build:core

    This command will build the source code within your project:

        npm run build:mf

### Step 3 - Run the Server

1. In your terminal window or PowerShell open a new window/tab respectively. Run the command

   ```
   cd [filepath]\mock-firebolt
   npm run dev
   ```

2. Now mock OS is up and running.

   ```
   cd cli
   npm install
   cd src
   node cli.mjs --[commands]
   ```



# Commands for Firebolt® Mock OS

To get the commands in your terminal window use the following

```powershell
node cli.mjs --help
```

| Command                                                      | Intent                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| node cli.mjs --help                                   S      | Use this to pull up the how to use info                      |
| node cli.mjs --user <userId>  ...(see below)...              | Target the given user; Overrides the .mf.config.json file, if present |
| node cli.mjs --port 3333 ...(see  below)...                  | If running Mock Firebolt® on a non-standard port              |
| node cli.mjs --quiet ...(see below)...                       | Don't emit command summary text; helpful for exporting state |
| node cli.mjs --health                                        | Performs health check on Mock Firebolt®                       |
| node cli.mjs --state                                         | Asks Mock Firebolt® to dump its state; handy for debugging    |
| node cli.mjs --revert                                        | Go back to the way things were when server started (w.r.t. state) |
| node cli.mjs --latency 0                                     | Set min and max latency values to given value                |
| node cli.mjs --latency 50 --latency  100                     | Set min and max latency values to given values; min 1st, max 2nd |
| node cli.mjs --method device.type  --latency 3000            | Set min and max latency values to given value for given method |
| node cli.mjs --method device.type  --latency 2500 --latency 3500 | Set min and max latency values to given values for given method; min 1st,  max 2nd |
| node cli.mjs --mode default                                  | Set mode to DEFAULT; mock overrides used first, OpenRPC examples second |
| node cli.mjs --mode box                                      | Set mode to BOX; Only OpenRPC examples used/returned. Overrides unused |
| node cli.mjs --method account.id --result  "'111'"           | Set result for given method the next time it is called       |
| node cli.mjs --method device.id --errCode  -32888 --errMsg "Sad day for you" | Set error code & msg for method                              |
| node cli.mjs --upload  ../examples/slow.json                 | Use this to upload information to the Hello World App.       |
| node cli.mjs --event  ../examples/device-onDeviceNameChanged1.event.json | Send events (methods, result keys expected)                  |
| node cli.mjs --sequence  ../examples/events1.sequence.json   |                                                              |

Note: You can also use commands that look like: `./mf.sh  --help`

# Conclusion

Congratulations, you set up Mock Firebolt® to test your app!

You now know how to:

1.  Clone the Mock Firebolt® repo.

2.  Set it up and connect Mock Firebolt® to your app

3.  Get real-time values from your app when it does something

To continue learning more about Firebolt® check out our [API](https://developer.comcast.com/firebolt/core/sdk/latest/api/) docs and our [Quickstart](https://developer.comcast.com/firebolt/core/sdk/latest/docs/quick-start-guide/) guide.

[^1]: Note of course that ultimately, when running on a real device, your app will only have whatever permissions it has been given.
