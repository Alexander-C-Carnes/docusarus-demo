---
sidebar_label: FAQs
sidebar_position: 14
sidebar_class_name: green
---

# Frequently Asked Questions

### How do I get started?
Check out the [Quick Start Guide](./quick-start.md) for steps on how to begin. Also, review the [App Requirements](./app-requirements.md) page to understand what is needed to build an app on the application platform.

If you are looking for a more in-depth guide on how to build your first Firebolt® app, check out our ["Hello World Guide"](./hello-world-guide.md).

### How do apps on the platform work?
Apps on the platform are managed by our cloud infrastructure. When an app is launched by a user, the Platform presents a full-screen HTML view of the web app in the RDK browser. It passes key-presses from a customer's remote back to the web app. Utilizing Firebolt®, the Platform will manage aspects of the app such as lifecycle, metadata, and other API calls.

### What are the limitations of the platform browser?
The platform uses the RDK browser. The RDK browser is not a full-featured web browser. You cannot open multiple tabs or windows, or link to other websites.

### Does the platform host my app or content?
No, you must host your app at an IPv6 publicly accessible URL of your choosing.

### Do you support HTTP/2?
Not at this time.

### Is local storage available?
Local storage is not available at this time.

### Can I integrate with supported voice remotes?
Yes, any supported voice remote can be used to launch your app on the platform, and in certain cases, users can interact with your app by voice. See our [Voice Commands](./voice-commands.md) for more.

### Is DRM supported on the platform?
The platform supports the following DRM:
* Microsoft PlayReady 2.5
* Widevine 1.14 Service level 1

### Can I integrate my app's asset metadata with the platform?
Integrated asset metadata is not available to all apps. Review the [Integrated Metadata](./metadata-integration.md) page to learn more.
