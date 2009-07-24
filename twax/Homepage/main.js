function main() {
    if (session && session.user) {
	var wrap = this.wrap({});
	default xml namespace = wrap.namespace('');
	wrap.body..div.(@id == 'content')[0].appendChild(<><p>Hello World</p></>);
	return wrap;
    }

    return this.login({});
}