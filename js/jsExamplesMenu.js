const idList = document.getElementById(`artContact2`);

function showList()
{
        document.querySelector(`#anyList.anyList1`).classList.toggle(`listOn`)
}
idList.addEventListener(`click`, showList);