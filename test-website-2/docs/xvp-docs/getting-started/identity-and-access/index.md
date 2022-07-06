---
sidebar_position: 1
title: Identity and Access
tags:
  - Getting started
  - Quick Start
  - Identity and Access
---

# Identity & Access

| Last updated | 06/08/2022 |
|--------------|------------|
| Author       | Sebstian Just |
| Reviewer     | ?!?        |

## Status
**[DRAFT]**
## Index
* [Overview](#overview)
* [Provisioning Devices](#provisioning-devices)
* [Security Model](#security-model)

---
## Overview
IDS related matters and how it overlaps with the concept of session in XVP.

---
## Provisioning Devices
* Web, Mobile, COAM, STBs
* [Web Browser Provisioning](https://internal-xvp-docs-staging.r53.aae.comcast.net/APIs/Session/provisioning-web/)

---
## Security Model
* SAT tokens - clients, capabilities
* SAT token in XVP requests
* Who fronts SATS API?
* Tokio & Titan
* DRM tokens for playback
  * DRM token data to execute XVP Rights Heartbeats
### Service-to-Service Access
* QXVP, VREX, BESTIE

---
## References
This section is for internal use - not to be published.

* [Authorization Strawman Proposal](https://internal-xvp-docs-staging.r53.aae.comcast.net/Platform/auth/Authorization/)
* [Security Design](https://internal-xvp-docs-staging.r53.aae.comcast.net/Platform/auth/security-design/)
* [Developer SAT authorization](https://internal-xvp-docs-staging.r53.aae.comcast.net/Platform/auth/developer-sat-authorization/)
* [How to Use SAT Token in XVP API Requests](https://internal-xvp-docs-staging.r53.aae.comcast.net/Platform/auth/sat_token_usage/)
* [Defining Service-specific SAT Capabilities](https://internal-xvp-docs-staging.r53.aae.comcast.net/Platform/auth/service-specific-sat-authorization/)
* [Auth References](https://internal-xvp-docs-staging.r53.aae.comcast.net/Architecture/Solutions/Authentication/)
* [Thoughts on Sessions and ARS references](https://etwiki.sys.comcast.net/pages/viewpage.action?spaceKey=TI&title=Thoughts+on+Sessions+and+ARS+references)
* [DRM authentication from XRE perspective](https://etwiki.sys.comcast.net/pages/viewpage.action?spaceKey=APPS&title=DRM+authentication+from+XRE+perspective)
* [Roles of AuthZ and AuthN Endpoints in a Micro-service Architecture](https://etwiki.sys.comcast.net/pages/viewpage.action?spaceKey=TI&title=Thoughts+About+the+Roles+of+AuthZ+and+AuthN+Endpoints+in+a+Micro-service+Architecture)
