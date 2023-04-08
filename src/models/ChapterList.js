import Chapter from "./Chapter.js"

export default class ChapterList {
    #chapters
    #groups

    constructor({
        chapters = [], 
        groups = []
    }) {
        this.#chapters = chapters.map(chapter => new Chapter(chapter))
        this.#groups = groups
    }

    get(index) {
        if(!Number.isInteger(index)) {
            throw new Error("Not a number")
        }
        if(index < 0) {
            throw new Error("Trying to access negative index")
        }
        if(index >= this.#chapters.length) {
            throw new Error("Index is to big for the array")
        }

        return this.#chapters[index]
    }

    get titles() {
        return this.#chapters.map(chapter => chapter.show)
    }

    get all() {
        return this.#chapters
    }
}