function getTriangleArea(a, h) {
	var a;
	var h;
	var value;

	value = a*h/2;
	
	if ((a > 0) && (h > 0)) 
		return value;
		 
	else 
		return ('Niepoprawne dane!');

}

	console.log(getTriangleArea(10, 6));
	
	var triangle1Area = getTriangleArea(10, 15);
	var triangle2Area = getTriangleArea(20, 25);
	var triangle3Area = getTriangleArea(30, 40);
	
	console.log(triangle1Area);
	console.log(triangle2Area);
	console.log(triangle3Area);