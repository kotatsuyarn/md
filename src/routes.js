import Index from './views/Index.js'
import ChapterReader from './views/ChapterReader.js'
import Layout from './components/Layout.js'

export default {
    "/": {
        render() {
            return m(Layout, m(Index))
        }
    },
    "/read/chapter/:id": {
        render(vnode) {
            return m(Layout, m(ChapterReader, vnode.attrs))
        }
    },
}