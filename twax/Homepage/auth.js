function logout() {
    roster.logout();
    res.redirect('/');
}

function login() {
    var username = req.get('username');
    var password = req.get('password');
    var fail = false;

    var wrap = this.wrap({});
    default xml namespace = wrap.namespace('');
    var content = wrap.body..div.(@id == 'content')[0];

    if (username && password) {
	var user = roster.authenticate(username, password);

	if (user) {
	    roster.login(user);
	    res.redirect(user.getURI());
	}
	fail = true;
    }

    var form = this.user_form({});
    if (fail)
	form.insertChildBefore(form.form[0], <><p class="error">No user found.</p></>);
    form.appendChild(this.user_util_links({}));
    content.appendChild(form);

    return wrap;
}

function register() {
    var username = req.get('username');
    var password = req.get('password');
    var email = req.get('email');
    var first_name = req.get('first_name');
    var last_name = req.get('last_name');
    var fail = false;
    var message = "";

    var wrap = this.wrap({});
    default xml namespace = wrap.namespace('');
    var content = wrap.body..div.(@id == 'content')[0];

    if (username && password && email && first_name && last_name) {
	var results = roster.create_user(
	    {
		username: username,
		password: password,
		email: email,
		first_name: first_name,
		last_name: last_name,
		add_to: this.profile
	    }
	);

	if (results.created) {
	    roster.login(results.user);
	    res.redirect(results.user.getURI());
	}

	fail = true;
	message = results.message;
    }

    var form = this.user_form({});

    if (fail)
	form.insertChildBefore(form.form[0], <><p class="error">{message}</p></>);

    form.form.@action = "/register";
    form.form..input.(@type == 'submit')[0].@value = "Register";
    form.form[0].insertChildAfter(form.form..fieldset[0], this.registration_fields({}));
    content.appendChild(form);

    return wrap;
}