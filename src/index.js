function $$(id) {
  return document.getElementById(id);
}


function show(id) {
  $$(id).style.display = "block";
}
function hideElement(el) {
  el.style.display = 'none';

}

function hideAllPages() {
  var pages = document.querySelectorAll(".page-block");
  pages.forEach(hideElement);

}

function initMenu() {

  var links = document.querySelectorAll("#top-menu-bar a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      $('-page-block').hide();
      var page = this.getAttribute('data-page');
      $('#'+page+"-page").fadeIn();
    };
  }
}
function initSkillsPage() {
  var skills = [
    { name: 'js', endorsments: 7, endorsedBy: 'Andrei' },
    { name: 'HTML', endorsments: 6, endorsedBy: '' },
    { name: 'css', endorsments: 2, endorsedBy: '' }
  ];
  var resultList = document.querySelector('#skills-page');

  var listItem = skills.map(function (skill) {
    var endorsedBy = '-Endorsed by';
    if (skill.endorsedBy == "") {
      endorsedBy = "";
    }
    var name=skill.name.toUpperCase();
    return `<li>${name} 
    <span style="color: gray">-${skill.endorsments} ${endorsedBy}</span>
     ${skill.endorsedBy}
    </li>`;
  });

  resultList.innerHTML = listItem.join('');
}
initMenu();
show('skills-page');
$('#skills-page').show();
initSkillsPage();
