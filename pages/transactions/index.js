document.addEventListener("DOMContentLoaded", function () {
    const form = document.forms.transactionAdd;

    form.onsubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(form);
        const user = {
            id: Math.random(),
            wallet: formData.get("wallet"),
            currency: formData.get("currency"),
            category: formData.get("category"),
            description: formData.get("description"),
            balance: formData.get("total"),
            created_at: new Date().toLocaleTimeString(),
            updated_at: new Date().toLocaleTimeString(),
        };

        localStorage.setItem("user", JSON.stringify(user));

        console.log(user);

        alert(`Транзакция успешно добавлена:\n${JSON.stringify(user, null, 2)}`);
    }
})