fetch('data/projectData.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.querySelector('#project-description').innerText = data.description;
  })
  .catch(error => console.error('Error loading JSON:', error));


  
var clockConstant ;
function showClock(){
    let currDate=new Date();
    document.getElementById("clock").innerHTML=currDate.toLocaleTimeString().bold() ;
}
 // Select all the images inside the landingImgs div
 const images = document.querySelectorAll('.landingPage img');

 // Function to apply parallax effect on mousemove
 document.querySelector('.landingPage').addEventListener('mousemove', function(e) {
     const { clientX, clientY } = e;  // Get mouse position

     images.forEach((image, index) => {
         const speed = (index + 1) * 15;  // Speed of each image (higher index = slower)

         // Calculate the amount of movement for the images
         const xOffset = (window.innerWidth / 2 - clientX) / speed;
         const yOffset = (window.innerHeight / 2 - clientY) / speed;

         // Apply the transformation to the image
         image.style.transform = `translate(-50%, -50%) translate(${xOffset}px, ${yOffset}px)`;
     });
 });

//  function showContent(tabId) {
//     // إخفاء جميع التابات
//     var contents = document.querySelectorAll('.tab-content');
//     contents.forEach(function(content) {
//       content.style.display = 'none';
//     });
  
//     // إظهار التاب المحدد
//     document.getElementById(tabId).style.display = 'block';
//   }

// Function to show the content of the clicked tab
// function showContent(tabId, element) {
//     // Hide all contents
//     var contents = document.querySelectorAll('.tab-content');
//     contents.forEach(function(content) {
//       content.classList.remove('active');
//     });

//     // Remove active class from all tabs
//     var tabs = document.querySelectorAll('.tabs-nav li');
//     tabs.forEach(function(tab) {
//       tab.classList.remove('active');
//     });

//     // Show the clicked tab content
//     document.getElementById(tabId).classList.add('active');

//     // Add active class to the clicked tab
//     element.classList.add('active');
//   }
document.addEventListener('mousemove', function (e) {
    // احصل على أبعاد النافذة
    const width = window.innerWidth;
    const height = window.innerHeight;

    // احسب الفرق النسبي بين موضع المؤشر وأبعاد الشاشة
    const mouseX = (e.clientX / width) - 0.5;  // قيمة تتراوح بين -0.5 و 0.5
    const mouseY = (e.clientY / height) - 0.5; // قيمة تتراوح بين -0.5 و 0.5

    // احصل على كل الصور اللي عاوز تطبق عليها الـparallax
    const elements = document.querySelectorAll('.movingSection img');

    // اضبط الحركة بناءً على mouseX و mouseY بقيم محددة
    elements.forEach((element, index) => {
        const speed = (index + 1) * 30; // قيمة صغيرة لضبط الحركة بشكل مناسب

        // اضبط transform لكل صورة مع تحديد الحدود حتى لا تتحرك الصور بشكل مفرط
        const translateX = mouseX * speed;
        const translateY = mouseY * speed;

        element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
});


//collapse
function openTab(evt, tabName, tabClass) {
    var i, tabcontent, tablinks;

    // إخفاء جميع محتويات التبويبات المرتبطة بالقسم المحدد
    tabcontent = document.getElementsByClassName(tabClass);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // إزالة "active" من جميع التبويبات المرتبطة بالقسم المحدد
    tablinks = evt.currentTarget.parentElement.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // عرض التبويب المحدد وإضافة "active" للتبويب الذي تم الضغط عليه
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// دالة لجعل التبويب الأول يظهر تلقائيًا
function showFirstTab(sectionClass, tabClass) {
    var firstTab = document.querySelector(`.${sectionClass} .tablinks`);
    var firstContent = document.querySelector(`.${sectionClass} .${tabClass}`);
    
    if (firstTab && firstContent) {
        firstTab.classList.add("active");
        firstContent.style.display = "block";
    }
}

// جعل أول تبويب يظهر تلقائيًا لكل قسم عند تحميل الصفحة
window.onload = function() {
    showFirstTab("tabs-section", "tabs1"); // سيكشن الأول
    showFirstTab("tabs-section", "tabs2"); // سيكشن الثاني
};


// carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,            // تفعيل الـ autoplay
    autoplayTimeout: 1500,      // مدة العرض لكل سلايد (2000 ميلي ثانية = 2 ثانية)
    autoplayHoverPause: true,   // التوقف عند تمرير المؤشر على السلايدر
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
});

AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });