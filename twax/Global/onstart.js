function init() {
    var hp = root.get('/home');
    if (!hp) {
	hp = new Homepage();
	hp.id = 'home';
	hp.title = 'Your Twitter on Axiom Stack';
	root.add(hp);
    }
}