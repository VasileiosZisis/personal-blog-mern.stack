import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './TextEditor.css'

const modules = {
  toolbar: [
    [{ header: [3, 4, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
    ['link', 'video'],
    ['clean']
  ]
}

const TextEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      theme='snow'
      value={value}
      onChange={onChange}
      modules={modules}
    />
  )
}

export default TextEditor
