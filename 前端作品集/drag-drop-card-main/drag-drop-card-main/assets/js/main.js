/*===== DRAG and DROP =====*/
const dropItems = document.getElementById('drop-items')

new Sortable(dropItems, {
    Animation: 350,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag"
})