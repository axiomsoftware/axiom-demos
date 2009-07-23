function main() {
  res.write("<h2>H2</h2>");
  res.write("<h3>Axiom Saved Data</h3>");
  var count = root.getChildCount()-1;
  res.write("<p>Children Count: " + count + "</p><br />");
  var root_obj = root.get(count);
  res.write("<p>Children: " + root_obj.toSource() + "</p><br />");
  var os = app.getObjects('MySQLPage', {title: root_obj.title});
  res.write("<p>Query API: " + os[0].toSource() + "</p>");

  res.write("<h3>Non-Axiom Saved Data</h3>");
  var nos = app.getObjects('H2Page', "title LIKE 'non%h2%'");
  res.write("<p>Query API: " + nos[0].toSource() + "</p>");
}