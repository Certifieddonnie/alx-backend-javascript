/* eslint-disable */
export default function handleResponseFromAPI(promise) {
    promise.then(
        function(value) {
            console.log('Got a response from the API');
            return ({
                status: 200,
                body: 'Success'
            });
        },
        function(error) {
            
        }
    );
}