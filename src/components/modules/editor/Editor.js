import React, { useState, useMemo, useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import api from '../../../api';
import { API_IMAGE_UPLOAD } from '../../../constants/APIs';

function Editor() {
    const [state, setState] = useState({
        html: null,
        quillRef: null,
        reactQuillRef: null,
    });

    const imageHandler = (el) => {
        const quillInstance = el.quill;
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.click();

        input.onchange = (e) => {
            const file = e.target.files[0];

            const formData = new FormData();
            formData.append('img', file);

            api.request(API_IMAGE_UPLOAD, {
                method: 'post',
                params: {},
                data: formData,
            }).then((res) => {
                if (res.data) {
                    console.log('image upload success');
                    const range = quillInstance.getSelection();
                    quillInstance.insertEmbed(
                        range.index,
                        'image',
                        res.data.url
                    );
                    quillInstance.setSelection(range.index + 1);
                    quillInstance.focus();
                } else {
                    console.log('image upload error');
                }
            });
        };
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [
                        { size: ['small', false, 'large', 'huge'] },
                        { color: [] },
                    ],
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
                handlers: {
                    image() {
                        // this를 넘겨줘야 핸들러 onchange 함수에서 toolbar object에 접근할 수 있음
                        imageHandler.apply(null, [this]);
                    },
                },
            },
            clipboard: { matchVisual: false },
        }),
        []
    );

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

    const setRef = useCallback(
        (el) => {
            if (!el && el !== state.reactQuillRef) {
                const ref = el.getEditor();
                setState({
                    ...state,
                    reactQuillRef: el,
                    quillRef: ref,
                });
            }
        },
        [state]
    );

    return (
        <ReactQuill
            ref={(el) => {
                setRef(el);
            }}
            theme="snow"
            value={state.html}
            onChange={(value) =>
                setState({
                    ...state,
                    html: value,
                })
            }
            modules={modules}
            formats={formats}
        />
    );
}

export default Editor;
