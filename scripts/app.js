const myFullName = "Bijay Gurung";
const myStudentNUmber = "1171265";

const result = `${myFullName}-${myStudentNUmber}`;
console.log(result);

const headerContent = document.querySelector('h1');
headerContent.innerHTML = result;
headerContent.classList.add('headingPrimary');

