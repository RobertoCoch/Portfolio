import { X } from "lucide-react";

export const ModalPDF = ({isOpen, onClose, fileUrl }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.50)] bg-opacity-50 z-50 flex items-center justify-center">
        <div className="w-11/12 md:w-3/4 h-[90vh] rounded-lg overflow-hidden shadow-lg relative">
            <div className="w-full bg-[#030711] h-auto flex justify-end p-3">
                <button
            onClick={onClose}
            className="text-white font-bold py-1 px-2 rounded cursor-pointer"
            >
            <X></X>
            </button>
            </div>
            <iframe
            src={fileUrl}
            className="w-full h-full"
            title="PDF Viewer"
            />
        </div>
        </div>
    )
}
