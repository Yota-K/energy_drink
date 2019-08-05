build:
	docker-compose build app

sh:
	docker-compose run --rm -p 3000:3000 app sh

dev-server:
	docker-compose run --rm -p 3000:3000 app npm run start
