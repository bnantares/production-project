import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);

    const throwSomeError = () => {
        setError(true);
    }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button onClick={throwSomeError}>
            Throw Error
        </Button>
    );
};