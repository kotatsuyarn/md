export default class SearchMangaInput {
    oninput = (oninput) => (event) => {
        let value = 0

        try {
            value = new Number(event.target.value)
        } catch(error) {
            console.log(error)
            value = 0
        }

        oninput(value)
    }

    view(vnode) {
        const { value, oninput } = vnode.attrs
        return m("input", {
            type: "number",
            value: value,
            oninput: this.oninput(oninput),
        })
    }
}