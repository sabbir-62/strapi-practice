'use strict';

module.exports = plugin => {
    // Get current `MenuItem` attributes.
    const defaultAttrs = plugin.contentTypes['menu-item'].schema.attributes;
    const customAttrs = {
        title: {
            type: 'string',
        },
        status: {
            type: 'enumeration',
            enum: [
              'publish',
              'unpublish',
            ],
          },
    };

    // Extend the `MenuItem` content type with custom attributes.
    plugin.contentTypes['menu-item'].schema.attributes = {
        ...defaultAttrs,
        ...customAttrs,
    };

    return plugin;
};