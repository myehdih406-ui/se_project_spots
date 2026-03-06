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