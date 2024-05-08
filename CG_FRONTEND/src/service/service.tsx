import { IPart } from '../models/Part';

class Service {
    async submitPart(newPart: IPart): Promise<boolean> {
        try {
            const response = await fetch('http://localhost:3001/part', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPart),
            });

            if (!response.ok) {
                // Handle error here
                console.error('Error submitting part:', response.status, response.statusText);
                return false;
            }

            // If the response is successful, you can handle the result as needed
            const result = await response.json();
            console.log('Part submitted successfully:', result);
            return true;
        } catch (error) {
            console.error('Error submitting Part:', error);
            return false;
        }
    }
}

export default Service;
