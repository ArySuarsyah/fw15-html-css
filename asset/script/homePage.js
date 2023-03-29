
const data = [
  {
    id: 1,
    image: "image1.png",
    date: "Wed, 15 Nov, 4:00 PM",
    event: "Sights & Sounds Exhibition",
    user: "Group 28.png",
  },
  {
    id: 2,
    image: "image2.png",
    date: "Thu, 16 Nov, 7:00 PM",
    event: "See it in Gold Class",
    user: "Group 28.png",
  },
  {
    id: 3,
    image: "image1.png",
    date: "Wed, 15 Nov, 4:00 PM",
    event: "Sights & Sounds Exhibition",
    user: "Group 28.png",
  },
  {
    id: 4,
    image: "image2.png",
    date: "Thu, 16 Nov, 7:00 PM",
    event: "See it in Gold Class",
    user: "Group 28.png",
  },
  {
    id: 5,
    image: "image1.png",
    date: "Wed, 15 Nov, 4:00 PM",
    event: "Sights & Sounds Exhibition",
    user: "Group 28.png",
  },
  {
    id: 4,
    image: "image2.png",
    date: "Thu, 16 Nov, 7:00 PM",
    event: "See it in Gold Class",
    user: "Group 28.png",
  },
];

const eventList = document.querySelector(".event-list");
data.forEach((el) => {
  const divEvent = document.createElement("div");
  const pict = document.createElement("img");
  const decript = document.createElement("div");
  const dateTime = document.createElement("span");
  const eventName = document.createElement("span");
  const userGroup = document.createElement("div");
  const userList = document.createElement("img");

  divEvent.className = "event";
  pict.classList = "eventPict";
  decript.className = "event-decript";
  userGroup.className = "user-list-group";
  dateTime.className = "dateTimeEvent";
  eventName.className = "eventName";
  userList.classList = "userList";

  pict.src = `asset/image-icon/${el.image}`;
  dateTime.innerText = el.date;
  eventName.innerText = el.event;
  userList.src = `asset/image-icon/${el.user}`;

  userGroup.appendChild(userList);
  decript.appendChild(dateTime);
  decript.appendChild(eventName);
  decript.appendChild(userGroup);
  divEvent.appendChild(pict);
  divEvent.appendChild(decript);
  eventList.appendChild(divEvent);

  eventList.addEventListener("click", function () {
      window.location.href = "event.html";
    });
  console.log(el);
});
