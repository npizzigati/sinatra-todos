// Delete confirmation
$('form.delete').submit(function(event) {
    let deleteMe = confirm('Really delete?');
    event.preventDefault();
    event.stopPropagation();
    if (deleteMe) {
        // console.log(this)
        // this.submit()
        form = $(this);
        $.ajax({
            url: form.attr('action'),
            method: 'post',
            dataType: 'text',
            success: function(todoType) {
                console.log(todoType);
                if (todoType == 'item') {
                    form.parent().remove();
                } else {
                    window.location.href = '/lists';
                } 
            },
            error: function(data) {
                console.log('error!');
            }
        });
        
    }
});
