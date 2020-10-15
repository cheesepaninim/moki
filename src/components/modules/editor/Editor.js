import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import api from '../../../api';
import { API_IMAGE_UPLOAD } from '../../../constants/APIs';

const BlockEmbed = Quill.import('blots/block/embed');
class ImageBlot extends BlockEmbed {
    static create(url) {
        const node = super.create();
        node.setAttribute('src', url);
        node.setAttribute('controls', '');
        return node;
    }

    static value(node) {
        return node.getAttribute('src');
    }
}
ImageBlot.blotName = 'image';
ImageBlot.tagName = 'image';
Quill.register(ImageBlot);

function Editor() {
    const [state, setState] = useState({
        html: null,
        quillRef: null,
        reactQuillRef: null,
    });

    const attachQuillRefs = function () {
        console.log('attachQuillRefs');
        // Ensure React-Quill reference is available:
        // const { reactQuillRef } = state;
        // if (!reactQuillRef) return;
        // if (typeof reactQuillRef.getEditor !== 'function') return;
        // const ref = reactQuillRef.getEditor();
        // if (ref != null) {
        //     setState({
        //         ...state,
        //         quillRef: ref,
        //     });
        // }
    };

    useEffect(() => {
        attachQuillRefs();
    }, []);

    const imageHandler = () => {
        const { reactQuillRef } = state;
        // const quillRef = reactQuillRef.getEditor();
        console.log(reactQuillRef);
        // console.log(reactQuillRef.getEditor);
        // console.log(quillRef);
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.click();

        input.onchange = (e) => {
            console.log(e.target.files);
            const file = e.target.files[0];

            const formData = new FormData();
            formData.append('img', file);

            api.request(API_IMAGE_UPLOAD, {
                method: 'post',
                params: {},
                data: formData,
            }).then((res) => {
                if (res.data) {
                    console.log('success');
                    // quillRef.insertEmbed(0, 'image', res.data.url);
                } else {
                    console.log('success');
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
                handlers: { image: imageHandler },
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
            if (el !== state.reactQuillRef) {
                setState({
                    ...state,
                    reactQuillRef: el,
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
