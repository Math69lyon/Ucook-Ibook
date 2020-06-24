version: 1.0
publish: app
services:
  app:
    environment:
      PORT: "5000"
      MONGODB_URL: mongodb://localhost/menber
      SECRET: mysecret
    build:
      type: dockerfile
      config: ./.runme/Dockerfile
    ports:
      - container: 27017
        public: 80
