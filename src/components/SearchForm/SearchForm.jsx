function SearchForm({ onSearch }) {

    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const inputElement = form.querySelector("input");
        const query = inputElement.value;

        if (query.trim()) {
            form.reset();
            return onSearch(query.toLowerCase());
        } else {
            // toast.error("Please enter a search")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" autoComplete="off" autoFocus placeholder="Search movies" />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm