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
