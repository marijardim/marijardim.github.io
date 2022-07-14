//DEBOUNCE DO LODASH. É CARREGADA SÓ ESSA PARTE PRA N PRECISAR PEGAR TUDO.

debounce = function (func, wait, immediate) {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//Mudar tab ao click
$('[data-group]').each(function () {
	var $allTarget = $(this).find('[data-target]'),
		$allClick = $(this).find('[data-click]'),
		activeClass = 'active';

	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);

	$allClick.click(function (e) {
		e.preventDefault();

		var id = $(this).data('click'),
			$target = $('[data-target="' + id + '"]');

		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);

		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});

//Scroll suave para link interno

$('.menu-nav a[href^="#"]').click(function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		menuHeight = $('.menu').innerHeight(),
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});


//Scroll suave para o topo
$('.logo').click(function (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 500)
});
//Mudar para active o menu de acordo com a área
$('section').each(function () {
	var height = $(this).height(),
		offsetTop = $(this).offset().top,
		menuHeight = $('.menu').innerHeight(),
		id = $(this).attr('id'),
		$itemMenu = $('a[href="#' + id + '"]');

	$(window).scroll(debounce(function () {
		var scrollTop = $(window).scrollTop();
		if (offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
			$itemMenu.addClass('active');
		} else {
			$itemMenu.removeClass('active');
		}
	}, 200));
});

//Botão do menu mobile 

$('.mobile-btn').click(function () {
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});


//Slider

function slider(sliderName, velocidade) {
	var sliderClass = '.' + sliderName,
		activeClass = 'active',
		rotate = setInterval(rotateSlide, velocidade)


	$(`${sliderClass} > :first`).addClass(activeClass)
	$(sliderClass).hover(function () {
		clearInterval(rotate)
	}, function () {
		rotate = setInterval(rotateSlide, velocidade)

	})


	function rotateSlide() {
		var activeSlide = $(`${sliderClass} > .${activeClass}`),
			nextSlide = activeSlide.next()

		if (nextSlide.length == 0) {
			nextSlide = $(`${sliderClass} > :first`)
		}
		activeSlide.removeClass(activeClass);
		nextSlide.addClass(activeClass)
	}



}
slider('introducao', 2000)

//Animação ao scroll
//serve para colocar as variáveis dentro de um escopo que não seja global
(function(){
var $target = $('[data-anime="scroll"]'), //seleciona todas as ULs com esse dataset
	animationClass = 'animate', //coloca a string 'animate' em uma variavel
	offset = $(window).height() * 3 / 4 //coloca a altura da janela * 3/4 em uma variável

function animeScroll() {
	var documentTop = $(document).scrollTop() // distanica entre o scroll e o topo da pagina
	$target.each(function () { //função é executada para cada UL com o dataset data-anime="scroll"
		var itemTop = $(this).offset().top; //distância entre o topo da UL específica e o topo da pagina
		if (documentTop > itemTop - offset) {
			$(this).addClass(animationClass);
		} else {
			$(this).removeClass(animationClass);
		}
	});
}
animeScroll();

$(document).scroll(debounce(function(){
	animeScroll();
}, 200));
})();

