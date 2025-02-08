import {useEffect} from "react";
import AkimatForm from "../../admin/_components/AkimatForm";

export default function ModalComponent({isOpen, setIsOpen, akimatId}) {

    useEffect(() => {
        if (!isOpen) return;
        console.log(akimatId)
    }, [isOpen])

    return (
        <>
            {isOpen && (
                <div className="flex justify-center my-10 w-screen absolute ">
                    <div
                        className="fixed inset-0 flex justify-center overflow-y-auto bg-black bg-opacity-50 "
                        onClick={() => setIsOpen(false)}
                    >
                        <div
                            className=" p-6 rounded max-w-[60%] w-full z-100"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <AkimatForm isBg={true} akimat={{key: akimatId}} setIsFormOpen={setIsOpen}/>
                            <div className={"h-[100px]"}></div>
                        </div>
                    </div>
                </div>

            )
            }
        </>
    )
        ;
}
