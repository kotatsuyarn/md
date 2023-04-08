import Chapter from "../models/Chapter.js"
import ImageSlider from "../components/ImageSlider.js"

export default class ChapterReader {
    oninit = (vnode) => {
        this.chapter = new Chapter({id: vnode.attrs.id})
        return this.loadChapter(vnode.attrs.id)
    }

    loadChapter = (chapterId) => {
        return Chapter.get(chapterId, {
            onsuccess: (chapter) => {
                this.chapter = chapter
            },
            onerror: (error) => {
                console.log(error)
                this.chapter = new Chapter({id: chapterId})
            }
        })
    }

    view() {
        return m("div", m(ImageSlider, {
            images: this.chapter.pages
        }))
    }
}