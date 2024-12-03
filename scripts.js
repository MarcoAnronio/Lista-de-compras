document.getElementById('add-button').addEventListener('click', function() {
    // Get the value from the input field
    const newItem = document.getElementById('add-item').value;
    
    // Ensure the input field is not empty
    if (newItem.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');

        // Create the checkbox element
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox';

        // Create the label element
        const label = document.createElement('label');
        label.setAttribute('for', 'checkbox');
        label.className = 'list-label';
        label.textContent = newItem;

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.id = 'delete';
        deleteButton.innerHTML = '<img src="./imagens/bin.svg" alt="delete-item">';

        // Append the elements to the list item
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);

        // Append the list item to the existing list
        document.querySelector('.list-wrapper ul').appendChild(li);

        // Clear the input field
        document.getElementById('add-item').value = '';

        // Add delete functionality to the delete button
        deleteButton.addEventListener('click', function() {
            // Check if the checkbox is selected
            if (checkbox.checked) {
                // Remove the list item if checkbox is selected
                li.remove(); 

                // Show the footer by adding the show-result class
                const footer = document.querySelector('.footer');
                footer.classList.add('show-result');
                footer.style.display = 'block'; // Ensure the footer is visible
                
            } else {
                alert('Please check the box before deleting the item.');
            }
        });
    } else {
        alert ('Nenhum item inserido')
    }
});

// Add functionality to the #delete-message button to hide the footer
document.getElementById('delete-message').addEventListener('click', function() {
    const footer = document.querySelector('.footer');
    footer.style.display = 'none'; // Hide the footer when the button is clicked
    footer.classList.remove('show-result'); // Remove the show-result class
});