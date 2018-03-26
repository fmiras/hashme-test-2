# Hashme Test 2

Repo of Hashme recruting test #2

## Installation
First follow the instructions to run the backend server on [this repo](https://github.com/fmiras/hashme-test-1)

Then clone the repo on your work directory and create a file on the root project folder named `config.json` with the configuration of the backend server, here's an example:
```json
{
  "API_URL": "http://172.20.0.19:3000"
}
```
Make sure to use the IP v4 private network address or a public one instead of localhost, because fetching will be made from the mobile device.


Then open the terminal on the root project folder and run the following commands:
```bash
npm install
npm start
```
The command line will load the app assets and show you a QR code to scan with your mobile device. You will need to download [Expo](https://expo.io) from the store and scan this QR code to try the app

Note: this project was only tested on *iPhone X* so it might be some bugs on other devices

## Usage
To use a compiled version of the application run on the same directory
```bash
npm run build
```

This will output an `.apk` file for Android.

The application has 2 screens, the hotel list and the detailed hotel as shown on the following screenshots:
![screenshot](https://i.imgur.com/bvLO6aJ.jpg)

![screenshot](https://i.imgur.com/D30bXe1.jpg)
