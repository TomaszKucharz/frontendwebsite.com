const backArrowUp = document.getElementById(`backArrow`);


backArrowUp.addEventListener(`click`, () =>
{
   window.scrollTo({ top: 0, behavior: "smooth" });
});


/* backgorund dark or light */
// $color: #70ccf6, $alpha: 1

let flag = true;

const backgroundLight = document.getElementById(`backgroundLight`);
const articles = document.getElementById(`articles`);
const dark = document.getElementById(`dark`);
const light = document.getElementById(`light`);
const blue1 = document.getElementById(`blue1`);
const blue2 = document.getElementById(`blue2`);
const blue3 = document.getElementById(`blue3`);
// const blue4 = document.getElementById(`blue4`);

backgroundLight.addEventListener(`click`, () =>
{
   if (flag == true)
   {
      dark.style.display = `none`;
      light.style.display = "block";
      articles.style.backgroundColor = "#222222";
      body.style.color = "var(--font_color_White)";
      blue1.className = `blueRibbon active`;
      blue2.className = `blueRibbon active`;
      blue3.className = `blueRibbon active`;
      // blue4.className = `blueRibbon active`;

      flag = false;
   } else
   {
      dark.style.display = `block`;
      light.style.display = "none";
      articles.style.backgroundColor = `#ffffff`;
      body.style.color = "var(--font_color_Black)";
      blue1.className = `blueRibbon off`;
      blue2.className = `blueRibbon off`;
      blue3.className = `blueRibbon off`;
      // blue4.className = `blueRibbon off`;
      flag = true;
   }
})

