
function ensureCols(n, callback){
  if($('.counter .number').length > n){
    for(var i=n; i < $('.counter .number').length; i++){
      $('.counter .number').eq(i).remove();
    }
    return;
  }
  for(var i=0; i<n; i++){
    if(!$('.counter .number').eq(i).length){
      var e = $('.counter .number').eq(0).clone();
      $('.counter').append(e);
    }
  }
}

function getTotal(){
  var total = 0;
  $('input:checkbox:checked').each(function(){
    total += parseInt($(this).val());
  });
  return total;
}

function updateCounter(){
  nr = getTotal();
  var factor = 40;
  var nrs = ( nr + '' ).split('');
  ensureCols(nrs.length);
  for(var i=0; i<nrs.length; i++){
    $('.counter .number').eq(i).animate({'top':'-' + (nrs[i] * factor) + 'px'}, 1000);
  }
}

$(document).on('change', 'input:checkbox', updateCounter);