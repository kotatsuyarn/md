import ChapterList from "./ChapterList.js"

export default class Manga {
    #altTitles
    #artist
    #author
    #comments
    #description
    #follows
    #id
    #isHentai
    #lastChapter
    #lastUploaded
    #lastVolume
    #links
    #mainCover
    #publication
    #rating
    #relations
    #tags
    #title
    #views

    constructor({
        altTitles = [],
        artist = [],
        author = [],
        comments = 0,
        description = "",
        follows = 0,
        id = 0,
        isHentai = false,
        lastChapter = "",
        lastUploaded = 0,
        lastVolume = null,
        links = {},
        mainCover = "",
        publication = {},
        rating = {},
        relations = [],
        tags = [],
        title = "",
        views = 0,
    }) {
        this.#altTitles = altTitles
        this.#artist = artist
        this.#author = author
        this.#comments = comments
        this.#description = description
        this.#follows = follows
        this.#id = id
        this.#isHentai = isHentai
        this.#lastChapter = lastChapter
        this.#lastUploaded = lastUploaded
        this.#lastVolume = lastVolume
        this.#links = links
        this.#mainCover = mainCover
        this.#publication = publication
        this.#rating = rating
        this.#relations = relations
        this.#tags = tags
        this.#title = title
        this.#views = views
    }

    static get = (id, {
        onsuccess = () => undefined,
        onerror = () => undefined
    }) => {
        return m.request(`https://api.mangadex.org/v2/manga/${id}`)
            .then(res => {
                onsuccess(new Manga(res.data))
            })
            .catch(error => {
                onerror(error)
            })
    }

    chapters({
        onsuccess = () => undefined,
        onerror = () => undefined
    }) {
        return m.request(`https://api.mangadex.org/v2/manga/${this.#id}/chapters`)
            .then(res => {
                onsuccess(new ChapterList(res.data))
            })
            .catch(error => {
                onerror(error)
            })
    }

    get id() {
        return this.#id
    }

    get mainCover() {
        return this.#mainCover
    }

    get title() {
        return this.#title
    }

    get description() {
        return this.#description
    }
}