// Delete confirmation
$('form.delete').submit(function(event) {
    let deleteMe = confirm('Really delete?');
    event.preventDefault();
    event.stopPropagation();
    if (deleteMe) {
        console.log(this)
        this.submit()
    }
});
