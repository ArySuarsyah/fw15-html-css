// my booking modals

const arr = ["Name", "Category", "Location", "Date", "Price", "Image"];

const sectionParent = document.getElementById("section-parent");
const sectionClass = sectionParent.classList;
const sectionModals = document.getElementById("section-modals");
const modalTitle = document.getElementById("modals-title");
const modalsForm = document.getElementById("modals-form");

const detail = document.getElementById("detail");
const update = document.getElementById('update')
const deleteModals = document.getElementById('delete')
const createLg = document.getElementById("create-lg");




const showModals = function (e) {
  sectionClass.remove("hidden");
  modalTitle.innerText = e.target.innerText;
  for (let x = 0; x < arr.length; x++) {
    const divInput = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    divInput.className = "flex flex-col gap-2";
    input.className =
      "border-[1px] border-[#C1C5D0] outline-0 rounded-2xl w-full h-8 md:h-10 lg:h-14 lg:py-3.5 px-5";

    divInput.appendChild(label);
    divInput.appendChild(input);

    label.innerText = arr[x];
    input.placeholder = `Enter event ${arr[x]}`;

    modalsForm.appendChild(divInput);

    if (input.placeholder.includes('Date')) {
      input.type = 'date'
    } else if (input.placeholder.includes('Price')) {
      input.type = 'number'
    } else {
      input.type = 'text'
    }
  }




  const divInputDetail = document.createElement("div");
  const labelDetail = document.createElement("label");
  const inputDetail = document.createElement("input");

  divInputDetail.className = "divInput-myBooking";
  inputDetail.className =
    "border-[1px] border-[#C1C5D0] outline-0 rounded-2xl w-full h-10 lg:h-20 p-5";

  divInputDetail.appendChild(labelDetail);
  divInputDetail.appendChild(inputDetail);

  labelDetail.innerText = "Detail";
  sectionModals.appendChild(divInputDetail);

  const buttonModals = document.createElement("button");
  buttonModals.innerText = "Save";
  buttonModals.className =
    "text-white h-9 w-20 md:h-[50px] md:w-[250px] rounded-[15px] bg-[#5ea196] self-end bg-black";
  sectionModals.appendChild(buttonModals);

  console.log(sectionParent.classList);
}




detail.addEventListener("click", showModals);

update.addEventListener('click', showModals);

createLg.addEventListener("click", showModals);


// sectionModals.addEventListener('submit', function (e) {
//   console.log(e.target.value);

//   // e.preventDefault()
// })
