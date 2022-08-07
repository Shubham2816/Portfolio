//typing animation

var typed = new Typed(".typing",{
    strings:["","Web Developer", "Coder", "Enthusiast Learner"],
    typeSpeed:150,
    backSpeed:100,
    loop:true

})

// aside
const nav =document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList =navList.length;
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0;i< totalNavList ;i++)
      {
        const a =navList[i].querySelector("a");//made particular link to all
       a.addEventListener("click",function()
       {
        removeBackSection();
        for(let j=0;j<totalNavList;j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
               //allSection[j].classList.add("back-section"); //console.log("back-section" + navList[j].querySelector("a"))  //24:09
            }
            navList[j].querySelector("a").classList.remove("active")//to make colour transfer from one to other option
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {asideSectionTogglerBtn();}
       })
      }
      function removeBackSection()
      {
        for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.remove("back-section");
        }
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
    }
      function showSection(element)
      {
        for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active")
      }
      function updateNav(element)
      {
        for(let i=0;i<totalNavList;i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
      }
      document.querySelector(".select-me").addEventListener("click",function()
      {
        const sectionIndex = this.getAttribute("data-section-index");
       //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
      })
const navTogglerBtn =document.querySelector(".nav-toggler"),
aside= document.querySelector(".aside");
navTogglerBtn.addEventListener("click", ()=>
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{aside.classList.toggle("open");
navTogglerBtn.classList.toggle("open");
for(let i=0;i<totalSection;i++)
{
    allSection[i].classList.toggle("open");
}
}

