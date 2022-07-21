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
  updateCartTotal();
  $(".remove-btn").on("click", function () {
    $(this).parent().parent().remove().fadeOut(500);
    updateCartTotal();
  });

  $('tr input').on('input', function () {
    updateSubtotal($(this).parent().parent());
    updateCartTotal();
  });

  $('#addItem').on('click', function(event) {
    event.preventDefault();
    var newItem = $('#newItem').val();
    var newPrice = $('#newPrice').val();
    var newQuantity = $('#ammount').val();

    $('#lastRow').after('<tr class="item">' +
    '<td class="product">' + newItem + '</td>' +
    '<td class="quantity"><input type="number" value="' + newQuantity + '" /></td>' +
    '<td class="unit-price"><input type="number" value="' + newPrice + '" /></td>' +
    '<td class="total">' + newQuantity * newPrice + '</td>' +    
    '<td><button class="remove-btn">remove</button></td>' +
  '</tr>');
    updateSubtotal($('tbody tr:last-child'));
    updateCartTotal();
    $(this).find('[name="product"]').val('');
    $(this).find('[name="quantity"]').val('');
    $(this).find('[name="price"]').val('');
    

  })
});

var timeout;
$('tr input').on('input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        updateCartTotal();
    }, 500);
    });



//make spinners visible
$(".remove-btn").on("click", function () {
    $(this).parent().parent().remove().fadeOut(500);
    updateCartTotal();
  });