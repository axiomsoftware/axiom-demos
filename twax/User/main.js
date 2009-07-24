function main() {
    var is_me = (session && (this === session.user));
    var wrap = this.wrap({});
    default xml namespace = wrap.namespace('');
    var c = (is_me)?this.is_me_view():this.unauth_view();
    wrap.body..div.(@id == 'content')[0].appendChild(c);
    wrap.body..div.(@id == 'content')[0].appendChild(
	this.updates(
	    {
		messages: this.get_recent_messages(is_me)
	    }
	)
    );
    wrap.body..div.(@id == 'rail')[0].appendChild(this.rail({}));
    return wrap;
}

function get_recent_messages(user_only) {
    var filters = [
	{
	    lastmodifiedby: this.username
	}
    ];

    if (!user_only && this.followers) {
	for (var i = 0; i < this.followers.length; i++) {
	    var follower = this.followers[i].getTarget();
	    filters.push({lastmodifiedby: follower.username});
	}
    }

    var results = app.getHits('Message', new OrFilter(filters), {sort:{'_lastmodified': 'desc'}}).objects(0,20);
    return results;
}

function is_me_view() {
    var view = <>{this.content({})}</>;
    return view;
}

function unauth_view() {
    var follow_link = this.getURI();
    var follow = <a href="">Follow</a>;
    follow.@href = follow_link+'/follow';

    return follow;
}

function get_messages() {
//    var start =
}

function follow() {
    if (session.user != this && !(!(this.followers) || this.followers.contains(session.user))) {
	if (this.followers) {
	    this.followers = this.followers.concat(new MultiValue(new Reference(session.user)));
	} else {
	    this.followers = new MultiValue(new Reference(session.user));
	}

	if (session.user.following) {
	    session.user.following = session.user.following.concat(new MultiValue(new Reference(this)));
	} else {
	    session.user.following = new MultiValue(new Reference(this));
	}
    }

    res.redirect(this.getURI());
}