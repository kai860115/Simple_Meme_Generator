FROM node:14.13.0
# Create app directory
WORKDIR /usr/src/frontend
# Install app dependencies
COPY package.json ./
RUN yarn install
# Copy app source code
COPY . .
#Expose port and start application
EXPOSE 3000
CMD [ "yarn", "start" ]