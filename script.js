'use strict';

const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const overlay = document.querySelector('.overlay');
const btnClosedAboutModal = document.querySelector('.close-about-modal');
const btnClosedContactModal = document.querySelector('.close-contact-modal');
const btnClosedSkillsModal = document.querySelector('.close-skills-modal');
const btnsOpenAboutModal = document.querySelector('.about-modal');
const btnsOpenContactModal = document.querySelector('.contact-modal');
const btnsOpenSkillsModal = document.querySelector('.skills-modal');

const openAboutModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closedAboutModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openContactModal = function () {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closedContactModal = function () {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openSkillsModal = function () {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closedSkillsModal = function () {
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenAboutModal.addEventListener('click', openAboutModal)
btnsOpenContactModal.addEventListener('click', openContactModal)
btnsOpenSkillsModal.addEventListener('click', openSkillsModal)


btnClosedAboutModal.addEventListener('click', closedAboutModal);
overlay.addEventListener('click', closedAboutModal);

btnClosedContactModal.addEventListener('click', closedContactModal);
overlay.addEventListener('click', closedContactModal);

btnClosedSkillsModal.addEventListener('click', closedSkillsModal);
overlay.addEventListener('click', closedSkillsModal);

document.addEventListener('keydown', function (e) {
  //   console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closedAboutModal();
  }
});


document.addEventListener('keydown', function (f) {
  //   console.log(e.key);

  if (f.key === 'Escape' && !modal2.classList.contains('hidden')) {
    closedSkillsModal();
  }
});

document.addEventListener('keydown', function (g) {
  //   console.log(e.key);

  if (g.key === 'Escape' && !modal3.classList.contains('hidden')) {
    closedSkillsModal();
  }
});
