export class Router {
    static GetParam() {
        const query = window.location.search.substr(1);
        const urlParams = new URLSearchParams(query);
        const id = urlParams.get('id');
        return id;
    }
}
//# sourceMappingURL=Router.js.map