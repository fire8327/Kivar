/*jshint esnext: true */
/* menu */
$("#toggler").click(() => {
    $("#menu").toggleClass("max-xl:top-0")
    $("#menu").toggleClass("max-xl:top-full")
    $("#menu").toggleClass("max-xl:-translate-y-full")
    $("#toggler").toggleClass("h-3.5")
    $("#toggler").toggleClass("h-5")
    $("#toggler > :nth-child(1)").toggleClass("rotate-45")
    $("#toggler > :nth-child(2)").toggleClass("opacity-0")
    $("#toggler > :nth-child(3)").toggleClass("-rotate-45")
})
/* kanbanMenu */
$("#kanbanToggler,#kanbanOverlay").click(() => {
    $("#kanbanMenu").toggleClass("max-md:top-0")
    $("#kanbanMenu").toggleClass("max-md:top-full")
    $("#kanbanMenu").toggleClass("max-md:-translate-y-full")
    $("#kanbanOverlay").toggleClass("max-md:hidden")
    $("#kanbanToggler").toggleClass("h-3.5")
    $("#kanbanToggler").toggleClass("h-5")
    $("#kanbanToggler > :nth-child(1)").toggleClass("rotate-45")
    $("#kanbanToggler > :nth-child(2)").toggleClass("opacity-0")
    $("#kanbanToggler > :nth-child(3)").toggleClass("-rotate-45")
})


/* dropdowns */
$(".dropdown").each((i, el) => {
    const dropdownToggler = $(el).find(".dropdownToggler")
    const dropdownInner = $(el).find(".dropdownInner")
    $(dropdownToggler).click(() => {
        $(dropdownInner).toggleClass("hidden")
        if($(el).hasClass("dropdownProfile")) {
            $(dropdownToggler).toggleClass("bg-[#F6F6F6]")
            $(dropdownToggler).toggleClass("bg-[#1F75A8]")
            $(dropdownToggler).find("svg:first").toggleClass("text-[#1D1D1D]")
            $(dropdownToggler).find("svg:first").toggleClass("text-white")
        } else if ($(el).hasClass("dropdownDefault")) {
            $(dropdownToggler).find("svg:first").toggleClass("xl:group-hover:opacity-100")
            $(dropdownToggler).find("svg:first").toggleClass("xl:opacity-100")
        }
    })
})


/* add class to element (header height) */
let headerHeight = $("header").height()
console.log(headerHeight)
window.addEventListener("resize", () => {
    headerHeight = $("header").height()
    console.log(headerHeight)
})
function addHaderHeight(el) {
    $(el).css("height",`calc(100vh - ${headerHeight}px)`)
}


/* tabs */
$("#cardTabs").tabs()


/* addWorkers */
$("#addWorkerToggler, #addWorkerClose").click(() => {
    $("#addWorkerPopup").toggleClass("hidden")
    /* $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            $("#addWorkerPopup").addClass("hidden")
        }
    }) */
})