# Prometheus-Demo

A quick start example of using Prometheus for web service monitoring using Docker and Docker Compose.

## Getting Started

1. Install **Docker** onto the target machine.
1. Clone the GitHub repo.
1. Navigate into the directory.
1. Run `docker build -t test/webservice:latest .` to build the test web service.
1. Run `docker-compose up` to bring up the application.
1. Navigate to `http://localhost/` in a web browser and you should see the 'Hello' returned.
1. Using a tool such as Postman, do a `PUT` to `http://localhost/orders/` with a body of `{"orderId": "1234567","orderValue": "123.45"}`.
1. Do a `GET` to `http://localhost/1234567` and the original data should be displayed. 

## License

[MIT License](https://github.com/xlevel/Prometheus-Demo/blob/master/LICENSE)

## Acknowledgments

The work is based on [Kai Hendry's Pingprom](https://github.com/kaihendry/pingprom) project.
