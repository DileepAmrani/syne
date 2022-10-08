import React from 'react';

import { Alert } from 'react-bootstrap';

import useToastsStore from '../../stores/toasts';

export default function Toasts() {
  const { toasts, removeToast } = useToastsStore();
  return (
    <>
      {
        toasts.map((t, index) => (
          <div style={{ position: 'absolute', display: 'inline', width: '100%', maxWidth: '400px', right: 0, top: `${(80 * index) + 16}px`, margin: '0 auto', padding: '0 8px' }}>
            <Alert variant={t.variant} style={{ display: 'flex', alignItems: 'top', justifyContent: 'space-between'}}>
              {t.message}
              <span style={{ cursor: 'pointer' }} onClick={() => removeToast(t.id)}>X</span>
            </Alert>
          </div>
        ))
      }
    </>
  );
}
