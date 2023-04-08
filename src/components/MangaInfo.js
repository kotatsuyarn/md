import Manga from "../models/Manga.js"
import Button from "./Button.js"

export default class MangaInfo {
    downloadClick = () => {
        console.log("TODO: download all chapters")
    }

    view(vnode) {
        return m("div", {
            style: {
                display: `${vnode.attrs.manga.id ? "flex" : "none"}`,
                gap: "5px"
            }
        }, [
            m("img", {
                src: vnode.attrs.manga.mainCover,
                style: {
                    height: "200px"
                }
            }),
            m("div", {
                style: {
                    display: "block"
                }
            }, [
                m("h1", vnode.attrs.manga.title),
                m("p", vnode.attrs.manga.description),
                m(Button, {
                    text: "Download",
                    onclick: this.downloadClick
                })
            ])
        ])
    }
}