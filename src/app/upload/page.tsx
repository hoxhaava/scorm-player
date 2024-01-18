"use client"

import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';

const UploadPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        setFile(files?.item(0) ?? null);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (file) {
            console.log('Uploading:', file);
            // Reset the input field
            if (inputRef.current) {
                inputRef.current.value = '';
            }
            setFile(null);
            setShowSuccess(true);
        } else {
            // error message
        }
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);
    };

    return (
        <main className = "flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            {showSuccess && (
                <div className="fixed top-5 right-5 bg-white text-black px-4 py-2 rounded flex items-center">
                    <span className="mr-2">✅ Uploaded successfully</span>
                    <button className="text-green-700" onClick={handleCloseSuccess}>X</button>
                </div>
            )}
            <div className="container flex flex-row items-center justify-center gap-12 px-4 py-">
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <label htmlFor="scorm-file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Upload Course
                    </label>
                    <input
                        ref={inputRef}
                        id="scorm-file"
                        name="scormFile"
                        type="file"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 cursor-pointer focus:outline-none p-2"
                    />
                    <button
                        type="submit"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"
                    >
                        Upload
                    </button>
                </form>
            </div>
        </main>
    );
};

export default UploadPage;