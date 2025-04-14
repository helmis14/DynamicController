
<!-- use datababse -->
use admin  

<!-- list all users -->
db.getUsers() 

<!-- create admin -->
db.createUser({
  user: "helmi",
  pwd: "password",
  roles: [
    { role: "readWrite", db: "dynamic-controller" },
    { role: "dbAdmin", db: "dynamic-controller" }
  ]
})