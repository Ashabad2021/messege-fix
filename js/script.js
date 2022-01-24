const main__display = document.querySelector('.main__display');
const modal__0801 = document.querySelector('.modal__0801');
const modal__0804 = document.querySelector('.modal__0804');
const m0801 = document.querySelector("#m0801");
const m0804 = document.querySelector("#m0804");
const back = document.querySelectorAll(".back");
const pf0804 = document.querySelector(".pf0804");
const send = document.querySelector(".send");
const input0804 = document.querySelector(".input0804");
const modal__main0804 = document.querySelector('.modal__main0804');
const modal__main0801 = document.querySelector('.modal__main0801');


pf0804.addEventListener("click", () => {
  pf0804.style.height = "100px";
  input0804.style.height = "90px";
  send.style.display = "block";
});

m0804.addEventListener('click',()=>{
main__display.style.display = 'none'
modal__0804.style.display = 'block'
})
m0801.addEventListener('click',()=>{
  main__display.style.display = 'none'
  modal__0801.style.display = 'block'
  })

  back[0].addEventListener("click", () => {
    modal__0801.style.display = "none";
    main__display.style.display = 'block'
  });
  back[1].addEventListener("click", () => {
    modal__0804.style.display = "none";
    main__display.style.display = 'block'
  });

  function create0801 () {
    const myMessege = input0804.value
    console.log(myMessege);
    modal__main0801.insertAdjacentHTML('beforeend',` <div class="pop__body">
                <h1 class="pop__date">- ${date}/${month}/${year} -</h1>
                <div class="pop__block">
                  <div class="pop__avatar">
                    <img src="./img/contact.png" alt="" />
                  </div>
                  <div class="pop__info">
                    <p>
                      ${date}/${month}/${year} ${hour}:${min}:${sec} ${myMessege} gecirelen 50.00 manat
                      Saklanan 0.10 manat
                    </p>
                  </div>
                </div>
                <p class="time">${hour}:${min}</p>
              </div>`)
  }
  
  function create0804 () {
    const myMessege = input0804.value
    pf0804.style.height = "40px";
              input0804.style.height = "40px";
              send.style.display = "none";
   
              modal__main0804.insertAdjacentHTML('beforeend',` <div class="pop__body">
                <h1 class="pop__date">- ${date}/${month}/${year} -</h1>
                <div class="pop__block">
                  <div class="pop__avatar">
                    <img src="./img/contact.png" alt="" />
                  </div>
                  <div class="pop__info">
                    <p>
                    Gecirim 50,00 manat bellenen belga ${myMessege} nobata goyulan
                    </p>
                  </div>
                </div>
                <p class="time">${hour}:${min}</p>
              </div>`)
             
              
  }
  
  const f1 =(event)=>{
    event.stopPropagation()
    create0801()
    create0804()
    sound()
    input0804.value= ""
       send.style.display = "none";
       pf0804.style.height = "50px";
       input0804.style.height = "40px";
  }
  
  send.addEventListener('click',f1)
 
  

const time = new Date();
const year = time.getFullYear();
const month = time.getMonth()+1 < 10 ? "0"+ (time.getMonth()+1) : time.getMonth()+1
const date = time.getDate() < 10 ? "0" + time.getDate() : time.getDate()
const hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
const min = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
const sec = time.getSeconds() <10 ? "0"+ time.getSeconds() : time.getSeconds()


console.log(year, month, date, hour, min, sec);



console.log(month);




const sound = () =>{
  const audio = new Audio()
  audio.src = "222.m4a"
  audio.play()
}

// const date = time.getDate();
// const hour = time.getHours();
// const min = time.getMinutes();
// const sec = time.getSeconds();
