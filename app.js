$(document).ready(function () {
    let $submitBtn = $('#btnSubmit');
    $submitBtn.attr('disabled', true);

    let $textInput = $('#textInput');

    let $div = $('<div></div>');
    $div.attr('id', 'headerDiv');

    let $ul = $('<ul></ul>');
    $ul.attr('id', 'unordered-list');
    $('body').append($ul);

    $textInput.keyup(checkSubmit);
    $submitBtn.click(submitForm);

    function checkSubmit() {
        if ($textInput.val() != '') {
            $submitBtn.attr('disabled', false);
        } else {
            $submitBtn.attr('disabled', true)
        };
    };
    function submitForm(event) {
        event.preventDefault();
        let $li = $('<li></li>');
        $li.attr('class', 'list-item');
        $li.text($textInput.val())
        alert($textInput.val());
        $textInput.val('')
        $ul.append($li)
        $li.click(changeColor)
        $li.dblclick(removeListItem)
    };

    function changeColor() {
        $(this).css('color', 'rgb(' + Math.floor(Math.random() * 255) + ','
            + Math.floor(Math.random() * 255) + ','
            + Math.floor(Math.random() * 255) + ')');
    }

    function removeListItem() {
        $(this).remove()
    }
});
