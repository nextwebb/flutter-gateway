//var hashedValue = "08455e419ee915d5e215a53830e2fae29b4d5a0c5f7a4a5ec491bb8c4f8bc369"; // this is a variable to hold the hashed value
    var txRef = "MG-1498408604222"; // this is variable to hold the uniqeue transaction reference
    // $.ajax({
    //   url: "/integrity", // this is an endpoint that sends the hashed values and transaction reference to the client.
    //   headers: { contentType: "application/json" },
    //   dataType: "json",
    //   type: "POST",
    //   cache: false,
    //   success: function(response) {
    //     console.log(response);
    //     hashedValue = response.hash;
    //     txRef = response.txref;
    //   },
    //   error: function(err) {
    //     console.log(err);
    //   }
    // });
    
    document.addEventListener("DOMContentLoaded", function(event) {
      document.getElementById("submit").addEventListener("click", function(e) {
        var PBFKey = "FLWPUBK-b13f71d6b6c2d0d7642fcb0df026c4ca-X";
        var email = document.getElementById('email').value;
    
        // getpaidSetup is Rave's inline script function. it holds the payment data to pass to Rave.
        const getpaidSetup = function({
          PBFPubKey: PBFKey,
          customer_email: email,
          customer_firstname: "Temi",
          customer_lastname: "Adelewa",
          amount: 200,
          customer_phone: "234099940409",
          country: "NG",
          currency: "NGN",
          txref: txRef, // Pass your UNIQUE TRANSACTION REFERENCE HERE.
          //integrity_hash: hashedValue, // pass the sha256 hashed value here.
          onclose: function() {},
          callback: function(response) {
             flw_ref = response.tx.flwRef;// collect flwRef returned and pass to a 					server page to complete status check.
          console.log("This is the response returned after a charge", response);
          if(response.tx.chargeResponse =='00' || response.tx.chargeResponse == '0') {
            // redirect to a success page
          } else {
            // redirect to a failure page.
          }
          }
        });
      });
    });