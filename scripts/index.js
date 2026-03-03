 const profileEditButton = document.querySelector(".profile__edit");
 const profileEditModal = document.querySelector("#edit__modal");
 const modalCloseBtn = profileEditModal.querySelector(".modal__close-button");
const newPostModal = document.querySelector("#upload__modal");
const newPostButton = document.querySelector(".profile__button");
const newPostClose = document.querySelector(".modal__close");
const editProfileForm = profileEditModal.querySelector(".modal__form");
const editProfileNameInput = profileEditModal.querySelector("#proifle_name-input");
const editProfileDescriptionInput = profileEditModal.querySelector("#profile_description-input");
const profileTitleEl = document.querySelector(".profile__title");
const profileSubTitleEl = document.querySelector(".profile__subtitle");
const addCardFormElement = newPostModal.querySelector("#addcard");
const linkInput = addCardFormElement.querySelector("#post__image-link");
const nameInput = addCardFormElement.querySelector("#post__caption");
newPostButton.addEventListener("click", function(evt){
    evt.preventDefault();
    newPostModal.classList.add("modal_is-opened");
})



 profileEditButton.addEventListener("click",function(evt)
{evt.preventDefault();
    editProfileNameInput.value = profileTitleEl.textContent;
    editProfileDescriptionInput.value = profileSubTitleEl.textContent;
    profileEditModal.classList.add("modal_is-opened");

}
 )
modalCloseBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    profileEditModal.classList.remove("modal_is-opened");
})
 newPostClose.addEventListener("click", function(evt){
    evt.preventDefault();
    newPostModal.classList.remove("modal_is-opened");

})

function handleEditProfileSubmit(evt){
    evt.preventDefault();
      profileTitleEl.textContent = editProfileNameInput.value; 
     profileSubTitleEl.textContent = editProfileDescriptionInput.value; 
      profileEditModal.classList.remove("modal_is-opened");
     

}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);



function handleAddCardSubmit(evt){
    evt.preventDefault();
    console.log(linkInput.value);
    console.log(nameInput.value);
     newPostModal.classList.remove("modal_is-opened");
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);