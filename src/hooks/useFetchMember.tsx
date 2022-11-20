import { teamMembers } from 'constants/';
import { useEffect, useState } from 'react';

export function useFetchMember(pageNumber: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [members, setMembers] = useState<typeof teamMembers>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    new Promise<typeof teamMembers>(resolve => {
      setTimeout(() => resolve(teamMembers), 1000);
    })
      .then(response => {
        setMembers(prev => [
          ...prev,
          ...response.map(r => ({
            ...r,
            id: r.id + prev.length,
          })),
        ]);
        setHasMore(response.length > 0);
        setLoading(false);
      })
      .catch(err => {
        if (err) return;
        setError(true);
      });
  }, [pageNumber]);

  return { loading, error, members, hasMore };
}
