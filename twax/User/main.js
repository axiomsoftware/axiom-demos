function main() {
    var wrap = this.wrap({});
    default xml namespace = wrap.namespace('');
    var c = (session && (this == session.user))?this.auth_view():this.unauth_view();
    wrap.body..div.(@id == 'content')[0].appendChild(c);
    return wrap;
}

function auth_view() {
    return <>
	<div>
	    <ul>
		<li>{this.username}</li>
		<li>{this.password}</li>
		<li>{this.email}</li>
		<li>{this.first_name}</li>
		<li>{this.last_name}</li>
	    </ul>
	</div>
	</>;
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