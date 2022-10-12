var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('tm-header')
    title.textContent = customerName;
    let introHeader = document.getElementById('introheader')
    introHeader.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->

};

function toggleColors() {
    //<!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    //still do not know why using document.getElementsByClassName('tm-white-rect') make array skipping
    let blueRect = document.querySelectorAll('.tm-white-rect')
    // for(let i=0;i<blueRect.length;i++)
    // {   //this for loop code works too. pt-10/11/22
    //     // console.log(`i=${i} blueRect[${i}]= ${blueRect[i].className.replace('white','blue')}`)
    //      blueRect[i].setAttribute("class",blueRect[i].className.replace('white','blue'))
    // }
    Array.from(blueRect).forEach((blue)=>{
        blue.setAttribute("class",blue.className.replace('white','blue'))
    })

};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    let socialLink = document.getElementsByClassName('tm-social-links');
    Array.from(socialLink).forEach((x)=>{
        // x.style.setProperty("display","none") pt-this one works
    // x.setAttribute("style","display: none;") pt-this one works too
    console.log(`social-links =${x.setAttribute("style","display: none;")}`)// this one doing console.log and the perameter that pass to it which add display: none; to class all at once.
    })

   

};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    let introPara1 = document.getElementById('intropara1');
    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    let introPara2 = document.getElementById('intropara2');
     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
     let aboutPara1 = document.getElementById('aboutpara1');
    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
    let aboutPara2 = document.getElementById('aboutpara2');
    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
    let addressPara = document.getElementById('addresspara');
    console.log(`${introPara1.textContent="Alliance was founded in 1931 by Albert Daniels."}`);
    console.log(`${introPara2.textContent="The company is a leader in P.C. Manufacturing"}`);
    console.log(`${aboutPara1.textContent="We deliver the best service this side of creation"}`);
    console.log(`${aboutPara2.textContent="Our motto is satisfaction guaranteed"}`);
    console.log(`${addressPara.textContent="1-800-565-5656"}`);
}; 



