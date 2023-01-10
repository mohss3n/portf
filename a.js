let text = '{"employees":[' +
'{"ids":"1","firstName":"mohssen","lastName":"Doe" },' +
'{"ids":"2","firstName":"Anna","lastName":"Smith" },' +
'{"ids":"3","firstName":"Peter","lastName":"Jones" }]}';


obb=[ {
	id:1,
	name: "swatch",
	price:55,
	instock: 100,
	description: "loremffffd",
	imgSrc:"/images/p1.png"
},
{
	id:2,
	name: "phil",
	price:55,
	instock: 100,
	description: "loremffffd",
	imgSrc:"/images/p1.png"
},
{
	id:3,
	name: "watch",
	price:55,
	instock: 100,
	description: "loremffffd",
	imgSrc:"/images/p1.png"
}


]


	function c(id){
		obb.forEach( (product)  => {
			alert(product.id)

		});
	}

