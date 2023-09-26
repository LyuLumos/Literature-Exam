export default defineAppConfig({
  docus: {
    title: 'Literature Exam',
    description: 'Literature Exam of CUC.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'lyulumos/Literature-Exam',
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'Literature-Exam',
      owner: 'lyulumos',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: false,
      exclude: [],
      fluid: true
    }
  }
})
