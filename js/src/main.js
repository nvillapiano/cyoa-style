// List functions
function main() {
    $(document).ready( function() {
        console.log('main');
    })
}

function pageLoadFade() {
    $(document).ready( function() {
        $('body').removeClass('fade');
    })
}
// Call functions
main();
pageLoadFade();
