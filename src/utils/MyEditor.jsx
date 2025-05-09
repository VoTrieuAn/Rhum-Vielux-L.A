import { Editor } from "@tinymce/tinymce-react";

const MyEditor = ({
  value = '<h4 class="text-secondary font-bold capitalize">Th&agrave;nh phần:</h4>\n<h4 class="text-secondary font-bold capitalize">Bảo quản / Lưu &yacute;:</h4>\n<h4 class="text-secondary font-bold capitalize">C&aacute;ch sử dụng:</h4>',
  editorRef,
}) => {
  return (
    <>
      <Editor
        apiKey={import.meta.env.VITE_TINYCME}
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={value}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
};

export default MyEditor;
