# Backup
docker exec mariadb /usr/bin/mysqldump -u root --password=example mabddpourletest > dump.sql

# Restore (automatic if dump.sql exist in root directory)
docker exec -i mariadb /usr/bin/mysql -u root --password=example mabddpourletest < dump.sql

# How to Do a Clean Restart of a Docker Instance (database connection error)

docker-compose down
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)
docker-compose up -d


# Others

docker container prune
docker-compose down --remove-orphans -v
sudo rm -rf ./data/*