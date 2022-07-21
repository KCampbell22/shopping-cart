//jquery

function updateSubtotal(ele) {
  var productPrice = parseInt($(ele).find(".unit-price input").val());
  var productQuantity = parseInt($(ele).find(".quantity input").val());
  var subTotal = productPrice * productQuantity;

  $(ele).children(".total").html(subTotal);
  return subTotal;
}

$(document).ready(function () {
  //call updateSubtotal function for each item
  $(".item").each(function (i, ele) {
    updateSubtotal(ele);
    updateCartTotal();
  });
});

var sum = function (acc, x) {
  return acc + x;
};

function updateCartTotal() {
  var cart = [];
  $(".item").each(function (i, ele) {
    var subTotal = updateSubtotal(ele);
    cart.push(subTotal);
  });

  var total = cart.reduce(sum);
  $("#cartTotal").html(total);
}

$(document).ready(function () {
  updateCartTotal();
});






$(document).ready(function () {
  $('#addItem').on('submit', function(event) {
    // stop from default behavior
    event.preventDefault();
    var product = $(this).children('[name=product]').val();
    var price = $(this).children('[name=price]').val();
    var quantity = $(this).children('[name=quantity]').val();

    $('tbody').append('<tr class="item">' +
    '<td class="product">' + product + '</td>' +
    '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' +
    '<td class="unit-price"><input type="number" value="' + price + '" /></td>' +
    '<td class="total">' + (quantity * price) + '</td>' +    
    '<td><button class="btn remove">remove</button></td>' +
  '</tr>');
    updateSubtotal($('tbody tr:last-child'));
    updateCartTotal();
    $(this).children('[name=product]').val('');
    $(this).children('[name=quantity]').val('');
    $(this).children('[name=price]').val('');
    

  });
});


$(document).ready(function () {
  updateCartTotal();
  $('.btn.remove').on("click", function (event) {
    $(this).closest('tr').remove().fadeOut(500);
    updateCartTotal();
  });

  $('tr input').on('input', function () {
    updateSubtotal($(this).parent().parent());
    updateCartTotal();
  });
});
var timeout;
$('tr input').on('input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        updateCartTotal();
    }, 500);
    });


$(document).on('click', '.btn.remove', function (event) {
  $(this).closest('tr').remove().fadeOut(500);
  updateCartTotal();
});


