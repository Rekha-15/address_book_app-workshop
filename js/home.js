window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
  });

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
    let contactList = createContactJSON();
    if(contactList.length == 0) return;
    document.querySelector(".person-count").textContent = contactList.length;
    let innerHtml = `${headerHtml}`;
    for(const contactData of contactList)
    {
    innerHtml = `${innerHtml}
    <tr>
        <td>${contactData._firstName}${contactData._lastName}</td>
        <td>${contactData._address}</td>
        <td>${contactData._city}</td>
        <td>${contactData._state}</td>
        <td>${contactData._zip}</td>
        <td>${contactData._phone}</td>
        <td>${contactData._email}</td>
        <td>
        <img name="${contactData._id}" onclick="removie(this)" alt="delete" 
                src="../asserts/icons/delete-black-18dp.svg">
        <img name="${contactData._id}" alt="edit" onclick="update(this)"
                src="../asserts/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    }
  document.querySelector('#table-display').innerHTML = innerHtml;
  }

  const createContactJSON = () => {
    let contactListLocal = [
    {
        _firstName: "Rekha",
        _lastName: "Patil",
        _address: "GKW Layout",
        _city: "Bangalore",
        _email: "Rekha@gmail.com",
        _phone: "8987776787",
        _state: "Karnataka",
        _zip: "560058",
    },
    {
        _firstName: "Rashmi",
        _lastName: "Patil",
        _address: "Peenya 2nd stage",
        _city: "Bangalore",
        _email: "rashmi@Outlook.com",
        _phone: "9145676576",
        _state: "Karnataka",
        _zip: "560059",
    }
    ];
    return contactListLocal;
  }