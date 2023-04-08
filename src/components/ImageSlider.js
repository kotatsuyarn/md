import Button from "./Button.js"

export default class ImageSlider {
    oninit = () => {
        this.page = 0
    }

    next = (length) => {
        if(this.page < length - 1) {
            this.page++
        }
    }

    previous = () => {
        if(this.page > 0) {
            this.page--
        }
    }

    view(vnode) {
        return m("div", [
            m("div", {
                style: {
                    display: "flex",
                    height: "50em"
                }
            }, [
                m(Button, {
                    text: "Back",
                    onclick: this.previous
                }),
                m("img", {
                    src: vnode.attrs.images[this.page]
                }),
                m(Button, {
                    text: "Next",
                    onclick: () => this.next(vnode.attrs.images.length)
                })
            ]),
            m("div", [
                m("p", `${this.page + 1}/${vnode.attrs.images.length}`)
            ])
        ])
    }
}