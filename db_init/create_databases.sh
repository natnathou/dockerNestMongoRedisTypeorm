# create_databases.sh
/libmongodb.sh

mongodb_execute 'root' "$MONGODB_ROOT_PASSWORD" "" "127.0.0.1" <<EOF
  use project
  db.getSiblingDB('project')
  use test
  db.getSiblingDB('test')
EOF