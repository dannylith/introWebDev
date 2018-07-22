function validateItems()
{
	
	//assign variables
	var name1 = document.getElementById("name").value;
	var name1Len = document.getElementById("name").value.trim().length;
	var email = document.getElementById("email").value;
	var emailLen = document.getElementById("email").value.trim().length;
	var phone = document.getElementById("phone").value;
	var phoneLen = document.getElementById("phone").value.trim().length;
	var txtArea = document.getElementById("info").value;
	var txtAreaLen = document.getElementById("info").value.trim().length;
	

	
	//check to see if there is any data in the text box
	if(name1Len == 0 || phoneLen == 0 || txtAreaLen == 0 || emailLen == 0)
	{
		//alert message about missing an input for one or more of the textbox
		showGreenOrRed(name1Len, phoneLen, txtAreaLen, emailLen); //change color of textbox
		alert("Please enter in valid information");
		return false;
		
	}else
	{
		//alert messsage saying form has been successfully submitted
		showGreenOrRed(name1Len, phoneLen, txtAreaLen, emailLen); //change color of textbox
		alert("Form has been submitted successfully");
		document.getElementById("reset").reset();
		return false;
	}
}

function showGreenOrRed(name1Len, phoneLen, txtAreaLen, emailLen)
{
	//checks to see if the textbox has any data in it 
	//and change the color around it to red or green
	//and add an asterisk if color is red
	if(name1Len == 0)
		{
			document.getElementById("name").className = "form-control is-invalid";
			document.getElementById("nameAsterisk").innerText = "*";
		}
		else
		{
			document.getElementById("name").className = "form-control is-valid";
			document.getElementById("nameAsterisk").innerText = "";
		}
		if(phoneLen == 0)
		{
			document.getElementById("phone").className = "form-control is-invalid";
			document.getElementById("phoneAsterisk").innerText = "*";
		}
		else
		{
			document.getElementById("phone").className = "form-control is-valid";
			document.getElementById("phoneAsterisk").innerText = "";
		}
		if(txtAreaLen == 0)
		{
			document.getElementById("info").className = "form-control is-invalid";
			document.getElementById("infoAsterisk").innerText = "*";
		}
		else
		{
			document.getElementById("info").className = "form-control is-valid";
			document.getElementById("infoAsterisk").innerText = "";
		}
		if(emailLen == 0)
		{
			document.getElementById("email").className = "form-control is-invalid";
			document.getElementById("emailAsterisk").innerText = "*";
		}
		else
		{
			document.getElementById("email").className = "form-control is-valid";
			document.getElementById("emailAsterisk").innerText = "";
		}
		
	
}