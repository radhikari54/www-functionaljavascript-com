function lookup(term, event) {
  event.preventDefault();

  var request = $.ajax({
    url: '/dictionary',
    type: 'POST',
    data: JSON.stringify({term: term}),
    success: function(data) {
      alert(data.definition);
      return false;
    }
  });

  request.fail(function(xhr, status, err) {
    alert(['glossary entry for', term, 'not yet available'].join(' '));
  });
}

$(document).ready(function() {
  $('.glossary-link').each(function() {
    var link = $(this);
    link.click(L(lookup, link.text()));
  });
});

