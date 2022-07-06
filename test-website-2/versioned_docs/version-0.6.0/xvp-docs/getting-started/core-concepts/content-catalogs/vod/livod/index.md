---
sidebar_position: 1
title: LiVOD
tags:
  - Getting started
  - Core Concepts
  - Content Catalogs
  - VOD
---
# LiVOD

| Status        | DRAFT          |
|---------------|----------------|
| Last updated  | 06/10/2022     |
| Author        | Patricia Motta |
| Reviewers     | Lindsay Mack   |

a.k.a Live VOD - it models live content as on demand.

LiVOD enables OTT Live Content to be discoverable and tuned to throughout the experience, consistent with other content types.
It is the primary content catalog to populate "L"ive and Upcoming" in Canned Searches.

It Surfaces in XVP as VOD results and a VOD-like WatchOption, but behaves like linear (minus the grid).

LiVOD follows Merlin VOD-Program metadata model.

Supported on most Discovery APIs such as WatchOptions, Search, Playlist, PlayNow and any Browse.

### Feature Support
* Searchable via Text and Voice
* Browse/Canned Search
* Can be returned as “Upcoming” (only VOD variant that permits this)
* Entity Metadata and Show Pages
* Add to MyList and discover in PlayNow when currently airing
* Supports overrun cases
* No transactional component to LiVOD's - or any upsells pointing to these.

LiVOD has some nuances.

* It has additional date/time fields for metadata displays.
* Content can be discoverable before and after availability window (via opt-in parameters on Discovery and WatchOptions)
* Content can be discoverable when not tunable – Status and StreamingClass inform client how to handle
* Live sports subject to status changes, delays and overrun

Interesting fact:

All live and sports content on FLEX is app based and discoverable as liVOD.

### Playback
LiVOD is live streaming content for some portion of its availability window.

Deeplinks can point to a “static” locator or be generated per live event.

## Index
* [Design](#design)
* [Streaming Classes](#streaming-classes)
* [Challenges and considerations](#challenges-and-considerations)
* [Notes](#notes)
* [References](#references)

## Design
There are slight differences on the handling of LiVOD between WatchOptions vs other Discovery APIs.
### API Parameters
* [contentCatalogTypes](#content-catalog)
* [airingType](#airing-type)
* [includeOutOfWindowLiVod](#includeoutofwindowlivod)
* [livodType](#livod)
* [f2m](#f2m)
* [onNow & upcoming](#onnow--upcoming)
* [windowStart & windowEnd](#windowstart--windowend)
* [displayStartDate](#displaystartdate)
#### Content Catalog
In XVP Watch Options, `LiVOD` is treated as VOD - there is no dedicated catalog.
It's returned by default.

On all other APIs, `LiVOD` is a dedicated content catalog - separate from VOD.
Use `contentCatalogTypes=livod`.
#### Airing Type
`AiringType` values For `LiVOD` are same as Listings - `Live`, `Taped`, `Repeat`, `New`.

Must enable Browse's `enable_livod_airtype_filtering` feature flag to allow filtering on LiVod airingType.
#### IncludeOutOfWindowLiVod
In WatchOptions is possible to get LIVOD assets that are out of availability window - along with sufficient status messaging so that
clients can message the user appropriately.
#### LivodType
Similar to `vodType`, filters LiVOD showings by offer's purchase category.
#### f2m
Supports the ability to filter LiVod content based on the value of `SubscriberAccess.isWatchable` flag.
Whenever `SubscriberAccess.isWatchable=true`, content is considered free to the subscriber in context.
#### onNow & upcoming
Filters LiVOD showings based on whether it is airing now or in the future.
See parameter definition for more details on how showing availability window is computed.

**#tbd** link to parameter definition
#### windowStart & windowEnd
Filters LiVOD showings based on start or end time of the airing.
#### displayStartDate
Browse Airtime Sort on `VOD.displayStartDate`

Sorts programs based on their earliest showing start time using linear as priority.  
For series, the showings of child episodes will be considered.

Must be last when used as secondary sort field.
For LiVOD programs, it sorts based on their earliest displayStartDate.
### Schema
* [LiVOD Schema](/swagger-ui.html?json=Architecture/Specifications/components-vod-livod.yml)
#### SubscriberAccess
* [SubscriberAccess Schema](/swagger-ui.html?json=Architecture/Specifications/components-subscriber-access.yml)

## Streaming Classes
* [OTT Scheduled Stream](#ott-scheduled-stream)
* [Ephemeral Streams](#ephemeral-streams)
* [OTT VOD](#ott-vod)
* [Non-Scheduled Stream](#non-scheduled-stream)
* [Spontaneous Stream](#spontaneous-stream)

### OTT Scheduled Stream
OTT scheduled event on a continuous Deeplink/Stream.

These are continuous streams that can't be in the grid, like Sky News is only discoverable as LiVOD on X1.

4K events, that can't be in the grid and aren't continuous - need to be scheduled individually

Continous linear streams for apps (Peacock, Pluto, Xumo), where we treat each listing as a LiVOD bc we don't have support for launching to apps from all linear discovery points yet
#### Examples
* AppleTV
* live 24x7 MLB 4k channels
* Friday Night Baseball “pop-up” events on
* Pluto, Xumo, FASTs
#### Attributes
* Merlin ProgramId
* No Linear Listing presence for metadata/discovery
* Status: N/A
* StreamingClass: ScheduledStream
#### Continue Watching & Resume Points post-event
* Tunes to currently airing point in stream

### Ephemeral Streams
No continuous deeplink/stream
#### Examples
* ESPN3 and other pop-up streams, like Peacock Sports (SLEs) - single live events
* DAZN
#### Attributes
* Merlin ProgramId
* No No continuous deeplink/stream
* Status: Yes
* StreamingClass: EphemeralStream
#### Continue Watching & Resume Points post-event
* Not tunnable

### OTT VOD
Replay (for a LiVOD) or App VOD (or iVOD)
#### Examples
* NBCSportsApp, Peacock, AppleTV+ MLB
* Premiums, BBC Restart
#### Attributes
* Merlin ProgramId
* Status: N/A
* StreamingClass: OTTVOD
* Deeplink always available in-window
#### Continue Watching & Resume Points post-event
* Tunes to start/resume point

### Non-Scheduled Stream
Non-scheduled, continuous.
#### Examples
* Sling, Amazon Live, YouTube Live
#### Attributes
* No Merlin ProgramId
* Continuous URL
#### Continue Watching & Resume Points post-event
N/A

### Spontaneous Stream
Spontaneous, no-coninuous.
#### Example
* Twitch
#### Attributes
* No Merlin ProgramId
* No Continuous URL
#### Continue Watching & Resume Points post-event
N/A

## Challenges and considerations
Discovering non-playble content:

* in "Continue Watching" experience - Launchpad, MyList, Last9 - due to the presence of a
resume point pointing to an expired LiVOD.
* Browse/Search may have an indexing gap when event timings changes.

The experience throws an error if something is in your history, and user tries to tune after it ended. Caches never refresh quickly enough to prevent it.
It's eventually consistent.

Balancing the risk of over-runs with concluded events (configurable per content partner).
For example, we auto-pad expirations for 4K and other live sporting events so that they’ll be discoverable in overtime.
Rapid takedown/graceful degradation of the experience when event actually ends.

Accurate metadata displays using LiVOD specific fields.

Messaging event status.

## References
This section is for internal use - not to be published.

* [LiVOD Slides](https://comcastcorp-my.sharepoint.com/:p:/g/personal/lmack200_cable_comcast_com/ESme-GH_9H1MhoyC9-GXsM0Bq4IhYBP8RlPcG8GgTiOt3w?e=0qf2cD&isSPOFile=1&params=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyOC8yMjA1MDEwMTAwOSJ9)
* [FLEX Live Rows](https://comcastcorp-my.sharepoint.com/:p:/g/personal/aobrie201_cable_comcast_com/EWrixPLsLx5JpTeU3R6maoYBnILxThgOFhZh0p41DZt_HQ?e=wAlB4x)
* [Realtime LIVOD updates: includeOutOfWindowLivod and subscriberAccess](https://ccp.sys.comcast.net/browse/CMPWM-2901)
* [Managing LIVOD realtime updates to event timing for ESPN](https://etwiki.sys.comcast.net/display/COMPASS/Managing+LIVOD+realtime+updates+to+event+timing+for+ESPN)
* [Matozzi's Livod Event Timeline Proposal](https://etwiki.sys.comcast.net/display/COMPASS/Livod+Event+Timeline+Proposal+2019)
* [Point in Time recap of how things came to be](https://etwiki.sys.comcast.net/display/COMPASS/First+Class+OTT+Roundup+-+LiVOD%2C+StreamingClass%2C+Non-Ingested+-+Feb+1%2C+2019)
* [LiVOD Event Timeline Proposal](https://etwiki.sys.comcast.net/pages/viewpage.action?spaceKey=COMPASS&title=Livod+Event+Timeline+Proposal+2019)
* [XStream LiVOD Support](https://etwiki.sys.comcast.net/display/AAE/LiVOD+Support+in+Xfinity+Stream)
