'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');

  messageTitle.classList.add('title');
  messageTitle.innerText = title;
  message.append(messageTitle);

  const messageDescription = document.createElement('p');

  message.classList.add('notification', type);
  messageDescription.innerText = description;
  message.append(messageDescription);

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  message.style.boxSizing = 'content-box';

  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');