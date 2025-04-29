const NameInput = document.getElementById("name");
const regInput = document.getElementById("reg");
const rollInput = document.getElementById("roll");
const addCacheBtn = document.getElementById("add-cache");
const deleteCacheBtn = document.getElementById("delete-cache");
const studentsContainer = document.getElementById("students-container");
console.log(studentsContainer.innerHTML)

addCacheBtn.addEventListener("click",()=>{
  const name = NameInput.value.trim();
  const Reg = regInput.value.trim();
  const roll = rollInput.value.trim();

  console.log(name,roll,Reg);

  if (name === "" || Reg === "" || roll ==="") {
    alert("Fields Cannot be blank!");
    return ;
  }

  const newStudent = { name, Reg, roll};
  let Students = JSON.parse(localStorage.getItem("Reg-Data") || '[]');

  Students.push(newStudent);

  localStorage.setItem("Reg-Data", JSON.stringify(Students));

  display();

  name.value = "";
  Reg.value = "";
  roll.value = "";

})

deleteCacheBtn.addEventListener("click",()=>{
  localStorage.removeItem("Reg-Data");
  display();
})

function display() {
  let Students = JSON.parse(localStorage.getItem("Reg-Data") || '[]');

  console.log(Students.length,`<p class="no-data">No Student Data available...</p>`)
  if (Students.length === 0) {
    studentsContainer.innerHTML = '<p class="no-data">No Student Data available...</p>'
  }

  let html = "";
  Students.forEach((Student)=>{
    html += `
      <div class="student-item">
        Name:${Student.name}
        Reg No.:${Student.Reg}
        Roll No.:${Student.roll}
      </div>
    `
  });

  studentsContainer.innerHTML = html;
}

