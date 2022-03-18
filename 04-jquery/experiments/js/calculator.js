const calculate = function () {
    // get the inputs
    const num1 = Number( $('#num1').val() );
    const num2 = Number( $('#num2').val() );

    // add the inputs
    const result = num1 + num2;
 
    // display the result
    $('#result').text(result);
};

$('#calculate').on('click', calculate);