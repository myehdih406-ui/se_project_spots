const initialCards = [
{name:"Val Thorens", link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},
{name:"Restaurant terrace", link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},
{name:"An outdoor cafe", link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},
{name:"A very long bridge, over the forest and through the trees", link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},
{name:"Tunnel with morning light", link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},
{name:"Mountain house", link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"}




];

const profileEditButton = document.querySelector(".profile__edit");
 const profileEditModal = document.querySelector("#edit__modal");
 const modalCloseBtn = profileEditModal.querySelector(".modal__close-button");
const newPostModal = document.querySelector("#upload__modal");
const newPostModalCloseBtn = newPostModal.querySelector(".modal__close-button");
const newPostButton = document.querySelector(".profile__button");
const editProfileForm = profileEditModal.querySelector(".modal__form");
const editProfileNameInput = profileEditModal.querySelector("#proifle_name-input");
const editProfileDescriptionInput = profileEditModal.querySelector("#profile_description-input");
const profileTitleEl = document.querySelector(".profile__title");
const profileSubTitleEl = document.querySelector(".profile__subtitle");
const addCardFormElement = newPostModal.querySelector("#addcard");
const linkInput = addCardFormElement.querySelector("#post__image-link");
const nameInput = addCardFormElement.querySelector("#post__caption");


function openModal(modal) {
    modal.classList.add("modal_is-opened");
    
}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened");

}

newPostButton.addEventListener("click", function(evt){
    evt.preventDefault();
    openModal(newPostModal);
})



 profileEditButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    editProfileNameInput.value = profileTitleEl.textContent;
    editProfileDescriptionInput.value = profileSubTitleEl.textContent;
    openModal(profileEditModal);
});
modalCloseBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    closeModal(profileEditModal);
    
})

newPostModalCloseBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    closeModal(newPostModal);
    
})
function handleEditProfileSubmit(evt){
    evt.preventDefault();
      profileTitleEl.textContent = editProfileNameInput.value; 
     profileSubTitleEl.textContent = editProfileDescriptionInput.value; 
      closeModal(profileEditModal);
     

}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);



function handleAddCardSubmit(evt){
    evt.preventDefault();
    console.log(linkInput.value);
    console.log(nameInput.value);
     closeModal(newPostModal);
     addCardFormElement.reset();
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
initialCards.forEach(function(item){
    console.log(item.name);
});