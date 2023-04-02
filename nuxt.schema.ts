export default defineNuxtConfigSchema({
  appConfig: {
    /**
     * Arch theme configuration.
     *
     * @studio-icon material-symbols:docs
     */
    aalp: {
      screens: {
        $schema: {
          type: 'array',
          required: ['title', 'icon'],
          items: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                description: 'Title of the page',
              },
              icon: {
                type: 'object',
                required: ['path', 'type'],
                properties: {
                  carousel: {
                    type: 'boolean',
                    default: true,
                    description: 'Show icon in carousel',
                  },
                  path: {
                    type: 'string',
                    description: 'Path to the icon',
                  },
                  type: {
                    type: 'string',
                    description: 'Type of the icon',
                  },
                },
              },
              images: {
                type: 'array',
                items: {
                  type: 'string',
                },
                description: 'Path to the screens images',
              },
            },
          },
        },
      },

      /**
       * Social links
       *
       * Will be used in AppSocialIcons component.
       *
       * @studioIcon material-symbols:share-outline
       */
      socials: {
        $schema: {
          type: 'array',
          items: {
            type: 'object',
            required: ['title', 'icon', 'url'],
            properties: {
              title: {
                type: 'string',
                description: 'Title of the social network',
              },
              icon: {
                type: 'string',
                description: 'check https://icones.js.org/ for icons',
              },
              url: {
                type: 'string',
                description: 'URL when clicking on the link',
              },
              color: {
                type: 'string',
                description: 'Color when hover on the link',
              },
              target: {
                type: 'string',
                default: '_blank',
                description: 'Target attribute of the link',
              },
            },
          },
        },
      },
    },
  },
})
