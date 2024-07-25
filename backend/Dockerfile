FROM node:20

WORKDIR /app

COPY . .

RUN npm install -g typescript
RUN npm install

EXPOSE 3001

CMD ["sh", "-c", "npm run migrate && npm run start"]