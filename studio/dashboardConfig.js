export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e31615c420cd93698099f67',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kr8j55f4',
                  apiId: 'eeefc599-8b15-497e-9dbd-8561f24dc098'
                },
                {
                  buildHookId: '5e31615cfb48392d097c048c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1725z462',
                  apiId: '9a73400b-a5a0-46ad-b754-ad4a06262725'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alex-misch/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1725z462.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
