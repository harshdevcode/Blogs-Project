import Image from "next/image";
import React from "react";

export default function ContactButton({ onClick }) {
    return (
        <div
            className="w-[60px] h-[60px] fixed right-md bottom-md rounded-full shadow-lg cursor-pointer"
            onClick={onClick}
        >
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/fir-plugin-connect.appspot.com/o/message.png?alt=media&token=2c22cc22-f07b-4a51-9901-fd4b141001fe"
                alt="contact us button"
                fill
                sizes="100vw" />
        </div>
    );
}
