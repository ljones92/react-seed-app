import axios from 'axios';

const apiRoot = process.env.REACT_APP_API_ROOT;

const exampleApi = {
    getExampleUsers: async () => {
        const {
            data: { data },
            status
        } = await axios.get(`${apiRoot}/users`);
        if (status !== 200) {
            throw new Error('Unable to get example');
        }
        return data;
    }
};

export default exampleApi;
