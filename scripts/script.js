function copyTag() {
    console.log("boobies")
    const tag = document.getElementsByClassName("discord")[0]

    if (tag.innerText != "zope70777") return

    const el = document.createElement("textarea")
    el.value = "zope#7777"
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)

    tag.innerText = "copied"

    setTimeout(() => {
        tag.innerText = "zope#7777"
    }, 1000)
}
