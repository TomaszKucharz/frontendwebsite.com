const someMain = document.querySelector(`.someMain`);
const someMain1 = document.querySelector(`.someMain1`);



const nowa = () =>
{
    setTimeout(() =>
    {
        someMain1.classList.add(`listOn`);
    }, 300);
}
someMain.addEventListener(`mouseover`, nowa);
someMain1.addEventListener(`mouseover`, () =>
{
    clearTimeout(nowa);
    console.log(`jestem w drugiej`);
})
someMain1.addEventListener(`mouseout`, function () 
{
    this.classList.remove(`listOn`);
})



