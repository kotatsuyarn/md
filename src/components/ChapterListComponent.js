export default class ChapterListComponent {
    read = (chapter) => {
        window.location = `#!/read/chapter/${chapter.id}`
    }

    view(vnode) {
        const { chapters } = vnode.attrs
        return m("div", {
            class: "content u-overflow-auto",
            style: { maxHeight: "300px" }
        }, m("div.row", 
                m("div.col-lg-5",
                    m("ul", chapters.all.map(chapter => {
                        return m("button", {
                            class: "btn-small btn-transparent m-0",
                            onmouseover: (event) => {
                                event.target.classList.add("bg-pink-500")
                            },
                            onmouseout: (event) => {
                                event.target.classList.remove("bg-pink-500")
                            },
                            onclick: () => this.read(chapter)
                        }, chapter.show)
                    }))
                )
            )
        )
    }
}