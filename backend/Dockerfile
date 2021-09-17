FROM node

#RUN mkdir -p /usr/src/app

WORKDIR /app

#COPY src /usr/src/app/
#COPY package.json /usr/src/app/
#COPY package*.json. /usr/src/app/
#CMD ["npm", "install"]
#RUN npm install
COPY . .
RUN npm install
EXPOSE 3000

CMD ["node", "index.js"]