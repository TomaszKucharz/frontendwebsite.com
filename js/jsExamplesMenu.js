const idList = document.getElementById(`artContact2`);

function showList() {
  document.querySelector(`#anyList.anyList1`).classList.toggle(`listOn`);
  document.querySelector(`#anyList.anyList2`).classList.toggle(`listOn`);
  document.querySelector(`#anyList.anyList3`).classList.toggle(`listOn`);
  document.querySelector(`#anyList.anyList4`).classList.toggle(`listOn`);
  document.querySelector(`#anyList.anyList5`).classList.toggle(`listOn`);
  document.querySelector(`#anyList.anyList6`).classList.toggle(`listOn`);
}
idList.addEventListener(`click`, showList);
