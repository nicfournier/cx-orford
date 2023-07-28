export default defineAppConfig({
  alpine: {
    title: 'CX Orford',
    description: 'Championnat québécois 2023 de cyclocross et finale de la Coupe Québec',

    image: {
      src: '/cx-orford-header.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },

    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/cx-orford-header.png', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },

    footer: {
      credits: {
        // possible value are : true | false
        enabled: false,

        // our github repository
        repository: 'https://www.github.com/nuxt-themes/alpine',

        text: 'CX Orford'
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Suivez nous' // string that will be displayed in the footer (leave empty or delete to disable)
    },

    socials: {
      twitter: '',
      instagram: 'https://www.instagram.com/classiqueasimon/',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      },

      facebook: 'https://www.facebook.com/people/La-Classique-%C3%A0-Simon/100092620497035/'
    },

    form: {
      successMessage: 'Message sent. Thank you!'
    },

    backToTop: {
      text: 'Retour au sommet'
    }
  }
})