import Link from 'next/link';
export function Modal({ children }) {
  return (
    <dialog open>
      <Link href="/" className="modal-close">
        &times;
      </Link>
      {children}
    </dialog>
  );
}
