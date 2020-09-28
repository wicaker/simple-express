module.exports = {
    host: 'localhost',
    port: 3000,
    authentication: {
      secret: 'sup3rs3cr3t',
      strategies: ['jwt', 'local'],
      path: '/authentication',
      service: 'users',
      jwt: {
        header: {
          typ: 'access'
        },
        expiresIn: '1d'
      },
      local: {
        entity: 'users',
        usernameField: 'email',
        passwordField: 'password'
      },
    },
  };