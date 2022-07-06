---  
title: App Requirements
---

# App Requirements
Below is a list of various app requirements which must be met. These requirements allow you to deliver the best app experience possible while also providing us with key information to ensure the quality your users expect is being met.

## Operational Requirements
We use these metrics to monitor reliability and performance to ensure your user-expected quality of performance is met.

| Metric                           | Definition     | Methodology | Requirement |
|:---------------------------------|:---------------|:-----------:|:------------|
| Time To Minimally Useable (TTMU) | The time from when the app starts loading into the WPE runtime until the app calls the [`Lifecycle.ready()`](/api/lifecycle/#ready) method. (See *Launch Completed* metric below.) | [`Lifecycle.ready()`](/api/lifecycle/#ready)<br/>-<br/>When app is launched | 95% of all launches must be less than 10s over a 24hr period, with a minimum of 1000 launches. |
| Error Free Session Rate (EFSR)   | The number of Error Free Sessions divided by the total number of sessions over a given 4hr time period.<br/><br/>An error free session is any app session in which there were zero user-detectable errors (inclusive of errors which do not display an error message), which are tracked via [`Metrics.error()`](/api/metrics/#error). | Error-free session count  <br/>&divide;<br/> Total session count | Greater than 95% over a 4hr period (min 1000 launches) |
| Errors Per Content Minute (EPCM) | The total number of user-detectable errors per minute of content viewed by users. <br/><br/>This is an aggregated metric and not measured on a per-session basis. | [`Metrics.error()`](/api/metrics/#error) count<br/> &divide; <br/> sum(&nbsp;[`Metrics.stopContent()`](/api/metrics/#stopContent) - [`Metrics.startContent()`](/api/metrics/#startContent)&nbsp;) | Less than 0.05 over a 4hr period (min 1000 launches) |

## Reporting Requirements
As an app partner, it is your responsibility to resolve all issues related to your app reported by us or your users. Your users exist all around the world, so you must provide 24/7 support 365 days per year with no exceptions.

| Metric    | Definition   | Requirement |
|:-------------|:---------------|:------------|
| Launch Completed | When your application has loaded and is able to handle user inputs. | App must call [`Lifecycle.ready()`](/api/lifecycle/#ready) method when app has become usable.
| Error Detected | The moment your app detects an error occurred which a user can discover | App must call [`Metrics.error()`](/api/metrics/#error) method upon detecting an error.
| User Interaction | Whenever one of your users starts or stops interacting with content (playing a game, listening to music, watching a video, etc.) | The corresponding [`Metrics.startContent()`](/api/metrics/#startcontent) or [`Metrics.stopContent()`](/api/metrics/#stopcontent) method must be called to indicate that the interaction has started or stopped.
| Incident Response Time | The time it takes to communicate to us indicating you have allocated resource to investigate or resolve an issue after being made aware of it (internally or externally). |   You must respond to any issues within the priority level requirement listed in the **Incident Priority Levels** section below.
| Incident Resolution Time | The time it takes to fully resolve the issue after initially being made aware of it (internally or externally). | You must resolve any issues within the priority level requirement listed in the **Incident Priority Levels** section below.

## Incident Priority Levels
Your users want to have the best experience possible, which is why you must respond and resolve issues quickly. The priority levels below outline the required response and resolution times based on the severity of the issue.

| Priority | Response Time | Resolution Time | Priority Definition |
| :--- | :--- | :--- | :--- |
| P0 - Critical | 30 minutes | 4 hours | App is completely unusable or essential features/functionalities do not work. |
| P1 - Urgent | 1 hour | 8 hours | Non-essential features/functionalities are not fully functional, significantly hindering app usage; issues that could weaken system integrity over a period of time; problems that can be ‘worked’ around in the short term but cause significant operational disruption in the long term. |
| P2 - Important | 1 Business Day | 2 Business Days | Assistance required for technical or functional features of your app. Problems that exist, which cause minor operational difficulties within the app. |
| P3 - Monitor | 2 Business Days | One week | General queries. Undefined problems that may cause minor operational difficulties. Problems that require additional research and monitoring, collaborating with your team and the platform's team to define and resolve the issue. |
| P4 - Information | One week | When commercially feasible | Comments or suggestions on services, technical features, design or other topics. |

## Functional Requirements
These requirements are designed for your app to function properly on all devices and allow users to view your content.

| Feature | Requirement |
| :----- | :--- |
| Response Time | The time it takes for your app to show a response to a user key-press must be less than 100ms. For example, the user selects 'play' and it either starts playing or a 'loading' icon appears within 100ms. |
| Playback Start | The amount of time between a user requesting playback and the asset starting playback must be less than 3 seconds. |
| Device Support | Your app must support all platform compliant [devices and their remotes](./device-specifications.md). |
| Screen Resolution | Your app must support rendering at both 720p and 1080p screen resolutions. |
| Memory Usage | Your app must not exceed 190MB of RAM. Some devices which support 4k video are able to handle up to 250mb, but your app must support 190MB as well so that all devices are compatible with your content. |
| Local Storage | Your app must be able to operate without local storage as a starting point. |
| IP Stack | All end points must be reachable by IPv4 & IPv6. Many of the platform devices are IPv6 only which means they cannot connect directly to any service that does not have an IPv6 address. Any services your app may use, including those used to monetize your advertising inventory, must be able to communicate with the platform through both IPv6 & IPv4. |
| HTTPS | HTTPS for all connections (including those related to data and content delivery). |
| Web Standards | Your app should follow W3C standards, see [www.w3.org](https://www.w3.org/) for more info |
| Deep Linking | Your app must support deep linking via the [Lifecycle `navigateTo` event](/api/lifecycle/#navigateto). |
| Accessibility | Your app must meet WCAG AAA compliance standards as well as the legal requirements for closed captioning, see [Accessibility](./accessibility.md) documentation for more info. |

## Player Compatibility
These are the supported formats for multimedia content on all platform compliant devices. The devices will not be able to play incompatible content.

| Feature | Supported Formats |
|---------|-------------------|
| DRM     | `Playready 2.5` &<br/>`Widevine 1.14 Service level 1` |
| Audio Codecs | `mpeg`, `eac3`, & `mp3` |
| Video Codecs | `AC3`, `E-AC3`, `MPEG1`, `MP3`, `AAC`, & `LPCM` |

## Search and Discovery Integration
In order to have your app's content fully surfaced in aggregated experiences, the Firebolt Search and Discovery APIs must be integrated.

| Feature             | Description |
| ------------------- | ----------- |
| [Integrated Metadata](./metadata-integration.md) | Enables your app's content to have a deeper and more prominent exposure in search and discovery experiences. |
| [Deep Links](./deep-linking.md) | Enables your app to be launched or brought to the foreground with a specific entity, search, player, or other section already loaded. |
| [Voice Commands](./voice-commands.md) | Allows your users to speak to their remotes to navigate, search, and control their experience via voice. |
