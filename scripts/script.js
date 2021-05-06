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

   
    // // $("#discord")[0].innerText = "copied!!"

    // setTimeout(() => {
    //     copyNotificationShowing = false
    //     $("#discord")[0].innerText = "zope#7777"
    // }, 4000)
}
