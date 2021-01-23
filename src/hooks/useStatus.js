import { useState } from 'react';

function useStatus() {
  const [status, setStatus] = useState('initial');
  const [payload, setPayload] = useState(null);

  const changeStatus = ({ value, payload }) => {
    setStatus(value);
    setPayload(payload);
  };

  return { current: status, payload, change: changeStatus };
}

export default useStatus;
