
const searchbtn = document.querySelector('.head .second #search');

const searchInputBox = document.getElementById('searchInput');

const menuOptions = document.querySelectorAll('.content .scrollMenu a li');

const likeOnCard = document.querySelectorAll('.card .like span .bx');

likeOnCard.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle("bxs-heart");
    });
});

menuOptions.forEach(menu => {
    menu.addEventListener('click', () => {
        // menu.classList.toggle("menuSelected");
        for (let i = 1; i <= 4; i++) {
            if (menu.id.slice(-1) != i) {
                document.getElementById("menu"+i).classList.remove("menuSelected");
            }
            else{
                document.getElementById("menu"+i).classList.add("menuSelected");
            }   
        }
    });
});

searchbtn.addEventListener('click', function handleSearch() {
    var searchQuery = searchInputBox.value;
    console.log(searchQuery);
    searchInputBox.value="";
});

searchInputBox.addEventListener("keypress", function(event) {
    if( event.key === "Enter" ) {
        event.preventDefault();
        searchbtn.click();
    }
});



