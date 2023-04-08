import NavPanel from "../components/NavPanel.js"

export default class Layout {
    view(vnode) {
        return m("div", {
            style: {
                height: "100vh",
            }
        }, [
            m(NavPanel),
            m("main", {
                style: {
                    padding: "5em 1em 1em 1em",
                    background: "rgba(200, 200, 200, 0.3)",
                    height: "100%",
                },
                class: "content"
            }, vnode.children)
        ])
    }
}