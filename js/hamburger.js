jQuery( function( $ ) {
	$( ".is-hamburger" ).on( "click", function() {
		$( this ).toggleClass( "is-open" );
		$( ".l-aside" ).toggleClass( "is-open" );
	} );
} );
