import UploadProductForm from "./uploadProductForm";
import Modal from "./modal";
import Card from "./card";
import Image from "next/image";

export default function userProducts({ userProducts }) {

    if (userProducts.length > 0) {
        return (
            <>
                <h2>Products</h2>
                {
                    userProducts.map((product) => (
                        <>
                            <Card
                                product={product}
                                key={product._id}
                                mode={"profile"}
                            />
                        </>
                    ))
                }
            </>
        );
    }
    else {
        return (
            <div className="border-4 rounded-3xl border-slate-50 border-dashed p-10 flex flex-col gap-5 items-center m-10">
                <Image src="/empty-shirt.svg" width={50} height={50} alt="empty-shirt" />
                <h3 className="text-lg font-bold">It's a bit lonely around here...</h3>

                <p>Get started by creating your first product</p>
                < button className="btn" onClick={() => document.getElementById('my_modal-5').showModal()
                }> Create </button >
                <Modal id="my_modal-5" title="Create a product">
                    <UploadProductForm mode={"create"} />
                </Modal>
            </div>
        )
    }
}