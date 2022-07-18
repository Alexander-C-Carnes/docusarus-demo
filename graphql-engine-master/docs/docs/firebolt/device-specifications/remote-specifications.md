# Remote Specifications

Platform compliant devices will use multiple types of remotes with varying layouts. All users have access to a common set of remote inputs, but most will not have access to all possible remote functions depending on the type of remote they have. You should develop with all kinds of remotes in mind as many users find the limited-access keys valuable. 

For example, one type of remote has a number pad whereas another remote does not. The users with the number pad remote may enter in the corresponding remote keys while other users would need to navigate through the on-screen keyboard with their remotes' D-pads.

## Requirements
### Text & Numeric Inputs
The D-pad is required if there are any numeric or text inputs required from your users. You will have to provide an in-app soft keyboard which can be navigated via the D-pad or you can use the Onscreen Keyboard. To learn more about implementing the Onscreen Keyboard, you can visit our [keyboard](/api/keyboard/) API documentation.

### Media Playback
Not all remotes include the `fast forward`, `rewind`, and `play/pause` keys because users have become use to simplistic navigation using the d-pad. If your app has media playback, then you must cater to the d-pad playback controls to handle these requests. 

The `left` and `right` key must allow your users to skip forward or backward during media playback, and the `select` key must be able to start, pause, or resume playback. These should be thoroughly tested along with the traditional media control keys to ensure the experience is seamless across the board.

## Key Mapping

Each remote key has a corresponding Javascript key code, however not all remotes have the same keys. Additionally, these keys are not guaranteed to be available in all future remote designs, but you can safely assume the D-pad, `select`, and `last/back` keys will remain. 

The key-mapping tables below will provide you with all the necessary information to support key-presses within your app. The remote keys which are not listed below are not available for use within app development since they are reserved for our platform-based functionality (ie: `power`, `volume up`, `volume down`).

### D-Pad
The directional pad (D-pad) is most commonly used for navigation within your content libraries, playback controls, and on-screen keyboards.

| Remote Key | Desktop Key | Javascript Key Code | Availability |
| :------- | :------- |:------- |:------- |
| Left | Left | 37 | All remotes |
| Up | Up | 38 | All remotes |
| Right | Right | 39 | All remotes |
| Down | Down | 40 | All remotes |
| Select/OK | Enter | 13 | All remotes |


### Number Pad
The 0-9 Number Pad can be configured for use within your app for actions such as parental control locks, credit card input, and numeric shortcuts.

| Remote Key | Desktop Key | Javascript Key Code | Availability|
| :------- | :------- |:------- |:------- |
| 0 | 0 | 48 | Some remotes
| 1 | 1 | 49 | Some remotes
| 2 | 2 | 50 | Some remotes
| 3 | 3 | 51 | Some remotes
| 4 | 4 | 52 | Some remotes
| 5 | 5 | 53 | Some remotes
| 6 | 6 | 54 | Some remotes
| 7 | 7 | 55 | Some remotes
| 8 | 8 | 56 | Some remotes
| 9 | 9 | 57 | Some remotes

### Media Controls
The media controls are not available on every device. These are beneficial to use within your app for those who have these remotes, but since not all users have access to these keys, you must allow users to control media using the d-pad as well (see requirements at the top of this document).

| Remote Key | Desktop Key | Javascript Key Code | Availability|
| :------- | :------- |:------- |:------- |
| Play/Pause | - | 179 | Some remotes
| Rewind | - | 227 | Some remotes
| Fast Forward | - | 228 | Some remotes

### Additional Keys

| Remote Key | Desktop Key | Javascript Key Code | Availability|
| :------- | :------- |:------- |:------- |
| Last | Backspace | 8 | All remotes | 
| Page Up | PGUP | 33 |  Some remotes |
| Page Down | PGDN | 34 | Some remotes |
| Play/Pause | - | 179 | Some remotes
| 🔴 Red | - | 403 | Some remotes
| 🟢 Green | -  | 404 | Some remotes
| 🟡 Yellow | - | 405 | Some remotes
| 🔵 Blue | - |406 | Some remotes

## Responding to Keys
In order for your app to respond to remote key presses, simply listen for the standard [W3C KeyboardEvent](https://www.w3.org/TR/uievents/#interface-keyboardevent) via `keydown` and `keyup`:

```javascript
window.addEventListener('keydown', keyboardEvent => {
    console.log(keyboardEvent.keyCode)
})
```

Many frameworks provide more robust keyboard management APIs that are built on the standard W3C KeyboardEvent, and they will work just fine with our platform.