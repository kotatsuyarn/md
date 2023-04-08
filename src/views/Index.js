import SearchMangaInput from "../components/SearchMangaInput.js"
import Manga from "../models/Manga.js"
import Button from "../components/Button.js"
import MangaInfo from "../components/MangaInfo.js"
import ChapterListComponent from "../components/ChapterListComponent.js"
import ChapterList from "../models/ChapterList.js"

export default class Index {
    oninit = () => {
        this.search = 18514
        this.manga = new Manga({})
        this.chapters = new ChapterList({})
        this.loading = false
    }

    oninput = (value) => {
        this.search = value
    }

    onclick = () => {
        this.loadManga(this.search)
    }

    random = () => {
        this.search = Math.floor(Math.random() * 20000) + 10000
    }

    loadManga = (mangaId) => {
        this.loading = true
        Manga.get(mangaId, {
            onsuccess: (manga) => {
                this.manga = manga
                this.loadChapters(this.manga.id)
                console.log(this.manga)
            },
            onerror: (error) => {
                console.log(error)
                this.manga = new Manga({})
                this.loading = false
            }
        })
    }

    loadChapters = (mangaId) => {
        this.manga.chapters({
            onsuccess: (chapterList) => {
                this.chapters = chapterList
                console.log(this.chapters)
                this.loading = false
            },
            onerror: (error) => {
                console.log(error)
                this.chapters = new ChapterList({})
                this.loading = false
            }
        })
    }

    view() {
        return m("div", [
            m("div", [
                m(SearchMangaInput, {
                    value: this.search,
                    oninput: this.oninput
                }),
                m(Button, {
                    text: "Search",
                    loading: this.loading,
                    onclick: this.onclick
                }),
                m(Button, {
                    text: "Random",
                    onclick: this.random
                })
            ]),
            m(MangaInfo, {
                manga: this.manga
            }),
            m(ChapterListComponent, {
                chapters: this.chapters
            })
        ])
    }
}