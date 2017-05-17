(() => {
  var container = document.getElementById('projectMemberList');
  var imagePath = '/wp-content/themes/greenglobal-v2/dist/images/widgetimage/People/';
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
  if (container && arr.length === 4) {
    var alias = arr[3];
    var members = PPSW.getProjectMembers(alias);
    if (members.length > 0) {
      var s = '';
      members.forEach(function(mem) {
        var name = mem.person;
        var avatar = imagePath + mem.image;
        var role = mem.role;
        s += template.replace('{{avatar}}', avatar);
        s += s.replace('{{name}}', name);
        s += s.replace('{{role}}', role);
      });
      container.innerHTML = s;
    }
  }
})();
