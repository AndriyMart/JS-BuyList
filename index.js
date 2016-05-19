$(function(){

	var LIST	=	$('.list-of-items');
	var ITEM_TEMPLATE	=	$('.one-item').html();
	
	function addItem(title)	{
	var node	=	$(ITEM_TEMPLATE);	//Create	new	HTML	node
	var nodeLeft = $($(".one-left").html());
	node.find(".title").text(title);	//Set	product	title
    nodeLeft.find(".title").text(title);
	//Delete	Action
	node.find(".delete").click(function(){
		node.remove();
		nodeLeft.remove();
	});

	node.find(".minus").click(function(){
		var val = parseInt(node.find('.amount').html());
		if (val != 1) {
			val = val - 1;
		}
		if (val == 1) {
			node.find(".minus").removeClass('active');
		}
		node.find('.amount').html(val);
		nodeLeft.find(".products-amount").html(val);
	});

	node.find(".plus").click(function(){
		var val = parseInt(node.find('.amount').html());
		val = val + 1;
		if (val > 1) {
			node.find(".minus").addClass('active');
		}
		node.find('.amount').html(val);
		nodeLeft.find(".products-amount").html(val);
	});

	node.find(".buy").click(function(){
		if (node.find(".buy").html() == "Куплено") {
			nodeLeft.remove();
			node.find(".delete").addClass("template");
		    node.find(".minus").addClass("template");
		    node.find(".plus").addClass("template");
            node.find(".title").addClass("crossed");
			nodeLeft.find(".title").addClass("crossed");
			nodeLeft.find(".products-amount").addClass("crossed");
			$(".list-bought").append(nodeLeft);
			node.find(".buy").html("Не куплено");
		} else {
			nodeLeft.remove;
			$(".list-left").append(nodeLeft);
			node.find(".title").removeClass("crossed");
			nodeLeft.find(".title").removeClass("crossed");
			nodeLeft.find(".products-amount").removeClass("crossed");
			node.find(".minus").removeClass("template");
			node.find(".plus").removeClass("template");
			node.find(".buy").html("Куплено");
		}
	});

	LIST.append(node);	//Add	to	the	end	of	the	list
	$(".list-left").append(nodeLeft);
	node.removeClass("template");
	nodeLeft.removeClass("template");
	}

	$(".addbtn").click(function(){
	var val = $(".field").val();
	addItem(val);
	$(".field").val("");
	});
	addItem("Помідори");
	addItem("Груші");
	addItem("Яблука");

});