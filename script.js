document.addEventListener('DOMContentLoaded', function () {
  const msgPage = document.getElementById('msg-page');
  const messageText = document.getElementById('message-text');
  const sendButton = document.getElementById('send-button');

  document.addEventListener('keypress', event=> {
    if(event.key === "Enter"){
      sendButton.click()
      event.preventDefault()
      sendButton.click()
    }
  });

  sendButton.addEventListener('click', function () {
    const message = messageText.value.trim();
    if (message !== '') {
      // sendMessage(message); // You can change the sender class accordingly
      receivedMessage(message)
      messageText.value = '';
      msgPage.scrollTop = msgPage.scrollHeight;
    }
  });

  function sendMessage(message) {
    const date = new Date()
    let time = date.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    const chat = `<div class="outgoing-chats">
        <div class="outgoing-msg">
            <div class="outgoing-chats-msg">
                <p class="pb-1">
                  ${message}
                  <span class="time text-light text-end mb-1">${time}</span>
                </p>
            </div>
        </div>
    </div>`
    msgPage.insertAdjacentHTML('beforeend', chat)
  }

  function receivedMessage(message) {
    const date = new Date()
    let time = date.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    const chat = `<div class="received-chats">
    <div class="received-msg">
        <div class="received-msg-inbox">
            <p class="pb-1">
                ${message}
                <span class="time text-primary text-end mb-1">${time}</span>
            </p>
        </div>
    </div>
  </div>`
    msgPage.insertAdjacentHTML('beforeend', chat)
  }
});








