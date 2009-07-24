function main() {
    var wrap = this.wrap({});
    default xml namespace = wrap.namespace('');
    var content = wrap.body..div.(@id == 'content')[0];
    content.appendChild(this.content({}));

    return wrap;
}