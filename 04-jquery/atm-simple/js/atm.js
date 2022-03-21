const checkForZero = function () {
    $('.zero').removeClass('zero');

    const checkingBalance = $('#checking-balance').text().slice(1);
    if (checkingBalance <= 0) {
        $('#checking-balance').addClass('zero');
    }

    const savingsBalance = $('#savings-balance').text().slice(1);
    if (savingsBalance <= 0) {
        $('#savings-balance').addClass('zero');
    }
};

checkForZero();

$('#checking-deposit').on('click', function () {
    const currentBalance = + $('#checking-balance').text().slice(1); // Remove the leading $ symbol
    const depositAmount = + $('#checking-amount').val();
    const newBalance = currentBalance + depositAmount;
    $('#checking-balance').text('$' + newBalance);
    checkForZero();
});

$('#checking-withdraw').on('click', function () {
    const currentBalance = + $('#checking-balance').text().slice(1); // Remove the leading $ symbol
    const otherBalance = + $('#savings-balance').text().slice(1);
    const withdrawAmount = + $('#checking-amount').val();
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - withdrawAmount;

    if (newBalance >= 0) {
        $('#checking-balance').text('$' + newBalance);
    } else if (withdrawAmount <= totalBalance) {
        $('#checking-balance').text('$0');
        // newBalance is the negative amount that we overdraw from the other account
        $('#savings-balance').text('$' + (otherBalance + newBalance)); // wtf?
    }

    checkForZero();
});

$('#savings-deposit').on('click', function () {
    const currentBalance = + $('#savings-balance').text().slice(1); // Remove the leading $ symbol
    const depositAmount = + $('#savings-amount').val();
    const newBalance = currentBalance + depositAmount;
    $('#savings-balance').text('$' + newBalance);
    checkForZero();
});

$('#savings-withdraw').on('click', function () {
    const currentBalance = + $('#savings-balance').text().slice(1); // Remove the leading $ symbol
    const otherBalance = + $('#checking-balance').text().slice(1);
    const withdrawAmount = + $('#savings-amount').val();
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - withdrawAmount;

    if (newBalance >= 0) {
        $('#savings-balance').text('$' + newBalance);
    } else if (withdrawAmount <= totalBalance) {
        $('#savings-balance').text('$0');
        // newBalance is the negative amount that we overdraw from the other account
        $('#checking-balance').text('$' + (otherBalance + newBalance)); // wtf?
    }

    checkForZero();
});