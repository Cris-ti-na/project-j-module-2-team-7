"use strict";const nameElement=document.querySelector(".js-input-name"),positionElement=document.querySelector(".js-input-job"),emailElement=document.querySelector(".js-input-email"),telephoneElement=document.querySelector(".js-input-telephone"),linkedinElement=document.querySelector(".js-input-linkedin"),githubElement=document.querySelector(".js-input-github"),name=document.querySelector(".js-card-name"),job=document.querySelector(".js-card-job"),email=document.querySelector(".js-icon-email"),linkedin=document.querySelector(".js-icon-linkedin"),github=document.querySelector(".js-icon-github"),userData={};function getInputValues(){userData.name=nameElement.value,userData.job=positionElement.value,userData.email=emailElement.value,userData.telephone=telephoneElement.value,userData.linkedin=linkedinElement.value,userData.github=githubElement.value}function updateCard(e){name.innerHTML=e.name||"Nombre Apellido",job.innerHTML=e.job||"Puesto de trabajo",email.setAttribute("href","mailto:"+e.email),linkedin.setAttribute("href",e.linkedin),github.setAttribute("href","https://github.com/",e.github)}function result(){getInputValues(),updateCard(userData)}console.log(email),nameElement.addEventListener("keyup",result),positionElement.addEventListener("keyup",result),emailElement.addEventListener("keyup",result),telephoneElement.addEventListener("keyup",result),linkedinElement.addEventListener("keyup",result),githubElement.addEventListener("keyup",result);const iconTelephone=document.querySelector(".js-telephone"),iconEmail=document.querySelector(".js-email"),iconLinkedin=document.querySelector(".js-linkedin"),iconGithub=document.querySelector(".js-github");function showContactTelephone(){0!==telephoneElement.value.length?iconTelephone.classList.remove("hidden"):iconTelephone.classList.add("hidden")}function showContactEmail(){0!==emailElement.value.length?iconEmail.classList.remove("hidden"):iconEmail.classList.add("hidden")}function showContactLinkedin(){0!==linkedinElement.value.length?iconLinkedin.classList.remove("hidden"):iconLinkedin.classList.add("hidden")}function showContactGithub(){0!==githubElement.value.length?iconGithub.classList.remove("hidden"):iconGithub.classList.add("hidden")}telephoneElement.addEventListener("keyup",showContactTelephone),emailElement.addEventListener("keyup",showContactEmail),linkedinElement.addEventListener("keyup",showContactLinkedin),githubElement.addEventListener("keyup",showContactGithub);