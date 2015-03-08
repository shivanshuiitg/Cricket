$(document).ready(function(){
	var i = 1;
	$('.css_button').click(function(){
		player_name = $(this).text();
		if(i<=11){
		$(this).attr('disabled','disabled').css('color','red');
		$('#player_list').prepend("<li ><span class='css_player'>" + player_name + "</span>  </li><br/><br/>");
		 players=[];
		players[i]=player_name;
		}else{
			//alert("You have selected 11 player. You cannot select any more");
			alert(players[10]);
		}
		
		
		i++;
		
	});
	$('#name_of_team').change(function(){
		team_name = $(this).val();
		//$('#player_list').html('shivanshu');
		alert(team_name);
	});
	$('#match_id').change(function(){
		match_id = $(this).val();
		//alert(match_id);
		$.post('match_selector.php',{match_id:match_id},function(data){
				$('#list12').html(data);
		}) 
	});
	
	
	
		
});
