function main() {
    var wrap = this.wrap({});
    default xml namespace = wrap.namespace('');
    var c = (session && (this == session.user))?this.auth_view():this.unauth_view();
    wrap.body..div.(@id == 'content')[0].appendChild(c);
    wrap.body..div.(@id == 'content')[0].appendChild(this.updates({messages: this.get_recent_messages()}));
    return wrap;
}

function get_recent_messages() {
    var filters = [
	{
	    lastmodifiedby: this.username
	}
    ];

    var results = app.getHits('Message', new OrFilter(filters), {sort:{'_lastmodified': 'desc'}}).objects(0,20);
    return results;
}

function auth_view() {
    var view = <>{this.content({})}</>;
    return view;
}

function unauth_view() {
    return <>
	<div>
	    <ul>
		<li>{this.username}</li>
	    </ul>
	</div>
	</>;
}

function get_messages() {
//    var start =
}