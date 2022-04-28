const config = {}

config.express = {
  port: process.env.EXPRESS_PORT || 8000,
  ip: '127.0.0.1'
}

config.api = {
  version: 'v2'
}

module.exports = config