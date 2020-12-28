import moment from 'moment';
import copy from 'copy-to-clipboard';
import 'moment-timezone';

const submitButton = document.getElementById('submitButton');
const dateInput = document.getElementById('dateInput');
submitButton.addEventListener('click', () => {
  const formattedDate = moment(dateInput.value).format('LL');
  const displayDiv = document.createElement('div');
  const h2Ele = document.createElement('h2');
  document.body.append(displayDiv);
  displayDiv.append(h2Ele);
  h2Ele.innerHTML = formattedDate;
  const copyButton = document.createElement('button');
  copyButton.setAttribute('id', 'copyButton');
  copyButton.innerText = 'Copy';
  displayDiv.append(copyButton);
  copyButton.addEventListener('click', () => {
    copy(formattedDate);
  });
});
const currentDate = moment(Date.now());
const timeZoneDiv = document.createElement('div');
const PDT = currentDate.tz('America/Los_Angeles').format('LLL'); // 5am PDT
const EDT = currentDate.tz('America/New_York').format('LLL'); // 8am EDT
const JST = currentDate.tz('Asia/Tokyo').format('LLL'); // 9pm JST
const EST = currentDate.tz('Australia/Sydney').format('LLL'); // 10pm EST
timeZoneDiv.innerText = `Current Time: ${currentDate}\n PDT: ${PDT} \n EDT: ${EDT}\n JST: ${JST}\n EST:${EST}`;
document.body.appendChild(timeZoneDiv);
