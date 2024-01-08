


// Example file URL
// var fileURL = "file:///E:/office%20projects/maximize%20insights/industries-copy.html";

var fileURL = window.location.href;
// Extract the last part of the path
var endpoint = fileURL.split('/').pop().split('.')[0];
// Log the endpoint
console.log("Endpoint: " + endpoint);



const selectedTab = localStorage.getItem('selectedTab');
console.log(selectedTab);
// const selectedTabButton = document.getElementById(`${selectedTab}-btn`);
// console.log(selectedTabButton);
  
  const openTab = (tabNames) => {
   console.log(tabNames);
    if (tabNames  == selectedTab) {
      console.log(true);
      // selectedTabButton.classList.add("active");
      const tabs = ["education", "finance", "transport", "realestate", "healthcare", "technology", "telecom", "retail"];
    tabs.forEach((tab) => {
      const tabButton = document.getElementById(`${selectedTab}-btn`);
      if (tabButton) {
        tabButton.classList.remove("active");
      }
      const clickedTabButton = document.getElementById(`${tabNames}-btn`);
      if (clickedTabButton) {
        clickedTabButton.classList.add("active");
      } else {
        clickedTabButton.classList.remove("active");
  
      }
      const element = document.getElementById(tab);
      if (element) {
        if (tab === tabNames) {
          element.style.display = "block";
          element.classList.add("flip-right");
        } else {
          element.style.display = "none";
          element.classList.remove("flip-right");
        }
      }
    });
  }else{
    console.log('false');
  }
  };






// const openTab = (tabName) => {
//   const tabs = ["education", "finance", "transport", "realestate", "healthcare", "technology", "telecom", "retail"];

//   tabs.forEach((tab) => {
//     const tabButton = document.getElementById(`${tab}-btn`);
//     if (tabButton) {
//       tabButton.classList.remove("active");
//     }
//     const clickedTabButton = document.getElementById(`${tabName}-btn`);
//     if (clickedTabButton) {
//       clickedTabButton.classList.add("active");
//     } else {
//       clickedTabButton.classList.remove("active");

//     }
//     const element = document.getElementById(tab);
//     if (element) {
//       if (tab === tabName) {
//         element.style.display = "block";
//         element.classList.add("flip-right");
//       } else {
//         element.style.display = "none";
//         element.classList.remove("flip-right");
//       }
//     }
//   });
// };

   