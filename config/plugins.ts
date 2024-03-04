
'use strict';

module.exports = {
  menus: {
    config: {
      maxDepth: 1,
      layouts: {
        menuItem: {

          text: [
            {
              input: {
                label: 'Title',
                name: 'title',
                type: 'text',
              },
            },
           
          ],

          select: [
            {
              input: {
                label: 'Status',
                name: 'status',
                type: 'select',
                options: [
                  {
                    label: 'Publish',
                    value: 'publish',
                  },
                  {
                    label: 'Unpublish',
                    value: 'unpublish',
                  },
                ],
              },
            },
        ],
        },
      },
    },
  },
};
