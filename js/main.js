let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let start = ["Hello, How are you?", "Hi, I am a Alexander", "Hello, My name is Alexander"];
let intro = ["Hello, I am Alexander", "Hi, I am a ChatBot created by Ashish", "Hello, My name is Alexander"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["I am good you , what about you", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["I love to talk with humans", "i like to make friends like you", "i like cooking"];
let teach = ["AI is taught by Riddhi Ma'am","Riddhi Mam teaches AI"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']
//API USED
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

       
function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('hello'||'hi')){
        let finalresult = start[Math.floor(Math.random() * start.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('morning' || 'Night'||'Afternoon'||'evening')){
        //let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        let finalresult=message+' have a great day';
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('Google'||'open' || 'search')){
        window.open( 
            "https://www.google.com", "Google");
            let finalresult='Google has been started';
            speech.text = finalresult;
    }
    if(message.includes('image'||'pic' || 'picture')){
        window.open("./images/voicebot.png","Pictures");
        let finalresult='Nice to meet you';
        speech.text = finalresult;
    }
    
    if(message.includes('ai'||'AI'||'Ridhi'||'Riddhi')){
        let finalresult = teach[Math.floor(Math.random() * teach.length)];
        speech.text = finalresult;
    }
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much'||'thank')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('exit' ||'see you'||'bye'||'talk to you')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
        window.open('', '_self', ''); window.close();//self.close()
    }
    
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
