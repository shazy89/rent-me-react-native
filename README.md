# RentMe 

Car rental app featuring multiple cars, customizable dates, schedule and manage bookings that will calculate the fare for customers.
Admin has the ability to manage the cars, upload images for new car postings, and review booking metrics reports.

# Usage and Features

RentMe is (SPA) car rental app where users can search for available cars on selected dates, check for prices and schedule a booking. Admin users can use tools for creating new available cars, 
 edit listings, upload images to listings and view reports on bookings.

# Prerequisites

# Backend

* Ruby on Rails
* PostgreSQL
* Cloudinary
* Active Record

# Frontend

* React
* React Native
* React Router
* Redux Thunk middleware
* AJAX

# Installing

After cloning this repo, first run the Rails server:

1. 
``` 
    cd rent-me-back-end
    bundle install
```
2. Database installation:

``` 
    rake db:create
    rake db:migrate
    rake db:seed 
```    
3. Run Rails server: rails s

   # Frontend web-app

 ```
      cd ..  
      cd rent-me-front-end
      npm install && npm start 
  ```    
  # Frontend mobile-app 

   ```
      cd ..  
      cd rent-me-react-native
      npm install && expo start 
 ``` 
  These instructions are for who wish to use the XCode or Android Studio simulators instead of a physical device with Expo.
  Keep in mind, emulators require a lot of RAM, so you may find that bundling and displaying code takes much longer than when using a physical device.
  The official Expo docs with some troubleshooting tips are available here:

  [Expo iOS Simulator](https://docs.expo.io/workflow/ios-simulator/?redirected) -
  [Expo Android Studio Emulator](https://docs.expo.io/workflow/android-studio-emulator/?redirected)

   ## macOS
   ### XCode iOS Simulator

    1. Download the full version of Xcode from the App Store. This is a huge file at around 7GB, so it can take a LONG time to download and install. It might seem like it it is stuck and not installing, but it is probably not.
    2. Launch XCode and agree to its terms. It will start installing more tools and software
    3. Eventually, you will get a "Welcome to XCode" screen
    4. In the top menu bar, click "XCode", then "Preferences" and then "Locations".
    5. Make sure that the "Command Line Tools" are installed and selected.
    6. In the top menu bar, click XCode, then "Open Developer Tool" then click "Simulator"
    7. This will open an iPhone simulator on your machine. If everything is working well, it should load a generic screen with a few apps.
    8. Go to your terminal and in your React Native project directory, `run npm start`
    9. When the Metro Bundler opens up in your browser, click on the option in the left sidebar to “Run on iOS simulator”
    10.If you navigate back to your iPhone simulator you should see an “Open In Expo” button. Click Open.
    11.This will launch the Expo application in the simulated device and run your bundled code. Eventually, it should load the `HomeScreen` screen.  