// Function to load contacts from localStorage
function loadContacts() {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  return contacts;
}

// Function to save contacts to localStorage
function saveContacts(contacts) {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Function to display contacts on the page
function displayContacts() {
  const contacts = loadContacts();
  const contactsList = document.getElementById('contacts-list');
  contactsList.innerHTML = ''; // Clear existing list

  contacts.forEach((contact, index) => {
    const contactCard = document.createElement('div');
    contactCard.classList.add('contact-card');

    contactCard.innerHTML = `
      <div>
        <strong>${contact.name}</strong><br>
        Phone: ${contact.phone}<br>
        Email: ${contact.email}
      </div>
      <button onclick="deleteContact(${index})">Delete</button>
    `;

    contactsList.appendChild(contactCard);
  });
}

// Function to add a contact
function addContact() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  if (name && phone && email) {
    const newContact = { name, phone, email };

    // Get current contacts from localStorage
    const contacts = loadContacts();

    // Add the new contact to the array
    contacts.push(newContact);

    // Save the updated contacts array back to localStorage
    saveContacts(contacts);

    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';

    // Re-display the contacts list
    displayContacts();
  } else {
    alert('Please fill out all fields!');
  }
}

// Function to delete a contact
function deleteContact(index) {
  const contacts = loadContacts();
  contacts.splice(index, 1); // Remove contact from array

  // Save the updated list to localStorage
  saveContacts(contacts);

  // Re-display the contacts list
  displayContacts();
}

// Initial display of contacts
displayContacts();
