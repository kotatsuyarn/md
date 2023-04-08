export default class NavPanel {
    to = (path) => {
        window.location = path
    }

    view() {
        return m("nav", {
            class: "header header-fixed",
        }, m("ul", {
            class: "header-nav tab-container m-0"
        }, [
            m("li", {
                class: m.route.get() === "/" ? 'selected' : '',
            }, m("div", {
                class: "tab-item-content",
                onclick: () => this.to("#!/")
            }, "Search"))
        ]))
    }
}