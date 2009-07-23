function init() {
  create_h2_db();
  create_mysql_db();


  for (var i = 0; i < 10; i++) {
    var h2page = new H2Page();
    h2page.title = "H2 Hello World - " + i;
    h2page.content = "Blah-ziggity."; // #fail
    root.add(h2page);
  }

  for (var i = 0; i < 10; i++) {
    var mysqlpage = new MySQLPage();
    mysqlpage.title = "MySql Hello World - " + i;
    mysqlpage.content = "Blam-wow."; // =\
    root.add(mysqlpage);
  }
}

function create_h2_db() {
  app.log("h2");
  var conn = getDBConnection('demo');
  app.log(conn.executeUpdate("CREATE TABLE H2Page(ID INT AUTO_INCREMENT PRIMARY KEY, TITLE VARCHAR(255), CONTENT VARCHAR(255));"));
  app.log("last err: "+conn.getLastError());
}

function create_mysql_db() {
  app.log("mysql");
  var conn = getDBConnection('mysql');
  app.log(conn.executeUpdate("CREATE TABLE MySQLPage(ID INT AUTO_INCREMENT PRIMARY KEY, TITLE VARCHAR(255), CONTENT VARCHAR(255));"));
  app.log("last err: "+conn.getLastError());
}