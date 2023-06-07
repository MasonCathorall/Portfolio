# A Dockerfile is a set of instructions on how to create a new environment

# base images: a starting point!
FROM node:latest AS build

# workdir creates and navigates to working directory
WORKDIR /app

# copy {context} {working directory}
COPY . . 

# gather dependencies and install
RUN npm install
# build the app!
RUN npm run build

# time for new environment
FROM nginx:latest AS RUN

COPY --from=build /app/build/* /usr/share/nginx/html

# Expose ports for http and
EXPOSE 80
EXPOSE 443

