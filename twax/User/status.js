function update() {
    var status = req.get('status');

    if (status){
	var message = new Message();
	message.from = new Reference(this);
	message.content = status;
	this.messages.add(message);
	res.redirect(this.getURI());//message.getURI());
    }

    res.redirect(this.getURI());
}