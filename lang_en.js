var lang = {
	page_name: 'TTSS Kraków',
	page_title: 'TTSS Krak\u00F3w - Real-time tram departures',
	page_title_stop_name: 'TTSS Krak\u00F3w - $stop - Real-time tram departures',
	
	map: 'Map',
	
	action_close: 'Close',
	action_expand: 'Expand',
	action_collapse: 'Collapse',
	
	enter_query: 'Enter stop name or vehicle number:',
	enter_stop_name_to_begin: 'Enter the stop name to begin.',
	select_stop_click_go: 'Select the stop and click "Go".',
	select_stop_type: {
		'b': '$stop (bus)',
		't': '$stop (tram)',
	},
	stop_name_placeholder: 'Stop name',
	go_button: 'Go',
	refresh_button: '\u27f3 Refresh',
	last_refreshed: 'Last refreshed: $time',
	loading: 'Loading...',
	no_data: 'Data unavailable',
	
	line_alert_pattern: 'Line $line: $alert',
	
	header_line: 'Line',
	header_direction: 'Direction',
	header_vehicle: 'Vehicle',
	header_time: 'Time',
	header_delay: 'Delay',
	header_lines: 'Lines',
	header_route: 'Route',
	header_carrier: 'Carrier',
	header_stop: 'Stop',
	
	boarding_sign: '>>>',
	unknown_sign: '?',
	
	time_now: 'just now',
	time_seconds_prefix: '',
	time_seconds_suffix: ' s',
	time_seconds_ago_prefix: '',
	time_seconds_ago_suffix: ' s ago',
	time_minutes_prefix: '',
	time_minutes_suffix: ' min',
	time_minutes_ago_prefix: '',
	time_minutes_ago_suffix: ' min ago',
	
	types: {
		v: 'Vehicle',
		b: 'Bus',
		t: 'Tram',
		s: 'Stop',
		sb: 'Bus stop',
		st: 'Tram stop',
		p: 'Stop point',
		pb: 'Bus stop point',
		pt: 'Tram stop point',
		l: 'Your location',
	},
	
	show_on_map: 'Show on map',
	select_feature: 'More than one feature was found. Select the proper one:',
	no_results: 'Nothing was found.',
	departures_for_stop: 'Click for stop departures (and not only this stop point).',
	departures_for_trams: 'Switch to tram departures.',
	departures_for_buses: 'Switch to bus departures.',
	
	tram_type_pattern: '$num $type ($floor)',
	high_floor: 'high floor',
	high_floor_sign: '\u2010\u00A0',
	high_floor_description: 'high-floor vehicle',
	partially_low_floor: 'partially low floor',
	partially_low_floor_sign: '*\u267F',
	partially_low_floor_description: 'partially low-floor vehicle',
	low_floor: 'low floor',
	low_floor_sign: '\u267F',
	low_floor_description: 'low-floor vehicle',
	
	status_departed: 'Departed',
	status_stopped: 'At stop',
	status_default: 'En route',
	status_delayed_4: 'Delayed 4′+',
	status_delayed_10: 'Delayed 10′+',
	
	help_click_for_schedule: 'Click on an entry in the departures timetable to see the vehicle\'s schedule.',
	help_legend: 'Legend:',
	help_text: 'Relative times (eg. 3 min) are real-time arrivals based on location data. Absolute times (eg. 8:01) are scheduled departures, shown when the vehicle cannot be located. "?" means unknown delay.',
	help_hover_for_more: 'Hover the icon for more details.',
	help_source: 'Source',
	help_license: 'License',
	
	error_title: 'Error occured!',
	error_request_failed: 'Internet request failed.',
	error_request_failed_status: 'Internet request failed with error: $status.',
	error_request_failed_connectivity: 'Request failed - please check your network connectivity.',
	error_new_version: 'Website has been updated, reloading...',
	error_refresh: 'Error! Refresh the page to update information.',
	error_location: 'Location failed.',
};
