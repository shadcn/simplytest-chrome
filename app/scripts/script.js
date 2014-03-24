(function ($) {
  // If project has releases.
  if ($('.view-project-release-download-table').length) {
    if (url = window.location.href) {
      // Get the current project name from the url.
      var name = getProjectNameFromURL(url);

      // Add table headers.
      $('.view-project-release-download-table table thead tr').each(function() {
        $(this).append('<th>Test</th>')
      });

      // Add link for simplytest.
      $('.view-project-release-download-table table tbody tr').each(function() {

        // Get the release version.
        var version = $(this).find('.views-field-field-release-version').text().trim();
        var simplytestURL = getSimplytestURL(name, version);

        // Build the html to display.
        var link = '<a href="' + simplytestURL + '" class="simplytest">Simplytest</a>';
        var html = '<td class="views-field">' + link + '</td>';

        $(this).append(html);
      });
    }
  }

  // Performs a regex match to get a project name from the url.
  function getProjectNameFromURL(url) {
    if (match = url.match(/\:\/\/drupal\.org\/project\/([a-z0-9\_]*)/m)) {
      return match[1];
    }
  }

  // Returns a simplytest link.
  function getSimplytestURL(name, version) {
    return 'http://simplytest.me/project/' + name + '/' + version;
  }

})(jQuery);
