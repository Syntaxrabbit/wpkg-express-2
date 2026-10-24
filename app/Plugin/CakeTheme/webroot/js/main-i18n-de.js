(function ($) {
	$.timeago.settings.strings = {
		prefixAgo: null,
		prefixFromNow: 'in',
		suffixAgo: 'her',
		suffixFromNow: null,
		seconds: 'weniger als eine Minute',
		minute: 'etwa eine Minute',
		minutes: '%d Minuten',
		hour: 'etwa eine Stunde',
		hours: 'etwa %d Stunden',
		day: 'ein Tag',
		days: '%d Tage',
		month: 'etwa ein Monat',
		months: '%d Monate',
		year: 'etwa ein Jahr',
		years: '%d Jahre',
		wordSeparator: ' ',
		numbers: []
	};

	$.fn.selectpicker.defaults = {
		noneSelectedText: 'Nichts ausgewählt',
		noneResultsText: 'Keine Ergebnisse für {0}',
		countSelectedText: function (numSelected, numTotal) {
			return numSelected === 1 ? '{0} Eintrag ausgewählt' : '{0} Einträge ausgewählt';
		},
		maxOptionsText: function (numAll, numGroup) {
			return [
				numAll === 1 ? 'Limit erreicht (max. {n} Eintrag)' : 'Limit erreicht (max. {n} Einträge)',
				numGroup === 1 ? 'Gruppenlimit erreicht (max. {n} Eintrag)' : 'Gruppenlimit erreicht (max. {n} Einträge)'
			];
		},
		selectAllText: 'Alle auswählen',
		deselectAllText: 'Auswahl aufheben',
		multipleSeparator: ', '
	};

	$.fn.ajaxSelectPicker.locale.de = {
		currentlySelected: 'Aktuell ausgewählt',
		emptyTitle: 'Auswählen und Suchbegriff eingeben',
		errorText: 'Ergebnisse konnten nicht geladen werden',
		searchPlaceholder: 'Suchen...',
		statusInitialized: 'Suchbegriff eingeben',
		statusNoResults: 'Keine Ergebnisse',
		statusSearching: 'Suche...',
		statusTooShort: 'Bitte geben Sie mehr Zeichen ein'
	};
})(jQuery);
