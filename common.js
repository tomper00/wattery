
        // Load external HTML components
        function loadHTML(id, url) {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById(id).innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
        }

        loadHTML("menu", "menu.html");
        //loadHTML("header", "header.html");
        loadHTML("footer", "footer.html");
