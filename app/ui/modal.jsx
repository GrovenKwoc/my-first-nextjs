import Link from 'next/link';
export function Modal({ children }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <Link href="/" className="modal-close">
          {' '}
          &times;
        </Link>
        <h2>Modal Header</h2>
        <p>Some text in the modal.</p>
        {children}
      </div>
    </div>
  );
}
