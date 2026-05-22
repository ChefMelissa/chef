// Chef Melissa - small site JS
(function () {
  // Mobile nav toggle
  var btn = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Recipe archive search/filter
  var search = document.getElementById('recipeSearch');
  var category = document.getElementById('recipeCategory');
  var cards = document.querySelectorAll('[data-recipe-card]');
  function applyFilter() {
    var q = (search && search.value || '').toLowerCase().trim();
    var c = (category && category.value || '').trim();
    cards.forEach(function (el) {
      var text = (el.getAttribute('data-text') || '').toLowerCase();
      var cat = el.getAttribute('data-cat') || '';
      var matchQ = !q || text.indexOf(q) !== -1;
      var matchC = !c || cat === c;
      el.style.display = (matchQ && matchC) ? '' : 'none';
    });
  }
  if (search) search.addEventListener('input', applyFilter);
  if (category) category.addEventListener('change', applyFilter);
})();
