// // Sidebar toggle
// const toggleBtn = document.getElementById('toggle-btn');
// const sidebar = document.getElementById('sidebar');
// const mainContent = document.getElementById('main-content');

// toggleBtn.addEventListener('click', () => {
//     if (sidebar.classList.contains('collapsed')) {
//         sidebar.classList.remove('collapsed');
//         sidebar.classList.add('active');
//         mainContent.style.marginLeft = '270px';
//     } else if (sidebar.classList.contains('active')) {
//         sidebar.classList.remove('active');
//         sidebar.classList.add('collapsed');
//         mainContent.style.marginLeft = '100px';
//     } else {
//         sidebar.classList.add('collapsed');
//         mainContent.style.marginLeft = '100px';
//     }
// });


// function showItemDetails(name, img, desc) {
//     displayArea.innerHTML = `
//         <h2>${name}</h2>
//         <img src="${img}" alt="${name}">
//         <p>${desc}</p>
//     `;
// }





// //Persistent state maintain

// function restoreCategory(data) {
//     const mainDisplay = document.getElementById("main-display");

//     let html = `<h1>${data.title}</h1><div class="incense-grid">`;
//     data.items.forEach(item => {
//         html += `
//             <div class="incense-card">
//                 <img src="${item.img}" alt="${item.name}">
//                 <h3>${item.name}</h3>
//                 <p>${item.desc}</p>
//             </div>
//         `;
//     });
//     html += `</div>`;

//     mainDisplay.innerHTML = html;
// }






// // Function to show incense category when icon is clicked
// function showCategory(type) {
//     const mainDisplay = document.getElementById('main-display');
//     let title = '';
//     let items = [];

//     if (type === 'stick') {
//         title = 'Incense Stick Collection';
//         items = [
//             {
//                 name: 'Sandalwood Stick',
//                 img: '/static/images/sandalwood.jpg',
//                 desc: 'Warm and woody sandalwood incense sticks, calming and grounding.'
//             },
//             {
//                 name: 'Rose Stick',
//                 img: '/static/images/rose.jpg',
//                 desc: 'Romantic rose incense sticks bringing love and freshness.'
//             },
//             {
//                 name: 'Lavender Stick',
//                 img: '/static/images/lavender.jpg',
//                 desc: 'Relaxing lavender incense sticks for peace and clarity.'
//             }
//         ];
//     } else if (type === 'dhoop') {
//         title = 'Incense Dhoop Collection';
//         items = [
//             {
//                 name: 'Sandalwood Dhoop',
//                 img: '/static/images/sandalwood.jpg',
//                 desc: 'Sandalwood dhoop with a rich and long-lasting fragrance.'
//             },
//             {
//                 name: 'Rose Dhoop',
//                 img: '/static/images/rose.jpg',
//                 desc: 'Rose dhoop cones for devotion and serenity.'
//             },
//             {
//                 name: 'Lavender Dhoop',
//                 img: '/static/images/lavender.jpg',
//                 desc: 'Lavender dhoop for gentle evening relaxation.'
//             }
//         ];
//     } else if (type === 'cup') {
//         title = 'Incense Cup Collection';
//         items = [
//             {
//                 name: 'Sandalwood Cup',
//                 img: '/static/images/sandalwood.jpg',
//                 desc: 'Sandalwood incense cups fill your space with divine aroma.'
//             },
//             {
//                 name: 'Rose Cup',
//                 img: '/static/images/rose.jpg',
//                 desc: 'Rose incense cups bring freshness and love.'
//             },
//             {
//                 name: 'Lavender Cup',
//                 img: '/static/images/lavender.jpg',
//                 desc: 'Lavender cups help ease your mind and calm your spirit.'
//             }
//         ];
//     }

//     // Build HTML dynamically
//     let html = `<h1>${title}</h1><div class="incense-grid">`;
//     items.forEach(item => {
//         html += `
//             <div class="incense-card">
//                 <img src="${item.img}" alt="${item.name}">
//                 <h3>${item.name}</h3>
//                 <p>${item.desc}</p>
//             </div>
//         `;
//     });
//     html += '</div>';

//     mainDisplay.innerHTML = html;
//     // localStorage.setItem("selectedIncense", JSON.stringify(data));

//     localStorage.setItem("selectedIncense", JSON.stringify({
//     type: type,
//     items: items,
//     title: title
//     }));

// }

// // Handle icon clicks
// document.querySelectorAll('.icon').forEach(icon => {
//     icon.addEventListener('click', () => {
//         const type = icon.getAttribute('title').toLowerCase();
//         if (type.includes('stick')) showCategory('stick');
//         else if (type.includes('doop')) showCategory('dhoop');
//         else if (type.includes('cup')) showCategory('cup');
//     });
// });



// // Accordion behavior
// const accordions = document.querySelectorAll('.accordion');
// accordions.forEach(acc => {
//     acc.addEventListener('click', function () {
//         this.classList.toggle('active');
//         const panel = this.nextElementSibling;
//         panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
//     });
// });

// // Display item details when clicked
// const items = document.querySelectorAll('.item');
// const displayArea = document.getElementById('display-area');

// items.forEach(item => {
//     item.addEventListener('click', () => {
//         const name = item.dataset.name;
//         const desc = item.dataset.desc;
//         const img = item.dataset.img;

//         displayArea.innerHTML = `
//             <h3>${name}</h3>
//             <img src="${img}" alt="${name}">
//             <p>${desc}</p>
//         `;
//     });
// });




// document.addEventListener("DOMContentLoaded", function() {

//         // 1️⃣ RESTORE SAVED CATEGORY FIRST
//         const saved = localStorage.getItem("selectedIncense");
//         if (saved) {
//             restoreCategory(JSON.parse(saved));
//         }

//         // 2️⃣ POPUP + CLICK HANDLERS
//         const popup = document.getElementById("popup");
//         const popupList = document.getElementById("popup-list");
//         const popupTitle = document.getElementById("popup-title");
//         const closeBtn = document.getElementById("popup-close");

//         const items = {
//             stick: ["Sandalwood Stick", "Rose Stick", "Lavender Stick"],
//             dhoop: ["Sandalwood Dhoop", "Rose Dhoop", "Lavender Dhoop"],
//             cup: ["Sandalwood Cup", "Rose Cup", "Lavender Cup"]
//         };



//         const itemInfo = {
//         "Sandalwood Stick": {
//             img: "/static/images/sandalwood.jpg",
//             desc: "Warm and woody sandalwood incense sticks, calming and grounding."
//         },
//         "Rose Stick": {
//             img: "/static/images/rose.jpg",
//             desc: "Romantic rose incense sticks bringing love and freshness."
//         },
//         "Lavender Stick": {
//             img: "/static/images/lavender.jpg",
//             desc: "Relaxing lavender incense sticks for peace and clarity."
//         },

//         "Sandalwood Dhoop": {
//             img: "/static/images/sandalwood.jpg",
//             desc: "Sandalwood dhoop with a rich and long-lasting fragrance."
//         },
//         "Rose Dhoop": {
//             img: "/static/images/rose.jpg",
//             desc: "Rose dhoop cones for devotion and serenity."
//         },
//         "Lavender Dhoop": {
//             img: "/static/images/lavender.jpg",
//             desc: "Lavender dhoop for gentle evening relaxation."
//         },

//         "Sandalwood Cup": {
//             img: "/static/images/sandalwood.jpg",
//             desc: "Sandalwood incense cups fill your space with divine aroma."
//         },
//         "Rose Cup": {
//             img: "/static/images/rose.jpg",
//             desc: "Rose incense cups bring freshness and love."
//         },
//         "Lavender Cup": {
//             img: "/static/images/lavender.jpg",
//             desc: "Lavender cups help ease your mind and calm your spirit."
//         }
//     };




//     function showPopup(type, iconElement) {

//         popupTitle.textContent = type.charAt(0).toUpperCase() + type.slice(1);

//         popupList.innerHTML = "";
        


//         items[type].forEach(i => {
//         const li = document.createElement("li");
//         li.textContent = i;

//         // CHANGE THIS → open image instead of alert

//         li.addEventListener("click", () => {
//         // 1) Show on right side
//         showItemDetails(fullName, info.img, info.desc);

//         // 2) Save persistent state
//         localStorage.setItem("selectedIncense", JSON.stringify({
//             popupItem: fullName,
//             img: info.img,
//             desc: info.desc
//         }));

//         popup.classList.add("hidden");
//         });




//         popupList.appendChild(li);
//     });




//         // <<< ALIGN POPUP WITH ICON >>>
//         const rect = iconElement.getBoundingClientRect();
//         popup.style.top = (rect.top - 10) + "px";
//         popup.style.left = (rect.right + 15) + "px";

//         popup.classList.remove("hidden");
//     }




//     document.getElementById("stickIcon").addEventListener("click", (e) => showPopup("stick", e.currentTarget));
//     document.getElementById("dhoopIcon").addEventListener("click", (e) => showPopup("dhoop", e.currentTarget));
//     document.getElementById("cupIcon").addEventListener("click", (e) => showPopup("cup",e.currentTarget));
//     closeBtn.addEventListener("click", (e) => popup.classList.add("hidden" ,e.currentTarget));


//     // ⭐ ADD THIS CODE **AT THE END**    
//     document.addEventListener("click", function(event) {
//         const clickedInsidePopup = popup.contains(event.target);
//         const clickedIcon = event.target.classList.contains("icon");

//         if (!clickedInsidePopup && !clickedIcon) {
//             popup.classList.add("hidden");
//         }
//     });

// });




// document.getElementById("logout-btn").addEventListener("click", () => {
//     localStorage.removeItem("selectedIncense");
// });







// ===============================
// SIDEBAR TOGGLE
// ===============================
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

toggleBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        sidebar.classList.add('active');
        mainContent.style.marginLeft = '270px';
    } else if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        sidebar.classList.add('collapsed');
        mainContent.style.marginLeft = '100px';
    } else {
        sidebar.classList.add('collapsed');
        mainContent.style.marginLeft = '100px';
    }
});


// For showing a single product on right side
function showItemDetails(name, img, desc) {
    const mainDisplay = document.getElementById('main-display');
    mainDisplay.innerHTML = `
        <h2>${name}</h2>
        <img src="${img}" alt="${name}">
        <p>${desc}</p>
    `;
}


// ===============================
// RESTORE PERSISTENT STATE
// ===============================
function restoreState() {
    const saved = localStorage.getItem("selectedIncense");
    if (!saved) return;

    const data = JSON.parse(saved);

    // Case 1 → user selected category (stick/dhoop/cup)
    if (data.type && data.items) {
        let html = `<h1>${data.title}</h1><div class="incense-grid">`;
        data.items.forEach(item => {
            html += `
                <div class="incense-card">
                    <img src="${item.img}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                </div>`;
        });
        html += `</div>`;
        document.getElementById("main-display").innerHTML = html;
    }

    // Case 2 → user selected a POPUP ITEM (Sandal / Rose / Lavender)
    if (data.popupItem) {
        showItemDetails(data.popupItem, data.img, data.desc);
    }
}


// ===============================
// SHOW CATEGORY (stick/dhoop/cup)
// ===============================
function showCategory(type) {
    const mainDisplay = document.getElementById('main-display');
    let title = '';
    let items = [];

    if (type === 'stick') {
        title = 'Incense Stick Collection';
        items = [
            { name: 'Sandalwood Stick', img: '/static/images/sandalwood.jpg', desc: 'Warm and woody sandalwood incense sticks, calming and grounding.' },
            { name: 'Rose Stick', img: '/static/images/rose.jpg', desc: 'Romantic rose incense sticks bringing love and freshness.' },
            { name: 'Lavender Stick', img: '/static/images/lavender.jpg', desc: 'Relaxing lavender incense sticks for peace and clarity.' }
        ];
    }
    else if (type === 'dhoop') {
        title = 'Incense Dhoop Collection';
        items = [
            { name: 'Sandalwood Dhoop', img: '/static/images/sandalwood.jpg', desc: 'Sandalwood dhoop with a rich and long-lasting fragrance.' },
            { name: 'Rose Dhoop', img: '/static/images/rose.jpg', desc: 'Rose dhoop cones for devotion and serenity.' },
            { name: 'Lavender Dhoop', img: '/static/images/lavender.jpg', desc: 'Lavender dhoop for gentle evening relaxation.' }
        ];
    }
    else if (type === 'cup') {
        title = 'Incense Cup Collection';
        items = [
            { name: 'Sandalwood Cup', img: '/static/images/sandalwood.jpg', desc: 'Sandalwood incense cups fill your space with divine aroma.' },
            { name: 'Rose Cup', img: '/static/images/rose.jpg', desc: 'Rose incense cups bring freshness and love.' },
            { name: 'Lavender Cup', img: '/static/images/lavender.jpg', desc: 'Lavender cups help ease your mind and calm your spirit.' }
        ];
    }

    // Build HTML
    let html = `<h1>${title}</h1><div class="incense-grid">`;
    items.forEach(item => {
        html += `
            <div class="incense-card">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
            </div>`;
    });
    html += `</div>`;

    mainDisplay.innerHTML = html;

    // SAVE PERSISTENT STATE
    localStorage.setItem("selectedIncense", JSON.stringify({
        type: type,
        title: title,
        items: items
    }));
}


// ===============================
// POPUP LOGIC
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    restoreState();   // ← Restore state immediately on page load

    const popup = document.getElementById("popup");
    const popupList = document.getElementById("popup-list");
    const popupTitle = document.getElementById("popup-title");
    const closeBtn = document.getElementById("popup-close");

    const items = {
        stick: ["Sandalwood Stick", "Rose Stick", "Lavender Stick"],
        dhoop: ["Sandalwood Dhoop", "Rose Dhoop", "Lavender Dhoop"],
        cup: ["Sandalwood Cup", "Rose Cup", "Lavender Cup"]
    };

    const itemInfo = {
        "Sandalwood Stick": { img: "/static/images/sandalwood.jpg", desc: "Warm and woody sandalwood incense sticks, calming and grounding." },
        "Rose Stick": { img: "/static/images/rose.jpg", desc: "Romantic rose incense sticks bringing love and freshness." },
        "Lavender Stick": { img: "/static/images/lavender.jpg", desc: "Relaxing lavender incense sticks for peace and clarity." },

        "Sandalwood Dhoop": { img: "/static/images/sandalwood.jpg", desc: "Sandalwood dhoop with a rich and long-lasting fragrance." },
        "Rose Dhoop": { img: "/static/images/rose.jpg", desc: "Rose dhoop cones for devotion and serenity." },
        "Lavender Dhoop": { img: "/static/images/lavender.jpg", desc: "Lavender dhoop for gentle evening relaxation." },

        "Sandalwood Cup": { img: "/static/images/sandalwood.jpg", desc: "Sandalwood incense cups fill your space with divine aroma." },
        "Rose Cup": { img: "/static/images/rose.jpg", desc: "Rose incense cups bring freshness and love." },
        "Lavender Cup": { img: "/static/images/lavender.jpg", desc: "Lavender cups help ease your mind and calm your spirit." }
    };


    function showPopup(type, iconElement) {
        popupTitle.textContent = type.toUpperCase();
        popupList.innerHTML = "";

        items[type].forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;

            li.addEventListener("click", () => {
                const info = itemInfo[name];

                // Show Right Side
                showItemDetails(name, info.img, info.desc);

                // Save Persistent State
                localStorage.setItem("selectedIncense", JSON.stringify({
                    popupItem: name,
                    img: info.img,
                    desc: info.desc
                }));

                popup.classList.add("hidden");
            });

            popupList.appendChild(li);
        });

        // Position popup near clicked icon
        const rect = iconElement.getBoundingClientRect();
        popup.style.top = (rect.top - 10) + "px";
        popup.style.left = (rect.right + 15) + "px";

        popup.classList.remove("hidden");
    }

    document.getElementById("stickIcon").addEventListener("click", e => showPopup("stick", e.currentTarget));
    document.getElementById("dhoopIcon").addEventListener("click", e => showPopup("dhoop", e.currentTarget));
    document.getElementById("cupIcon").addEventListener("click", e => showPopup("cup", e.currentTarget));

    closeBtn.addEventListener("click", () => popup.classList.add("hidden"));

    // Close popup when clicking outside
    document.addEventListener("click", event => {
        if (!popup.contains(event.target) && !event.target.classList.contains("icon")) {
            popup.classList.add("hidden");
        }
    });

    // ===============================
    // CLICK ITEMS INSIDE ACCORDION
    // ===============================
    document.querySelectorAll(".item").forEach(item => {
        item.addEventListener("click", () => {
            const name = item.textContent.trim();
            const img = item.dataset.img;
            const desc = item.dataset.desc;

            // Show the right side details
            showItemDetails(name, img, desc);

            // Save persistent state
            localStorage.setItem("selectedIncense", JSON.stringify({
                popupItem: name,
                img: img,
                desc: desc
            }));
        });
    });




    // Handle accordion expand/collapse
    document.querySelectorAll(".accordion").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");

            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });



});


// ===============================
// LOGOUT → CLEAR STATE
// ===============================
document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("selectedIncense");
});
