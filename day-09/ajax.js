function ajax( options ) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener( 'readystatechange', function( event ) {
        if( xhr.readyState === 4 ) {
            if( xhr.status === 200 ) {
                options.success( xhr.responseText );
            } else {
                options.error();
            }
        }
    });

    xhr.open( options.method, options.url, true );
    xhr.send( options.data );
}