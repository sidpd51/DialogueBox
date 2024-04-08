document.addEventListener('DOMContentLoaded', function () {
  const chatMessages = document.getElementById('chat-messages');
  const messageText = document.getElementById('message-text');
  const sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', function () {
    const message = messageText.value.trim();
    if (message !== '') {
      addMessage('sender-1', message); // You can change the sender class accordingly
      messageText.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });

  function addMessage(senderClass, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', senderClass);
    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble');
    messageBubble.textContent = message;
    messageDiv.appendChild(messageBubble);
    chatMessages.appendChild(messageDiv);
  }
});
