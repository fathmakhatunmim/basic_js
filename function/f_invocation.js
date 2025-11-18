// ফাংশন লেখা মানে শুধু “নির্দেশনা বানানো”, আর invocation মানে সেই নির্দেশনা “চালানো”

function a(){
    console.log(this);
}
a();//aykhane this function ta holo just jeta samne acche otai 
// current function use hobe 


let x = {
    a: function a(){
        console.log(this);
    }
}
x.a();

