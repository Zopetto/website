let copyNotificationShowing = false
$(window).on("load", () => {
    $("body").removeClass("preload")
})


function copyDiscord() {
    if (copyNotificationShowing) return
    const el = document.createElement('textarea');
    el.value = "zope#7777";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    copyNotificationShowing = true

    let i = 1

    const interval1 = setInterval(() => {
        if (!stages[i]) {
            i = stages.length - 1
            return clearInterval(interval1)
        }
        $("#discord")[0].innerText = stages[i]
        i++
    }, 50);

    setTimeout(() => {
        const interval2 = setInterval(() => {
            if (!stages[i]) {
                i = 1
                copyNotificationShowing = false
                return clearInterval(interval2)
            }
            $("#discord")[0].innerText = stages[i]
            i--
        }, 75)
    }, 50 * stages.length + 3000)

    // // $("#discord")[0].innerText = "copied!!"

    // setTimeout(() => {
    //     copyNotificationShowing = false
    //     $("#discord")[0].innerText = "zope#7777"
    // }, 4000)
}
