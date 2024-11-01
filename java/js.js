
//index.html 
function scrollToDiv() {
    const targetDiv = document.getElementById('targetDiv');
    targetDiv.scrollIntoView({ behavior: 'smooth' });

    targetDiv.style.boxShadow="5px 5px 10px #437223";

    setTimeout(() => {
        targetDiv.style.removeProperty('box-shadow');
    }, 2000); 
}


//plants.html
const totop = document.querySelector(".up");

window.addEventListener("scroll",() => {
    if(window.pageYOffset >900){
        totop.classList.add("active");
    } else{
        totop.classList.remove("active");
    }
})



function filterList(filterValue) {
    const items = document.querySelectorAll('#articles article');

    items.forEach(item => {
        const price = parseFloat(item.querySelector('.price').textContent);

        if (filterValue === 60) {
            if (price > 60) {
                item.style.display = "";
            } else {
                item.style.display = "none"; 
            }
        } else if (filterValue === 50) {

            if (price < 60 && price > 30 ) {
                item.style.display = "";
            } else {
                item.style.display = "none"; 
            }
        } else if (filterValue === 30) {
            if (price < 30) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        } else {
            item.style.display = "";
        }
    });
}


function sortList(sortOrder) {
    const items = Array.from(document.querySelectorAll('#articles article'));

    items.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').textContent.replace(/[^0-9.-]+/g, ''));
        const priceB = parseFloat(b.querySelector('.price').textContent.replace(/[^0-9.-]+/g, ''));

        if (sortOrder === 'asc') {
            return priceA - priceB;
        } else if (sortOrder === 'desc') {
            return priceB - priceA;
        }
        return 0;
    });

    const container = document.getElementById('articles');
    items.forEach(item => container.appendChild(item)); 
}


    function searchList() {
        const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
        const items = document.querySelectorAll('#articles article');
    
        items.forEach(item => {
            const plantName = item.querySelector('.plant').textContent.trim().toLowerCase();
            const isMatch = searchInput === '' || plantName.includes(searchInput);
            item.style.display = isMatch ? "" : "none";
        });
}
