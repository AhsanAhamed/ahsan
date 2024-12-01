function searchContent() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let content = document.getElementsByClassName("content")[0];

    if (content) {
        let allLinks = content.getElementsByTagName("a");

        Array.from(allLinks).forEach(link => {
            let text = link.textContent.toLowerCase();
            if (text.indexOf(input) === -1) {
                link.style.display = "none";
            } else {
                link.style.display = "block";
            }
        });
    }
}
