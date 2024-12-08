

/* Card code finish start */


document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener('mousemove', (e) => {
        let x = e.pageX - box.offsetLeft;
        let y = e.pageY - box.offsetTop;

        document.querySelectorAll("span").forEach((ele) =>{
             ele.style.left = x + 'px';
             ele.style.top = y + 'px';
         })
     })
 })

 // Card code finish

