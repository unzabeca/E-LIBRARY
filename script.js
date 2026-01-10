
        // Function to show a custom message box instead of alert()
        function showMessage(title, message, isError = false) {
            const messageBox = document.createElement('div');
            
            const bgColor = isError ? 'bg-red-500' : 'bg-blue-800';
            const titleColor = isError ? 'text-red-800' : 'text-blue-800';
            
            messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50';
            messageBox.innerHTML = `
                <div class="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full text-center">
                    <h4 class="text-xl font-bold ${titleColor} mb-3">${title}</h4>
                    <p class="text-gray-700">${message}</p>
                    <button onclick="this.parentNode.parentNode.remove()" 
                            class="mt-4 ${bgColor} text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                        Close
                    </button>
                </div>
            `;
            document.body.appendChild(messageBox);
        }

        // 1. Search Bar Functionality
        document.getElementById('search-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                showMessage("Search Feature", `You searched for: <strong>${query}</strong>.<br>This is where the search results would load!`);
                e.target.value = ''; // Clear input after search
            }
        });