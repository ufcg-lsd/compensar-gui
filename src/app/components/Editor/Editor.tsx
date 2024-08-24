import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Editor: React.FC = () => {
  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean'],
    ],
  }), []);

  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        placeholder="Write something amazing..."
      />
    </div>
  );
};

export default Editor;
