# Node.js の LTS バージョンをベースにする
FROM node:lts

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールするためのファイルをコピーする
COPY package*.json ./

# アプリケーションの依存関係をインストールする
RUN npm install

# アプリケーションのソースをコピーする
COPY . .

# アプリケーションを実行する
CMD [ "npm", "start" ]
