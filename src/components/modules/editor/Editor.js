import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import api from '../../../api';
import { API_IMAGE_UPLOAD } from '../../../constants/APIs';

function Editor() {
    const [value, setValue] = useState('');

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.click();

        input.onchange = (e) => {
            console.log(e.target.files);
            const file = e.target.files[0];

            const formData = new FormData();
            formData.append('img', file);

            api.request('API_IMAGE_UPLOAD', {
                method: 'post',
                params: {},
                data: formData,
            }).then((res) => {
                const quill = quillInstance.current;
                quill.insertEmbed(0, 'image', `/upload/${res.data.name}`);
            });
        };
    };

    const modules = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
                [
                    { list: 'ordered' },
                    { list: 'bullet' },
                    { indent: '-1' },
                    { indent: '+1' },
                    { align: [] },
                ],
                ['link', 'image', 'video'],
                ['clean'],
            ],
            // handlers: { image: this.imageHandler },
        },
        clipboard: { matchVisual: false },
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'size',
        'color',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
        'align',
    ];

    let reactQuillRef = null;

    return (
        <ReactQuill
            ref={(el) => (reactQuillRef = el)}
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
        />
    );
}

export default Editor;
