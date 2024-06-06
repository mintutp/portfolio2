

    function sendEmail(event){

        event.preventDefault();

        const name=document.getElementById("name").value;
        const email=document.getElementById("email").value;
        const message=document.getElementById("message").value;

        if(!name || !email || !message){
            alert("Please fill in all fields");
            return;
        }
        emailjs.send("service_vvl67zc", "template_96vzqer",{
            from_name:name,
            from_email:email,
            message:message,
        })
        .then(function(response){
            alert("Your Message Was Sent Successfully!");
            document.getElementById("contact-form").reset();
        }, function(error){
            alert("Oops! Something Went Wrong")
        });
    }

    document.getElementById("contact-form").addEventListener("submit", sendEmail);