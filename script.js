function volume_sphere() {
    //Write your code here
	const radius = document.getElementById("radius");
	if(radius==0){
		alert("invalid input");
	}
	const vol = radius.value*radius.value;
	document.getElementById("volume").value=vol;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
