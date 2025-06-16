
//localStorage.setItem("CSA_SO",'');
let USER = localStorage.getItem("CSA_SO");

if(USER){} else {
USER=""; 
}


export function Messages( div,obj,saveFn) {
  // State

 
 
  let messages = obj.msgs;
  if(messages){}else {obj.msgs=[]; messages=obj.msgs;}

  // DOM Elements
  const container = document.createElement('div');
  const messagesContainer = document.createElement('div');
  const inputContainer = document.createElement('div');
  const input = document.createElement('textarea');
  const sendButton = document.createElement('button');

let userInput=document.getElementById('username');



userInput.value=USER;





  // Initialize UI
  function init() {
    // Container styling
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.height = '400px';
    container.style.border = '1px solid #000000';
    container.style.borderRadius = '8px';
    container.style.overflow = 'hidden';

    // Messages container styling
    messagesContainer.style.flex = '1';
    messagesContainer.style.padding = '10px';
    messagesContainer.style.overflowY = 'auto';
    messagesContainer.style.backgroundColor = '#333333';
    messagesContainer.style.border = '1px solid #000000';
    // Input container styling
    inputContainer.style.display = 'flex';
    inputContainer.style.padding = '10px';
    inputContainer.style.backgroundColor = '#333333';
    inputContainer.style.borderTop = '1px solid #000000';

    // Input styling
    input.style.flex = '1';
    input.style.padding = '8px';
    input.style.border = '1px solid #ddd';
    input.style.borderRadius = '4px';
    input.style.marginRight = '8px';
    input.setAttribute("placeholder","escribir acá...");
    // Button styling
    sendButton.innerHTML = '&gt;';
    sendButton.style.padding = '8px 16px';
    sendButton.style.backgroundColor = '#007bff';
    sendButton.style.color = 'white';
    sendButton.style.border = 'none';
    sendButton.style.borderRadius = '4px';
    sendButton.style.cursor = 'pointer';

    // Event listeners
    sendButton.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    // Assemble UI
    inputContainer.appendChild(input);
    inputContainer.appendChild(sendButton);
    container.appendChild(messagesContainer);
    container.appendChild(inputContainer);

    // Clear target div and append our container
    div.innerHTML = '';
    div.appendChild(container);

    // Render initial messages
    renderMessages();
    userInput=document.getElementById("username");
  }

  // Render all messages
  function renderMessages() {
    messagesContainer.innerHTML = '';
    messages.forEach((msg,i) => {
      const messageElement = createMessageElement(msg,i);
      messagesContainer.appendChild(messageElement);
    });


[...messagesContainer.querySelectorAll("span.removeMsg")].forEach(m=>{

m.addEventListener('click',()=>{

  let th=Number(m.getAttribute("data-id"));
 
 
obj.msgs=messages.filter((mm,i)=>{
  if(i==th){
    console.log(th,"=",i);

  }
  return i!=th;
});
messages=obj.msgs;
  renderMessages();
if(saveFn)saveFn();


});

});
    

    scrollToBottom();
  }

function deleteMsg(e){
 
}

  // Create individual message element
  function createMessageElement(msg,ii) {
    const messageDiv = document.createElement('div');
    messageDiv.style.marginBottom = '10px';
    messageDiv.style.padding = '8px 12px';
    messageDiv.style.borderRadius = '4px';
    messageDiv.style.maxWidth = '80%';
    messageDiv.style.wordBreak = 'break-word';
    messageDiv.style.position = 'relative';

    // Style differently for current user
    const isCurrentUser = msg.user === USER;
    if (isCurrentUser) {
      messageDiv.style.marginLeft = 'auto';
      messageDiv.style.backgroundColor = '#007bff';
      messageDiv.style.color = 'white';
      messageDiv.innerHTML=`<span class="removeMsg" data-id='${ii}' style="position:absolute;top:2px;right:5px;color:#aaff88;font-wheight:600;cursor:pointer;">&times;</span>`;
    } else {
      messageDiv.style.marginRight = 'auto';
      messageDiv.style.backgroundColor = '#e9e9e9';
      messageDiv.style.color = '#333';
    }

    // User and time
    const metaDiv = document.createElement('div');
    metaDiv.style.fontSize = '0.8em';
    metaDiv.style.marginBottom = '4px';
    metaDiv.style.opacity = '0.8';
    metaDiv.innerHTML = `<i>${msg.user}</i> • ${msg.date.split('/').join(' / ')}`;

    // Message content
    const contentDiv = document.createElement('div');
    contentDiv.textContent = msg.msg;

    messageDiv.appendChild(metaDiv);
    messageDiv.appendChild(contentDiv);

    return messageDiv;
  }

  // Handle sending new message
  function handleSend() {

 USER=userInput.value;
 if(USER==''){

   alert('Falta el nombre de quién escribe');
   userInput.style.border='2px solid #77ff88';
   return;
 }

 userInput.style.border='1px solid #666666';
 localStorage.setItem("CSA_SO",USER);
    const text = input.value.trim();
    if (text) {
      const newMessage = {
        user: USER,
        msg: text,
        date: new Date().toLocaleString('es-ES', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false // Usa formato 24 horas. Puedes cambiar a true para 12h con AM/PM
        })
      };

      messages.push(newMessage);
      renderMessages();
      input.value = '';
      if(saveFn)saveFn();
    }
  }

  // Scroll to bottom of messages
  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Public API
  function setUser(name) {
    USER = name;
    return api;
  }

  function addMessage(message) {
    if (message && message.user && message.msg) {
      messages.push({
        ...message,
        date: message.date || new Date().toLocaleString('es-ES', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false // Usa formato 24 horas. Puedes cambiar a true para 12h con AM/PM
        })
      });
      renderMessages();
    }
    return api;
  }

  function clearMessages() {
    messages = [];
    renderMessages();
    return api;
  }

  const api = {
    setUser,
    addMessage,
    clearMessages
  };

  // Initialize
  init();

  return api;
}





`
<div style="display: flex; flex-direction: column; height: 400px; border: 1px solid rgb(204, 204, 204); border-radius: 8px; overflow: hidden;">
<div style="flex: 1 1 0%; padding: 10px; overflow-y: auto; background-color: rgb(249, 249, 249);">
<div style="margin-bottom: 10px; padding: 8px 12px; border-radius: 4px; max-width: 80%; word-break: break-word; margin-left: auto; background-color: rgb(0, 123, 255); color: white;">
<div style="font-size: 0.8em; margin-bottom: 4px; opacity: 0.8;">gus • 6/12/2025, 9:17:15 PM</div>
<div>qué es?</div>
</div>
</div>
<div style="display: flex; padding: 10px; background-color: rgb(255, 255, 255); border-top: 1px solid rgb(204, 204, 204);">
<input style="flex: 1 1 0%; padding: 8px; border: 1px solid rgb(221, 221, 221); border-radius: 4px; margin-right: 8px;">
<button style="padding: 8px 16px; background-color: rgb(0, 123, 255); color: white; border: none; border-radius: 4px; cursor: pointer;">Send</button>
</div>
</div>

`