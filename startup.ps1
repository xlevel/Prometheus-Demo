docker build -t test/webservice:latest .

docker-compose up -d

node .\loadapp\app\index.js