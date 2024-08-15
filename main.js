$(document).ready(function() {
    $('#form-tarefas').on('submit', function(e) {
        e.preventDefault();

        
        const tar = $('#tarefa').val();

        
        $('#lista').append('<li><span>' + tar + '</span></li>');
        $('#lista').show()


        $('#tarefa').val('');
    });


    $('#lista').on('click', 'li', function(e) {
        if (!$(e.target).is('button')) {
            $(this).find('span').toggleClass('line-through');
        }
    });


    $('#botao-limpar').on('click', function() {
        $('#lista').empty();
        $('#lista').hide()
    });
});