const container = document.querySelector('#tableContainer');
        let table = document.createElement('table');
        table.className = 'todo-table';
        

        table.innerHTML = `
            <tr>
                <th style="width: 50px">No.</th>
                <th>Task</th>
                <th style="width: 70px">Action</th>
            </tr>
        `;
        
        container.appendChild(table);

        // Add todo function
        function addTodo() {
            const input = document.querySelector('#todoInput');
            if(!input.value.trim()) return;

            const row = table.insertRow(-1);
            const rowNumber = table.rows.length - 1;

            table.innerHTML = EmptyString
            
            row.innerHTML = `
                <td>${rowNumber}</td>
                <td>${input.value}</td>
                `
                <td><span class="delete-btn" onclick="this.closest('tr').remove()">✕</span></td>
            `;
            
            input.value = '';
        }

        // Add todo on Enter key
        document.querySelector('#todoInput').addEventListener('keypress', e => {
            if(e.key === 'Enter') addTodo();
        });
        

// const list = document.getElementById()
// const addbtn  = document.getElementById('addbtn');
// addbtn.addEventListener('click',function());