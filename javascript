<script>
function showMovie(title, desc, rating, link) {
    let pop up = document.getElementById("popup");

    popup.classList.add("show");

    document.getElementById("title").innerText = title;
    document.getElementById("desc").innerText = desc;
    document.getElementById("rating").innerText = rating;
    document.getElementById("video").src = link;
}

function closePopup() {
    let pop up = document.getElementById("popup");

    popup.classList.remove("show");

    setTimeout(() 
        popup.style.display = "none";
        document.getElementById("video").src = ""; 300);
    
}
</script>