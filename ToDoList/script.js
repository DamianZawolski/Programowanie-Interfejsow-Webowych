
const form = document.getElementById('form');
const task = document.getElementById('task');
const date = document.getElementById('date');
const priorityList = document.getElementById('priorityList');
const othersList = document.getElementById('othersList');
const plansList = document.getElementById('plansList');
let deletedPriorityTask = '';
let deletedOthersTask = '';
let deletedPlansTask = '';

priorityList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        if (e.target.textContent === 'Zrobione') {

            e.target.parentElement.style.textDecoration = 'line-through';
            e.target.parentElement.style.color = 'gray';
            const date = new Date();

            const dateText = ` Data wykonania: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
            const dateElement = document.createElement('span');
            dateElement.textContent = dateText;
            e.target.parentElement.appendChild(dateElement);

            e.target.textContent = 'Przywróć';

        } else if (e.target.textContent === 'Przywróć') {

            e.target.parentElement.style.textDecoration = 'none';
            e.target.parentElement.style.color = 'white';
            e.target.parentElement.lastChild.remove();
            e.target.textContent = 'Zrobione';
        }
        else {

            const modal = new bootstrap.Modal(document.getElementById('deleteOneModal'));
            const deleteOneTask = document.getElementById('delete-one-task');
            deleteOneTask.textContent = `Czy na pewno chcesz usunąć zadanie o treści ${e.target.parentElement.firstChild.textContent}?`;
            const closeDeleteOneModal = document.getElementById('close-delete-one-modal');
            const deleteOneButton = document.getElementById('delete-one');
            const cancelOneButton = document.getElementById('cancel-one');
            modal.show();
            deleteOneButton.addEventListener('click', function () {
                deletedPriorityTask = e.target.parentElement.firstChild.textContent;
                e.target.parentElement.remove();
                modal.hide();
            });
            cancelOneButton.addEventListener('click', function () {
                modal.hide();
            });
            closeDeleteOneModal.addEventListener('click', function () {
                modal.hide();
            });
        }
    }
});

othersList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        if (e.target.textContent === 'Zrobione') {

            e.target.parentElement.style.textDecoration = 'line-through';
            e.target.parentElement.style.color = 'gray';
            const date = new Date();

            const dateText = ` Data wykonania: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
            const dateElement = document.createElement('span');
            dateElement.textContent = dateText;
            e.target.parentElement.appendChild(dateElement);

            e.target.textContent = 'Przywróć';

        } else if (e.target.textContent === 'Przywróć') {

            e.target.parentElement.style.textDecoration = 'none';
            e.target.parentElement.style.color = 'white';
            e.target.parentElement.lastChild.remove();
            e.target.textContent = 'Zrobione';
        }
        else {

            const modal = new bootstrap.Modal(document.getElementById('deleteOneModal'));
            const deleteOneTask = document.getElementById('delete-one-task');
            deleteOneTask.textContent = `Czy na pewno chcesz usunąć zadanie o treści ${e.target.parentElement.firstChild.textContent}?`;
            const closeDeleteOneModal = document.getElementById('close-delete-one-modal');
            const deleteOneButton = document.getElementById('delete-one');
            const cancelOneButton = document.getElementById('cancel-one');
            modal.show();
            deleteOneButton.addEventListener('click', function () {
                deletedOthersTask = e.target.parentElement.firstChild.textContent;
                e.target.parentElement.remove();
                modal.hide();
            });
            cancelOneButton.addEventListener('click', function () {
                modal.hide();
            });
            closeDeleteOneModal.addEventListener('click', function () {
                modal.hide();
            });
        }
    }
});

plansList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        if (e.target.textContent === 'Zrobione') {

            e.target.parentElement.style.textDecoration = 'line-through';
            e.target.parentElement.style.color = 'gray';
            const date = new Date();

            const dateText = ` Data wykonania: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
            const dateElement = document.createElement('span');
            dateElement.textContent = dateText;
            e.target.parentElement.appendChild(dateElement);

            e.target.textContent = 'Przywróć';

        } else if (e.target.textContent === 'Przywróć') {

            e.target.parentElement.style.textDecoration = 'none';
            e.target.parentElement.style.color = 'white';
            e.target.parentElement.lastChild.remove();
            e.target.textContent = 'Zrobione';
        }
        else {

            const modal = new bootstrap.Modal(document.getElementById('deleteOneModal'));
            const deleteOneTask = document.getElementById('delete-one-task');
            deleteOneTask.textContent = `Czy na pewno chcesz usunąć zadanie o treści ${e.target.parentElement.firstChild.textContent}?`;
            const closeDeleteOneModal = document.getElementById('close-delete-one-modal');
            const deleteOneButton = document.getElementById('delete-one');
            const cancelOneButton = document.getElementById('cancel-one');
            modal.show();
            deleteOneButton.addEventListener('click', function () {
                deletedPlansTask = e.target.parentElement.firstChild.textContent;
                e.target.parentElement.remove();
                modal.hide();
            });
            cancelOneButton.addEventListener('click', function () {
                modal.hide();
            });
            closeDeleteOneModal.addEventListener('click', function () {
                modal.hide();
            });
        }
    }
});

const clear_priority = document.getElementById('clear_priority');
const clear_others = document.getElementById('others_clear');
const clear_plans = document.getElementById('plans_clear');

clear_priority.addEventListener('click', function () {

    const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
    const deleteTask = document.getElementById('delete-task');
    deleteTask.textContent = `Czy na pewno chcesz usunąć wszystkie "zadania priorytetowe"? Operacja jest nieodwracalna!`;
    const closeDeleteModal = document.getElementById('close-delete-modal');
    const deleteButton = document.getElementById('delete');
    const cancelButton = document.getElementById('cancel');
    modal.show();
    deleteButton.addEventListener('click', function () {
        priorityList.innerHTML = '';
        modal.hide();
    });
    cancelButton.addEventListener('click', function () {
        modal.hide();
    });
    closeDeleteModal.addEventListener('click', function () {
        modal.hide();
    });
});

clear_others.addEventListener('click', function () {

    const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
    const deleteTask = document.getElementById('delete-task');
    deleteTask.textContent = `Czy na pewno chcesz usunąć wszystkie "Inne zadania"? Operacja jest nieodwracalna!`;
    const closeDeleteModal = document.getElementById('close-delete-modal');
    const deleteButton = document.getElementById('delete');
    const cancelButton = document.getElementById('cancel');
    modal.show();
    deleteButton.addEventListener('click', function () {
        othersList.innerHTML = '';
        modal.hide();
    });
    cancelButton.addEventListener('click', function () {
        modal.hide();
    });
    closeDeleteModal.addEventListener('click', function () {
        modal.hide();
    });
});

clear_plans.addEventListener('click', function () {

    const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
    const deleteTask = document.getElementById('delete-task');
    deleteTask.textContent = `Czy na pewno chcesz usunąć wszystkie "moje plany"? Operacja jest nieodwracalna!`;
    const closeDeleteModal = document.getElementById('close-delete-modal');
    const deleteButton = document.getElementById('delete');
    const cancelButton = document.getElementById('cancel');
    modal.show();
    deleteButton.addEventListener('click', function () {
        plansList.innerHTML = '';
        modal.hide();
    });
    cancelButton.addEventListener('click', function () {
        modal.hide();
    });
    closeDeleteModal.addEventListener('click', function () {
        modal.hide();
    });
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskValue = task.value;
    const dateValue = date.value;
    const list_type = document.getElementById('list_type');

    if (!taskValue || !dateValue) {
        const modal = new bootstrap.Modal(document.getElementById('modal'));
        const closeModal = document.getElementById('close-modal');
        closeModal.addEventListener('click', function () {
            modal.hide();
        });
        modal.show();
        return;
    }
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = taskValue;
    li.textContent += ` (${dateValue})`;
    const button = document.createElement('button');
    button.className = 'btn btn-secondary float-end';
    button.textContent = 'X';
    li.appendChild(button);
    const doneButton = document.createElement('button');
    doneButton.className = 'btn btn-dark float-end';
    doneButton.textContent = 'Zrobione';
    li.appendChild(doneButton);

    if (list_type.value === '1') {
        priorityList.appendChild(li);
    }
    else if (list_type.value === '2') {
        othersList.appendChild(li);
    }
    else {
        plansList.appendChild(li);
    }


    task.value = '';
    date.value = '';
});

const restore_priority = document.getElementById('restore_priority');
const restore_others = document.getElementById('others_restore');
const restore_plans = document.getElementById('plans_restore');

restore_priority.addEventListener('click', function (e) {
    let deletedTask = deletedPriorityTask;
    if (!deletedTask || deletedTask === '') {
        return;
    }

    li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = deletedPriorityTask;

    const button = document.createElement('button');
    button.className = 'btn btn-secondary float-end';
    button.textContent = 'X';
    li.appendChild(button);
    const doneButton = document.createElement('button');
    doneButton.className = 'btn btn-dark float-end';
    doneButton.textContent = 'Zrobione';
    li.appendChild(doneButton);
    priorityList.appendChild(li);
    deletedPriorityTask = '';

});

restore_others.addEventListener('click', function (e) {
    let deletedTask = deletedOthersTask;

    if (!deletedTask || deletedTask === '') {
        return;
    }

    li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = deletedOthersTask;

    const button = document.createElement('button');
    button.className = 'btn btn-secondary float-end';
    button.textContent = 'X';
    li.appendChild(button);
    const doneButton = document.createElement('button');
    doneButton.className = 'btn btn-dark float-end';
    doneButton.textContent = 'Zrobione';
    li.appendChild(doneButton);
    othersList.appendChild(li);
    deletedOthersTask = '';

});

restore_plans.addEventListener('click', function (e) {
    let deletedTask = deletedPlansTask;
    if (!deletedTask || deletedTask === '') {
        return;
    }

    li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = deletedPlansTask;
    const button = document.createElement('button');
    button.className = 'btn btn-secondary float-end';
    button.textContent = 'X';
    li.appendChild(button);
    const doneButton = document.createElement('button');
    doneButton.className = 'btn btn-dark float-end';
    doneButton.textContent = 'Zrobione';
    li.appendChild(doneButton);
    plansList.appendChild(li);
    deletedPlansTask = '';

});

const priorityHeader = document.getElementById('priority-header');
const othersHeader = document.getElementById('others-header');
const plansHeader = document.getElementById('plans-header');

const defaultPriorityHeaderStyle = priorityList.style.display;
const defaultOthersHeaderStyle = othersList.style.display;
const defaultPlansHeaderStyle = plansList.style.display;

const priorityName = document.getElementById('priority-name');
const othersName = document.getElementById('others-name');
const plansName = document.getElementById('plans-name');

const defaultPriorityName = priorityName.textContent;
const defaultOthersName = othersName.textContent;
const defaultPlansName = plansName.textContent;



priorityName.addEventListener('click', function () {
    if (priorityList.style.display === 'none') {
        priorityList.style.display = defaultPriorityHeaderStyle;
        priorityName.innerText = defaultPriorityName;
    } else {
        priorityList.style.display = 'none';
        priorityName.innerText = 'Zadania priorytetowe (kliknij aby zobaczyć)';

    }
});

othersName.addEventListener('click', function () {
    if (othersList.style.display === 'none') {
        othersList.style.display = defaultOthersHeaderStyle;
        othersName.innerText = defaultOthersName;
    } else {
        othersList.style.display = 'none';
        othersName.innerText = 'Inne zadania (kliknij aby zobaczyć)';
    }
});

plansName.addEventListener('click', function () {
    if (plansList.style.display === 'none') {
        plansList.style.display = defaultPlansHeaderStyle;
        plansName.innerText = defaultPlansName;
    } else {
        plansList.style.display = 'none';
        plansName.innerText = 'Moje plany (kliknij aby zobaczyć)';
    }
});

