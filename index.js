function showJournal() {
     fadeTransition('home', 'content');
 }
 
 function goBack() {
     fadeTransition('content', 'home');
 }
 
 function fadeTransition(hideId, showId) {
     let hideElement = document.getElementById(hideId);
     let showElement = document.getElementById(showId);
     
     hideElement.classList.remove('show');
     setTimeout(() => {
         hideElement.style.display = 'none';
         showElement.style.display = 'block';
         setTimeout(() => showElement.classList.add('show'), 10);
     }, 500);
 }
 
 function toggleSidebar() {
     const sidebar = document.getElementById("sidebar");
     sidebar.style.left = sidebar.style.left === "0px" ? "-340px" : "0px";
 }
 
 function showDay(day) {
     const content = document.getElementById("content");
 
     const journalEntries = {
         1: { text: "On our first day, Ma’am Pems Mariel D. Rodil oriented us about the dress code and other policies, emphasizing professionalism during our stay. We were assigned to the Admin Section Office, where we started by cleaning the area, including sweeping and mopping the floors. Afterward, we rested while waiting for further instructions. Later in the afternoon, we completed additional cleaning tasks and enjoyed a brief snack break before leaving for home.", 
             img: "day1.jpg" 
         },
         2: { text: "The day began with attending the Weekly Spiritual Meeting led by Bishop C. Rolando Pons. Ma’am Rodil introduced us to the Chief of Police, PLTCOL RODEN FULACHE SUAREZ, who encouraged us to learn and adapt during our stay. After that we clean the Admin Section, we assisted in reviewing and organizing the Sworn Statements of Assets, Liabilities, and Net Worth (SALNs) of 148 personnel. We ensured all documents were arranged alphabetically before concluding the day.  ", 
             img: "day2.jpg" 
         },
         3: { text: "I spent the morning continuing to organize the SALNs alphabetically, while Glayza cleaned the Admin Section. Mid-morning, we were tasked with emptying and sorting the contents of the cabinets. The afternoon was less eventful, as most tasks were confidential. However, we maintained the cleanliness of the office before heading home. ", 
             img: "day3.jpg" 
         },
         4: { text: "We started the day by cleaning windows and arranging picture frames. Afterward, Ma’am Pems Rodil reassigned us to the Police Community Affairs and Development (PCAD) section. Along with the patrol team, we visited Canubing School to distribute flyers and schedule lectures on drug awareness and road safety. The afternoon was quieter, with minor tasks such as washing dishes and preparing the office for closing.", 
             img: "day4.jpg"
         },
         5: { text: "We attended another Weekly Spiritual Meeting led by Bishop C. Rolando Pons. I was advised to rest outside the PCAD office due to feeling unwell but later on Sir Oria asked Glayza and I could help him assisted with writing Corrections for the Corrective Action Report. After lunch, we completed photocopying tasks and organized certifications. We ended the day by cleaning the office and preparing it for the next day", 
             img: "day5.jpg" 
         },
         6: { text: "The day began at 8:18 AM when we clocked in. Ma’am Pems Mariel D. Rodil informed us that our rotation was complete and we would return to the Admin Section Office. We help  Sir Reyes Redénson Acideva in processing the signatures for the Sworn Statements of Assets, Liabilities, and Net Worth (SALNs) of the personnel.  At 9:03 AM, we started arranging the signed SALNs alphabetically. Once the task was done, Ma’am Charmie Aligata requested that if we could be borrowed for her documentation and report and gave us a flyers and delivering lectures about anti-bullying, anti-illegal drugs, and Executive Order 70 (regarding the Communist Armed Conflict). Afterward, we took our lunch break.  We returned to the Admin Section at 12:56 PM and waited for another task. Later, we helped our co-immersion students clean the women’s detention area. After that we take a rest at the Admin Section. By the end of the day, Ma’am Rodil gave us permission to head home.", 
             img: "day6.jpg" 
         },
         7: { text: "We began the day by attending the Weekly Spiritual Meeting led by Bishop C. Rolando Pons. Following the session, Ma’am Rodil assigned us to trim the grass outside the office. Additionally, we helped move tables to the center of the Admin Section Office and wiped down computer wires.  Later, I worked with my colleagues to remove wallpaper and tarpaulins from the walls to prepare the area for painting. We also removed the whiteboards and ensured the room was swept clean. After that, we help the boys put back the curtains and rearranging the tables, we rested until Ma’am Rodil allowed us to leave.", 
             img: "day7.jpg" 
         },
         8: { text: "In the morning, Ma’am Rodil tasked us with dismantling and packing the Christmas tree and decorations into a large box. Glayza and I took the initiative to sweep the front of the office before being called by Sir Oria to help with writing Corrections for the Corrective Action Report in the Operations Office, which we completed before lunch.  In the afternoon, we helped clean and organize the stockroom. While the boys carried boxes and sacks outside, we sorted reusable items and disposed of the unusable ones. After cleaning, we were given money to buy snacks, like turon, maruya, and sinulbot. We returned to the Admin Section just in time to welcome a visit from Ma’am Liezel Maranan. We spent the remainder of the day resting and waiting for further instructions before going home.", 
             img: "day8.jpg" 
         },
         9: { text: "The day started with the Police Formation, after which Ma’am Rodil assigned us to sweep outside the office. During our break, the boys were tasked to dispose of garbage at the dumpsite, and while waiting for them, we went to the canteen to buy drinks such as coffee and milk. When they returned, they shared what happened while we were laughing about the events that occurred to them. After that we rested until Ma’am Rodil allowed us to leave.  ", 
             img: "day9.jpg" 
         },
         10: { text: "Glayza and I began the day by sweeping the office and mopping the floors. Shortly after, Kuya Ruzzel asked for our help in packing pancit for the Canubing B-PATS training. Later, we help the boys in cleaning the back of the building by helping them gather the moringa branches that Michael had cut, which we threw into the disposal area, and swept up the remaining leaves.After cleaning the back of the building, Ma’am Rodil provided us with bananas to boil and coffee to enjoy while resting. Later, our teachers visited to check on our experiences during the 10-day immersion. They handed us certificates and took photos with us in front of the PNP building.  In the afternoon, we helped Ma’am Rodil remove the papers from a cabinet and pack them into sacks. The boys moved the cabinet outside. After lunch, the rest of the day was uneventful, so Ma’am Rodil allowed us to rest until it was time to go home.  This 10-day immersion was a transformative experience that provided me with valuable insights, practical skills, and a deeper appreciation for real-world applications of my knowledge. It was not just about fulfilling requirements but also about embracing discipline, collaboration, and the significance of responsibility. The experience enriched my understanding, fostered personal growth, and equipped me with lessons that I will carry forward in my future endeavors.", 
             img: "day10.jpg" 
         }
     };
 
     if (journalEntries[day]) {
         content.innerHTML = `
             <div class="journal-entry">
                 <div class="text-section">
                     <h3>Day ${day}</h3>
                     <p>${journalEntries[day].text}</p>
                     <button onclick="goBack()">Back to Journal</button>
                 </div>
                 <div class="image-section">
                     <img src="${journalEntries[day].img}" alt="Day ${day} Image">
                 </div>
             </div>
         `;
     }
    
     toggleSidebar();
    } 
    function toggleProfile() {
        var panel = document.getElementById("profile-panel");
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    }
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        
        const colors = ["pink", "purple"];
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        document.getElementById("hearts-container").appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 150);
