 const profileEditButton = document.querySelector(".profile__edit");
 const profileEditModal = document.querySelector("#edit__modal");
 const modalCloseBtn = profileEditModal.querySelector(".modal__close-button");
const newPostModal = document.querySelector("#upload__modal");
const newPostButton = document.querySelector(".profile__button");
const newPostClose = document.querySelector(".modal__close")


newPostButton.addEventListener("click", function(evt){
    evt.preventDefault();
    newPostModal.classList.add("modal_is-opened");
})



 profileEditButton.addEventListener("click",function(evt)
{evt.preventDefault();
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