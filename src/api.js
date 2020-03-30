export const fetchApiData = async () => {
        const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
        const data = await response.json();
        return data;
};
