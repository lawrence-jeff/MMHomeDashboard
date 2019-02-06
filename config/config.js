/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: 'MMM-Remote-Control'
		},
		{
			module: 'MMM-ModuleScheduler',
			config: {
				notification_schedule: [
				// TURN THE MONITOR/SCREEN ON AT 07:30 EVERY DAY
					{notification: 'REMOTE_ACTION', schedule: '00 6 * * *', payload: {action: "MONITORON"}},
				// TURN THE MONITOR/SCREEN OFF AT 22:30 EVERY DAY
				{notification: 'REMOTE_ACTION', schedule: '30 22 * * *', payload: {action: "MONITOROFF"}},
				]
			}
		},

		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_center"
		},
		{
			disabled: false,
			module: 'MMM-Carousel',
			position: 'bottom_bar',
			config: {
				transitionInterval: 30000,
				ignoreModules: ['clock', 'alert','MMM-Wallpaper'],
				mode: 'slides',
				slides: [
					['MMM-CalendarExt','currentweather','weatherforecast','calendar','MMM-Todoist'],
					['MMM-CalendarExt','currentweather','weatherforecast','calendar','MMM-Todoist']                                
				]
			}
		},
        {
			module: 'MMM-CalendarExt',
			position: "top_left",
			config: {
				system: {
					show: ['weeks']
				},
				views: {
					month: {
					position: "top_bar",
					showWeeks: 0,
					weekdayFormat: 'dddd',
					titleFormat : 'D',
					overTitleFormat : 'MMM D',
					monthTitleFormat: "MMMM",
					counts:2,
					ellipsis:20,
					},
					weeks: {
						position: "bottom_bar",
						weekdayFormat: 'dddd', //Full day name in header .ex Monday
						titleFormat: 'D', //Only day of month in each day box
						showWeeks: 0, //Hides the week number column
						counts: 4, //4 weeks shown
						},
					upcoming: {
					position: 'bottom_left',
					userelative: 0,
					limit:5,
					},
				},
			calendars: [
				{
				url: "webcal://outlook.live.com/owa//calendar***************************/calendar.ics",
				styleName: "style1",
				interval: 600000,
				}
			]
			}
        },
		{
            disabled: false,
			module: "calendar",
			header: "Family Calendar",
			position: "top_center",
			config: {
				maximumEntries: 8,
				maxTitleLength: 50,
				wrapEvents: true,
				fade: false,
				dateFormat: 'ddd M/D h:mm',
				fullDayEventDateFormat: 'ddd M/D',	
				tableClass: "medium",
				timeFormat: 'absolute',
				getRelative: 0,
				urgency: 0,
                                fetchInterval: 420000,  //10 minutes too low and you get 503s
				calendars:[
					{
						symbol: "calendar",
						url: "webcal://outlook.live.com/owa//calendar/******************************F/calendar.ics",
					}]
			}
		},
		{
            disabled: false,
			module: "currentweather",
			position: "top_right",
			config: {
				location: "St.Louis",
				locationID: "4407066",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "********************************",
				colored: "true",
				roundTemp: true,
			}
		},
		{
            disabled: false,
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				colored: false,
				fade: false,
				fadePoint: 1,
				tableClass: "medium",
				location: "St. Louis",
				roundTemp: true,
				locationID: "4407066",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "********************************"
			}
		},
		{
			disabled: false,
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: { // See "Configuration options" for more information.
				source: "firetv",
				slideInterval: 180 * 1000, // Change slides every 3 minutes
			maximumEntries: 30
			}
		},
		{
			module: 'MMM-Todoist',
			position: 'top_left',	// This can be any of the regions. Best results in left or right regions.
			header: 'Alexa Shopping', // This is optional
			tableclass: "medium",
			config: { // See 'Configuration options' for more information.data:image/jpg;base64,
					accessToken: '***********************************',
				maximumEntries: 60,
				updateInterval: 1*60*1000, // Update every 1 minutes
				projects: [ 2193000698 ], //this entry is mandatory
				fade: false,
				showProject: false,
				orderBy:"dueDateAsc",
					}
		},
		{
			module: 'MMM-Todoist',
			position: 'top_left',	// This can be any of the regions. Best results in left or right regions.
			header: 'To Dos', // This is optional
			config: { // See 'Configuration options' for more information.
					accessToken: '*****************************************',
				maximumEntries: 60,
				updateInterval: 1*60*1000, // Update every 1 minutes
				projects: [ 2193000632 ], //this entry is mandatory
				fade: false,
				showProject: false
					}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
