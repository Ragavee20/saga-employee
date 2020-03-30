export const fetchApiData = () => ({
    type: 'FETCH_DATA'
});

const receivedData = (data) => ({
    type: 'RECEIVED_DATA',
    data
});

export default receivedData
