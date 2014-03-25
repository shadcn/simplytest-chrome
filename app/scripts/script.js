'use strict';

(function ($) {
  // If project has releases.
  if ($('.view-project-release-download-table').length) {
    var url = window.location.href;
    // Get the current project name from the url.
    var name = getProjectNameFromURL(url);
    if (name) {
      // Add table headers.
      $('.view-project-release-download-table table thead tr').each(function() {
        $(this).append('<th class="views-field-simplytest">Test</th>');
      });

      // Add link for simplytest.
      $('.view-project-release-download-table table tbody tr').each(function() {

        // Get the release version.
        var version = $(this).find('.views-field-field-release-version').text().trim();
        var simplytestURL = getSimplytestURL(name, version);

        // Build the html to display.
        var link = '<a href="' + simplytestURL + '" class="link-simplytest" target="_blank">Simplytest</a>';
        var html = '<td class="views-field-simplytest">' + link + '</td>';

        $(this).append(html);
      });
    }
  }

  // Performs a regex match to get a project name from the url.
  function getProjectNameFromURL(url) {
    var match = url.match(/\:\/\/drupal\.org\/project\/([a-z0-9\_]*)/m);
    if (match.length) {
      return match[1];
    }
    return false;
  }

  // Returns a simplytest link.
  function getSimplytestURL(name, version) {
    return 'http://simplytest.me/project/' + name + '/' + version;
  }

})(jQuery);
