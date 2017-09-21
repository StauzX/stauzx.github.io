$(document).ready(function(){
    currentModal = $('.main');
    currentModalName = 'main';
    $('li.menu-item').click(function(){
        var item = $(this);
        var target = item.data('target');
        openModal(target);
    });
});

var currentModal;
var currentModalName;

function openModal(target){
    if(currentModalName === target){
        return;
    }
    shrink(currentModal, function(){
        grow(currentModal);
    });
    currentModal = $('.modal#modal-' + target);
    currentModalName = target;
}

function closeModal(target){
    shrink(target);
    grow($('.main'));
}

function grow(target, callback){
    target.fadeIn(250, callback);
}

function shrink(target, callback){
    target.fadeOut(250, callback);
}