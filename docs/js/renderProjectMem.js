;(function() {
  var container = document.getElementById('projectMemberList');
  var imagePath = '/wp-content/themes/greenglobal-v2/dist/images/widgetimage';
  var template = [
    '<div class="team-member">',
      '<div class="avata">',
        '<img class="image" src="{{avatar}}" alt="{{name}}">',
      '</div>',
      '<p class="member-name"><a>{{name}}</a></p>',
      '<p class="member-description">{{role}}</p>',
    '</div>'
  ].join('');

  var arr = document.URL.split('/');
  if (container && arr.length === 5) {
    var alias = arr[3];
    var members = PPSW.getProjectMembers(alias);
    if (members.length > 0) {
      if (members.length > 4) {
        members = members.splice(0, 4);
      }
      container.innerHTML = members.filter(function(mem) {
        return mem.image && mem.person;
      }).map(function(mem) {
        var name = mem.person;
        var avatar = imagePath + mem.image;
        var role = mem.role || '';
        return template.replace('{{avatar}}', avatar)
                        .replace('{{name}}', name)
                        .replace('{{name}}', name)
                        .replace('{{role}}', role);
      }).join('');
    }
  }
})();
