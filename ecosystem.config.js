module.exports = {
  apps : [
    {
      name: 'hic-admin',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
