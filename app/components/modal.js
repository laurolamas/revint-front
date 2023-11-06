export default function Modal({ children, id }) {
    return (
        <div>
            <dialog id={id} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {children}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}