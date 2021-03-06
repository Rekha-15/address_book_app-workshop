let contactList;
window.addEventListener('DOMContentLoaded',(event) => {
    contactList = getContactDataFromStorage();
    document.querySelector(".person-count").textContent = contactList.length;
    createInnerHtml();
  });

  const getContactDataFromStorage = () => {
    return localStorage.getItem("ContactList") ?
                        JSON.parse(localStorage.getItem('ContactList')) : [];
  }

  const createInnerHtml = () => {
    const headerHtml = ` 
      <th>Full Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      <th>Email</th>
    `;
    if(contactList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for(const contactData of contactList)
    {
    innerHtml = `${innerHtml}
    <tr>
        <td>${contactData._firstName} ${contactData._lastName}</td>
        <td>${contactData._address}</td>
        <td>${contactData._city}</td>
        <td>${contactData._state}</td>
        <td>${contactData._zip}</td>
        <td>${contactData._phone}</td>
        <td>${contactData._email}</td>
        <td>
        <img id="${contactData._id}" onclick="remove(this)" alt="delete" 
                src="../asserts/icons/delete-black-18dp.svg">
        <img id="${contactData._id}" alt="edit" onclick="update(this)"
                src="../asserts/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    }
  document.querySelector('#table-display').innerHTML = innerHtml;
  }

  const remove = (node) => {
      let contact = contactList.find(cnt => cnt._id == node.id);
      if(!contact) return;
      const index = contactList.map(cnt => cnt._id).indexOf(contact._id);
      contactList.splice(index,1);
      document.querySelector(".person-count").textContent = contactList.length;
      localStorage.setItem("ContactList",JSON.stringify(contactList));
      createInnerHtml();
  }