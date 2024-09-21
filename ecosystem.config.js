module.exports = {
  apps: [
    {
      name: 'next-app',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      exec_mode: 'cluster',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '700M',
      env: {
        NODE_ENV: 'production',
      },
      time: true,
    },
  ],
};
