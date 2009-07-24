function main() {
    var wrap = this.wrap({});
    default xml namespace = wrap.namespace('');
    var c = <>
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
    wrap.body..div.(@id == 'content')[0].appendChild(c);
    return wrap;
}