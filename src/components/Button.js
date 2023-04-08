export default class Button {
    view(vnode) {
        const { onclick, text, loading } = vnode.attrs
        return m("button", {
            class: `
                animated btn-small
                ${loading ? 'loading hide-text' : ''}
            `,
            disabled: loading,
            onclick: onclick
        }, text)
    }
}