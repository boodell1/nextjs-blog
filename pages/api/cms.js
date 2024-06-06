import axios from 'axios';

const API_KEY = 'blt62f58ce8615feeeb';
const DELIVERY_TOKEN = 'cs3c656d0dcc581cf24feff4ef';
const ENVIRONMENT = 'development';

export const fetchEntries = async () => {
    try {
        const response = await axios.get(
            'https://cdn.contentstack.io/v3/content_types/blog_post/entries',
            {
                headers: {
                    api_key: API_KEY,
                    access_token: DELIVERY_TOKEN,
                    environment: ENVIRONMENT,
                }
            }
        );
        console.log('axios response', response.data.entries)
        return response.data.entries;
    } catch (error) {
        console.error('Error fetching entries', error);
        return []; //empty entries if error
    }
}