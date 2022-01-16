const bannerHeight = document.getElementById(`banner`).offsetHeight;


const elMenu_1 = document.querySelector(`.elMenu_1`);
const elMenu_2 = document.querySelector(`.elMenu_2`);
const elMenu_3 = document.querySelector(`.elMenu_3`);
const elMenu_4 = document.querySelector(`.elMenu_4`);

elMenu_1.addEventListener(`click`, () =>
{
   const sectionOne = document.getElementById(`blue1`).offsetTop - (bannerHeight + 20);
   window.scrollTo({ top: sectionOne, behavior: "smooth" });
})
elMenu_2.addEventListener(`click`, () =>
{
   const sectionTwo = document.getElementById(`blue2`).offsetTop - (bannerHeight + 20);
   window.scrollTo({ top: sectionTwo, behavior: "smooth" });
})
elMenu_3.addEventListener(`click`, () =>
{
   const sectionThree = document.getElementById(`blue3`).offsetTop - (bannerHeight + 20);
   window.scrollTo({ top: sectionThree, behavior: "smooth" });
})
elMenu_4.addEventListener(`click`, () =>
{
   const sectionFour = document.getElementById(`footer`).offsetTop;
   window.scrollTo({ top: sectionFour, behavior: "smooth" });
})