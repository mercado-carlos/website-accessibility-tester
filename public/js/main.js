const testAccessibility = async (e) => {
    e.preventDefault();
    const url = document.querySelector('#url').value;

    if (url === '') {
        alert('Please add a URL');
    } else {
        setLoading();
        const response = await fetch(`/api/test?url=${url}`);

        if (response.status !== 200) {
            setLoading(false);
            alert('Something went wrong');
        } else {
            const { issues } = await response.json();
            addIssuesToDOM(issues);
            setLoading(false);
        }
    }
};

const setLoading = (isLoading = true) => {
    const loader = document.querySelector('.loader');

    isLoading
        ? (loader.style.display = 'block')
        : (loader.style.display = 'none');
};

document.querySelector('#form').addEventListener('submit', testAccessibility);
