# curl --request POST \
#   --url https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/hosted/pay \
#   --header 'content-type: application/json' \
#   --data '
#   {
#   "txref":"MC-1520443531487",
#   "PBFPubKey":"<ADD YOUR PUBLIC KEY HERE>",
#    "customer_email": "user@example.com",
#     "amount": 1000, 
#     "currency": "NGN", 
#     "redirect_url": "https://your-website.com/urltoredirectto"
#   }
#   '