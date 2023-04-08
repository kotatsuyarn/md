export default class Chapter {
    #chapter
    #comments
    #groups
    #hash
    #id
    #language
    #mangaId
    #mangaTitle
    #pages
    #server
    #serverFallback
    #status
    #threadId
    #timestamp
    #title
    #uploader
    #views
    #volume

    constructor({
        chapter = "",
        comments = 0,
        groups = [],
        hash = "",
        id = 0,
        language = "",
        mangaId = 0,
        mangaTitle = "",
        pages = [],
        server = "",
        serverFallback = "",
        status = "",
        threadId = 0,
        timestamp = 0,
        title = "",
        uploader = 0,
        views = 0,
        volume = ""
    }) {
        this.#chapter = chapter
        this.#comments = comments
        this.#groups = groups
        this.#hash = hash
        this.#id = id
        this.#language = language
        this.#mangaId = mangaId
        this.#mangaTitle = mangaTitle
        this.#pages = pages
        this.#server = server
        this.#serverFallback = serverFallback
        this.#status = status
        this.#threadId = threadId
        this.#timestamp = timestamp
        this.#title = title
        this.#uploader = uploader
        this.#views = views
        this.#volume = volume
    }

    static get(id, {
        onsuccess = () => undefined,
        onerror = () => undefined 
    }) {
        return m.request(`https://api.mangadex.org/v2/chapter/${id}`)
            .then(res => {
                onsuccess(new Chapter(res.data))
            })
            .catch(error => {
                onerror(error)
            })
    }

    get id() {
        return this.#id
    }

    get mangaId() {
        return this.#mangaId
    }

    get title() {
        return this.#title
    }

    get show() {
        return `Vol. ${this.#volume} Ch. ${this.#chapter} ${this.#title}`
    }

    get pages() {
        return this.#pages.map(page => {
            return `${this.#server}${this.#hash}/${page}`
        })
    }
}