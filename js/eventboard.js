function Event(data){
    _.extend(this, data);
}

Event.prototype.createBoardItem = function(){
    var icon = "";
    var $div = $("<div>");
    $div.addClass('eventContainer');
    var eventDate = new Date(this.year, this.month, this.day);
    var now = new Date();

    if (this.cancelled){
        icon = '<span class="remove glyphicon glyphicon-remove" aria-hidden="true"></span>';
    } else if (now > eventDate){
        icon = '<span class="ok glyphicon glyphicon-ok" aria-hidden="true"></span>';
    }

    var html = '<div class="event container"><div class="title">'+ this.occasion+'</div><div class="col-xs-4 box">' + icon + '</div>' +
                '<div class="col-xs-8"><div class="dateContainer"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>' +
                '<div class="date">' + this.month + '-' + this.day + '-' + this.year + '</div></div><div class="userContainer">' +
                '<span class="glyphicon glyphicon-user" aria-hidden="true"></span><div class="user">'+this.invited_count+
                ' Invited </div></div></div></div>';


    return $div.html(html);
};