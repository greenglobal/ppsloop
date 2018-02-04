// utils / translate

const dict = {
  en: {
    team: 'Team',
    projects: 'Projects',
    expertise: 'Our expertise',
    member: 'member',
    members: 'members',
    more: 'more',
  },
  ja: {
    team: 'チーム',
    projects: 'プロジェクト',
    expertise: '当社の専門知識',
    member: '人のメンバー',
    members: '人のメンバー',
    more: 'その他',
  },
};

export let translate = (lang = 'en') => {
  return dict[lang] || dict['en'];
};
