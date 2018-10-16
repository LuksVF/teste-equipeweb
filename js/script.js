$(function(){
	var atualFs, proximoFs;

	$('.next').click(function(){
		atualFs = $(this).parent();
		proximoFs = $(this).parent().next();

		$('ul li').eq($('fieldset').index(proximoFs)).addClass('ativo');
		$('ul li').eq($('fieldset').index(atualFs)).removeClass('ativo');
		atualFs.hide();
		proximoFs.show();
	});
});