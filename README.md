# MMHomeDashboard
Magic Mirror based home dashboard. This uses the magic mirror software but is setup as a home dashboard.
Features 
* Rotating screens (home screen, external camera view screen, countdown timer tied to Alexa)
* Calendar view
* Calendar details
* Current weather/forecast
* Clock

* Alexa synchronized todo list
* Alexa synchronized shopping list
* Scheduled sleep/wake of the monitor
* Remote control to push notifications from other systems (Home Assistant)
* Rotating screen support driven by home assistant (which is optionally driven by Alexa commands to "show screen XXX"
* Alerts sent from Home Assistant when the Frigate Add-in detects people or cars in the camera view. 

<img src="https://github.com/lawrence-jeff/MMHomeDashboard/blob/master/image.png" width="750"><br>


# Installing
* The script to install Magic Mirror and the modules is https://raw.githubusercontent.com/lawrence-jeff/MMHomeDashboard/master/MMInstallScript.sh
* Grab the config.js found in the config folder and copy to MagicMirror/config
* The config has variables embedded anything with ${VALUE} needs to be replaced with the correct password/APIKey/etc
* npm start from MagicMirror directory should fire it up

# Integrating with Home Assistant
Most of my HA integrations are focused on HA controlling the mirror more than the mirror displaying HA information.
* You can create services in HA that can be called to do various things
Example sections in https://github.com/lawrence-jeff/MMHomeDashboard/blob/master/HomeAssistant/Configuration.yaml
* Example automation included that leverages these services to create a picture alert and change the MM screen to a camera view

# Integrating with Home Assistant and Alexa
If you want to control your magic mirror via alexa (rotate screens, start countdowns) here is what I do
## To control what screen is displayed via Alexa
1) Add Node-Red to your HA Setup
2) Add the node node-red-contrib-amazon-echo
3) Create a hub, and add a device (call it Magic Mirror)
4) Discover the new device via Alexa
5) Create a node-red flow that maps device actions to MM Commands, for instace map turning on the 'Magic Mirror' to enabling the monitor via that API call
6) If you want to change the screen - map a brightness command to each screen - example 10% to screen 1, 20% to screen 2, etc
7) Create a routine to translate friendly commands into these device commands - so for instance create a routine that when it hears "Alexa show the home screen" that it sends the Magic Mirror device a 10% brigtness command (which you have mapped to the Carousel service to change to screen 1)
8) Sit back and enjoy using Alexa to control your magic mirror - you can use any command and basically map to any notification
## To display a visual countdown anytime someone sets a new alexa timer
1) Make sure the Alexa Media Player Skill is installed and working
2) Create  node-red flow that monitors the next timer on the echo you will use
3) Create a flow to detect changes to the timer - calculate the seconds till it goes off, then send it to the magic mirror using either a HA service or direct HTTP request to the MMM-StopWatchTimer module. THen as soon as you create a new timer, it will send the data to Magic Mirror and you will have a matching countdown on the screen
