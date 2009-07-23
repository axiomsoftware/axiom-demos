function init() {
  create_h2_db();
  create_mysql_db();

  addLines('demo', 'H2Page'); //adding in SQL based inserts rather than using the ORM.

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

function addLines(source, table, num) {
  num = num || 10;
  app.log("addLines to: "+source+"."+table);
  var conn = getDBConnection(source);
  for (var i = 0; i < num; i++) {
    var sql = "INSERT INTO "+table+" ( TITLE , CONTENT ) VALUES('non hello world h2 -"+i+"', 'BLAM ZOW!');";
    app.log("Inserting: "+ sql);
    if (!(conn.executeUpdate(sql)))
      app.log(conn.getLastError());
  }
}