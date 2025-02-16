function ReturnToPage(url) {
    setTimeout(function () {
        document.location.pathname = url;
    }, 10);
}