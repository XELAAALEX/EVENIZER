//storing info for each card as a object
const assign = [{
    id:1,
    img:"images/pexels-creation-hill-1681010.jpg",
    name:"Alex",
  },{
    id:2,
    img:"images/pexels-marcus-aurelius-4063856.jpg",
    name:"Aurelius",
  },{
    id:3,
    img:"images/pexels-mizuno-k-12903256.jpg",
    name:"Jennifer kaith",
  },{
    id:4,
    img:"images/pexels-spencer-selover-775358.jpg",
    name:"Parker",
  },{
    id:5,
    img:"images/pexels-vanessa-garcia-6325892.jpg",
    name:"chen_huo",
  },{
    id:6,
    img:"images/pexels-pixabay-220453.jpg",
    name:"Jim Henry",
  },{
    id:7,
    img:"images/pexels-anna-nekrashevich-6801684.jpg",
    name:"Khalid marcus",
  }];
  
  const generatecontainer = () => {
    return assign.map((x) => { //mapping every info object with the code
      return `
        <div class="card">
          <img src=${x.img}> 
          <h2>${x.name}</h2>
          <select name="pets" id="pet-select">
            <option value="">--ASSIGN TASK--</option>
            <option value="VENUE">VENUE</option>
            <option value="DOCUMENTATION">DOCUMENTATION</option>
            <option value="INVITATION CARD">INVITATION CARD</option>
            <option value="ENTERTAINMENT">ENTERTAINMENT</option>
            <option value="DECORATION">DECORATION</option>
            <option value="JUGGLER">JUGGLER</option>
          </select>
        </div>`;
    }).join(" ");
  };
  
  const row = document.querySelector('.row');
  row.innerHTML = generatecontainer();
  

  const progressBar = document.querySelector('.progress-bar');
  const taskButtons = document.querySelectorAll('.task-button');
  let progress = 0;
  
  taskButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Check if all previous tasks have been completed
      let previousTasksCompleted = true;
      for (let i = 0; i < index; i++) {
        if (!taskButtons[i].checked) {
          previousTasksCompleted = false;
          break;
        }
      }
  
      if (previousTasksCompleted) {
        // Update progress and progress bar
        progress = parseInt(button.value);
        progressBar.style.height = progress + '%';
      } else {
        // Deselect the clicked task if previous tasks are not completed
        button.checked = false;
        progress -= parseInt(button.value);
        progressBar.style.height = progress + '%';
      }
    });
  });
  