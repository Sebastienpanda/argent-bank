import { useCallback, useState } from "react";

type UseFetchOptions = {
    method: string;
    body?: unknown;
    headers?: Record<string, string>;
};

export function useFetch() {
    const [data, setData] = useState<{
        body: {
            id: string;
            token: string;
            email: string;
            lastName: string;
            firstName: string;
        };
    } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = useCallback(async (url: string, options: UseFetchOptions) => {
        setLoading(true);
        const base_url = "http://localhost:3001/api/v1/user";

        try {
            const response = await fetch(base_url + url, {
                method: options.method,
                headers: {
                    "Content-Type": "application/json",
                    ...options.headers,
                },
                body: options.body ? JSON.stringify(options.body) : null,
            });

            if (!response.ok) {
                throw new Error("Failed to fetch");
            }

            const json = await response.json();
            setData(json);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, []);

    return { data, error, loading, fetchData };
}
