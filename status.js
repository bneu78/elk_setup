var http = require('http');
 
const nodemailer = require('nodemailer');
 
var exec = require('child_process').exec;
 
function shutdown(callback){
    exec('shutdown -r now', function(error, stdout, stderr){ callback(stdout); });
}
http.get('http://enterurlforesclusterhere:9200/_cluster/health', function(res) {
          console.log("statusCode: ", res.statusCode);
         console.log("headers: ", res.headers);
 
        res.on('data', function(d) {
                var j = JSON.parse(d);
                process.stdout.write(j.status);
if (
        j.status === 'green'
)
{
        shutdown(function(output){
                console.log(output);
                });
}
else {
        senderroralert();
}
});
 
}).on('error', function(e) {
  console.error(e);
});
 
function senderroralert() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.youremailserver.com',
        port: 25,
        secure: false, // true for 465, else false
        ignoreTLS: true
    //    auth: {
    //      user: "username", // user
    //      pass: "password" // password
    //    }
    });
 
 
    // setup email
    let mailOptions = {
        from: '"fromemail<emailaddy@youremailserver.com>',
        to: 'toemail@emailserver.com',
        subject: 'Reboot Aborted',
        text: 'Cluster Health is not Green'
    };
 
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        //console.log('Message sent: %s', info.messageId);
        //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
 
});
}
