let total = 0;

function handleProduct(target) {
    const menuContainer = document.getElementById('menu-list');
   const items = (target.childNodes[3].childNodes[3].innerText);
   const newEL = document.createElement('li')
   
   newEL.style.listStyle = 'decimal';
   newEL.style.fontWeight = 600;
   newEL.innerText = items

    menuContainer.appendChild(newEL)

    // product-prize 

   const moneyAmount = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
   total = parseInt(total) + parseInt(moneyAmount);
   const totalAmount = document.getElementById('total').innerText = total;
   const allTotal = document.getElementById('alltotal').innerText = totalAmount;
     
    const meakBtn = document.getElementById('makesure-btn');

    if(totalAmount > 0) {
        meakBtn.removeAttribute('disabled')
    } else {
        disable.setAttribute('disabled', true)
    }

   if(totalAmount >= 200) {
        const disableBtn = document.getElementById('disable-btn');
        disableBtn.removeAttribute('disabled')
   } 

   document.getElementById('disable-btn').addEventListener('click', function(event) {
    const eventText = event.target.value 
        if((totalAmount >= 200) || (eventText == 'SELL200')) {
            const discountAmount = document.getElementById('discount').innerText = ((totalAmount - 20) / 5).toFixed(2)
            const allTotal = document.getElementById('alltotal').innerText = (totalAmount - discountAmount).toFixed(2);
        }
   })

}

document.getElementById('goto-btn').addEventListener('click', function() {
    window.location='index.html'
})