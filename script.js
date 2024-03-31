let users=[
    {
        profilePic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:3,
        displayPic:"https://images.unsplash.com/photo-1616738935736-c0b9211e1f18?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location:"Ayodhya, India",
        name: "Harshita",
        age: 23,
        interests: ["Music", "painting"],
        bio: "I am a music enthusiast and I like to play music. I like to paint and I like to play painting. I love spending times with music",
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1541911087797-f89237bd95d0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:4,
        displayPic:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0JTIwYm95fGVufDB8fDB8fHww",
        location:"Delhi, India",
        name: "Shobhit",
        age: 28,
        interests: ["Music", "painting"],
        bio: "I am a music enthusiast and I like to play music. I like to paint and I like to play painting. I like to sing and dance with the grooves  ",
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1620332981233-fc3fa893bfb5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:6,
        location:"Bhopal, India",
        name: "Shivangi",
        age: 25,
        interests: ["Music", "painting"],
        bio: "I am a music enthusiast and I like to play music. I like to paint and I like to play painting. I like to paint and I like to paint",
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1508185140592-283327020902?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:5,
        location:"Nagpur, India",
        name: "Nishi",
        age: 26,
        interests: ["Music", "painting"],
        bio: "I am a music enthusiast and I like to play music. I like to paint and I like to play painting. I like to paint and I like to Dance",
        isFriend: null
    }

]
function select(elem){
    return document.querySelector(elem);
}
let curr=0;

let isanimating=false;

function setData(index){
    let profileImg = select(".prof img");
    if (profileImg) {
        console.log("Updating profile image...");
        profileImg.src = users[index].profilePic;
    } else {
        console.log("Profile image element not found!");
    }

    // Update badge value
    let badge = select(".badge h5");
    if (badge) {
        console.log("Updating badge...");
        badge.textContent = users[index].pendingMessage;
    } else {
        console.log("Badge element not found!");
    }
    select(".location h3").textContent = users[index].location;
    select(".name").textContent = users[index].name;
    select(".age").textContent = users[index].age;
    select(".bio p").textContent = users[index].bio;

    clutter="";

    users[index].interests.forEach(function(interest){
        clutter+=`<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        <i class="text-sm ri-music-2-fill"></i>
        <h3 class="text-sm tracking-tight">${interest}</h3>
    </div>`;
    })

    select(".tags").innerHTML=clutter;
}
(function setInitials() {
    console.log("Setting initials...");
    
    // Update main profile image
    select(".maincard img").src = users[curr].displayPic;

    // Update incoming card image (assuming there's an incoming card)
    select(".incomingcard img").src = users[curr + 1].displayPic;

    // Update profile image
    
    setData(curr);
    // Incrementing curr to 2 (this might need clarification)
    curr = 2;

    console.log("Initials set!");
})();




function imageChange(){
    if (!isanimating){
        isanimating=true;
        let tl=gsap.timeline({
            onComplete:function(){
                isanimating=false;
                let main=select(".maincard");
                let incoming=select(".incomingcard"); 
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard"); 
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale: 1,
                    opacity:1
                })
                if (curr=== users.length) curr=0;
                select(".maincard img").src=users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard")  
            }
        })
        tl.to(".maincard",{
            scale:1.1,
            opacity:0,
            ease: Circ,
            duration:.7
        },"a")
        tl.to(".incomingcard",{
            scale:.9,
            opacity:1,
            ease: Circ,
            duration:1.1
        },"a")
    }

    
};


let deny= select(".deny")
let accept= select(".accept")
deny.addEventListener("click", function(){
    
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y: "100%",
        opacity:0,
        duration:1.5,
        stagger:.06,
        ease:Power4.easeInOut,
    })
})

accept.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y: "100%",
        opacity:0,
        duration:1.5,
        stagger:.06,
        ease:Power4.easeInOut,
    })
});


(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
        let div=document.createElement("div");
        div.classList.add(`${element.classList[1]}container`,"overflow-hidden");
        div.appendChild(element);
        select(".details").appendChild(div);
    })
})();











