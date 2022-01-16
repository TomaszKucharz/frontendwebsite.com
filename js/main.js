const banner = document.getElementById(`banner`);
const arrow = document.getElementById(`arrow`);
const backArrow = document.getElementById(`backArrow`);
const elMenu1 = document.querySelector(`elMenu_1`);


window.addEventListener(`scroll`, function ()
{
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
   {
      banner.className = `banner off`;
   } else
   {
      banner.className = `banner on`;
   }
   if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
   {
      arrow.style.display = "none";
   }
   else
   {
      arrow.style.display = "grid";
   }
   if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)
   {
      backArrow.style.display = "block";
   } else
   {
      backArrow.style.display = "none";
   }
})

