module.exports = {
  base: '/',
  dest: 'dist',
  head: [
    ['meta', {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'}],
    ['meta', { name: 'robots', content: 'noindex' }]
  ],
  title: "猫のことば　メモ置き場",
  plugins: ['@vuepress/medium-zoom'],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/', items: [
        { text: '深淵の王墓', link: '/guide/royaltombs_of_abyss/' },
        { text: '深淵の古城', link: '/guide/old_castle_of_abyss/' }
      ]}
    ],
  }
}