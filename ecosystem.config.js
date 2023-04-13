module.exports = {
    apps: [
      {
        name: 'api',
        script: 'npm',
        args: 'run start',
        // watch: true, // automatically restart the server for file changes
        // max_memory_restart: '450M',
        // env: {
        //   NODE_ENV: 'production',
        // },
      },
    ],
  }