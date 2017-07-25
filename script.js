//takes base input and creates base grid
var boxSize = prompt("How many blocks in the box?", "50");
var boxPrcnt = 100/boxSize;

for (var i = 0; i <= boxSize; i++) {
	$(".container").append('<div class="floating-box"></div>');
};

//turns blocks black
$(".floating-box").mouseenter(function(){
	$(this).addClass("floating-color").removeClass("floating-box");
});	

//clears box and takes new input
function clrFunc(){
	var boxSize = prompt("How many blocks in the box?", "50");
	$(".floating-color").addClass("floating-box").removeClass("floating-color");
	for (var i = 0; i <= boxSize; i++) {
		$(".container").append('<div class="floating-box"></div>');
	};
};

