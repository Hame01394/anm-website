
"use client";

import { useEffect } from "react";
import {
  EditorContent,
  useEditor,
  type JSONContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Youtube from "@tiptap/extension-youtube";
import Highlight from "@tiptap/extension-highlight";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import {
  Table,
  TableRow,
  TableHeader,
  TableCell,
} from "@tiptap/extension-table";

type ArticleRichTextPreviewProps = {
  value: JSONContent | null;
};

const extensions = [
  StarterKit.configure({
    link: {
      openOnClick: false,
      autolink: true,
      linkOnPaste: true,
    },
  }),
  Image.configure({
    inline: false,
    allowBase64: false,
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Youtube.configure({
    controls: true,
    nocookie: true,
    width: 720,
    height: 405,
  }),
  Highlight,
  TextStyle,
  Color,
  Table.configure({
    resizable: false,
  }),
  TableRow,
  TableHeader,
  TableCell,
];

export default function ArticleRichTextPreview({
  value,
}: ArticleRichTextPreviewProps) {
  const editor = useEditor({
    immediatelyRender: false,
    editable: false,
    extensions,
    content: value || {
      type: "doc",
      content: [{ type: "paragraph" }],
    },
    editorProps: {
      attributes: {
        class: "anm-article-preview-content outline-none",
      },
    },
  });

  useEffect(() => {
    if (!editor) return;

    const nextContent = value || {
      type: "doc",
      content: [{ type: "paragraph" }],
    };

    if (
      JSON.stringify(editor.getJSON()) !==
      JSON.stringify(nextContent)
    ) {
      editor.commands.setContent(nextContent, {
        emitUpdate: false,
      });
    }
  }, [editor, value]);

  if (!editor) {
    return (
      <div className="min-h-64 animate-pulse bg-[#f8f5ed]" />
    );
  }
  
  const activeEditor = editor;

  return (
    <div className="w-full">
      <EditorContent editor={activeEditor} />

      <style jsx global>{`
        .anm-article-preview-content {
          color: #26384c;
          font-size: 17px;
          line-height: 1.95;
          overflow-wrap: anywhere;
        }

        .anm-article-preview-content p {
          margin: 0 0 1.4rem;
        }

        .anm-article-preview-content h2 {
          margin: 2.5rem 0 1rem;
          color: #142b45;
          font-size: 1.8rem;
          font-weight: 750;
          line-height: 1.35;
        }

        .anm-article-preview-content h3 {
          margin: 2rem 0 0.8rem;
          color: #142b45;
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.4;
        }

        .anm-article-preview-content strong {
          font-weight: 750;
        }

        .anm-article-preview-content blockquote {
          margin: 2rem 0;
          border-left: 4px solid #c9a45c;
          padding: 1rem 1.5rem;
          background: #f8f5ed;
          color: #142b45;
          font-style: italic;
        }

        .anm-article-preview-content ul,
        .anm-article-preview-content ol {
          margin: 1.2rem 0;
          padding-left: 2rem;
        }

        .anm-article-preview-content ul {
          list-style: disc;
        }

        .anm-article-preview-content ol {
          list-style: decimal;
        }

        .anm-article-preview-content li {
          margin: 0.4rem 0;
          padding-left: 0.25rem;
        }

        .anm-article-preview-content a {
          color: #96712f;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .anm-article-preview-content img {
          display: block;
          width: auto;
          max-width: 100%;
          height: auto;
          margin: 2rem auto;
        }

        .anm-article-preview-content iframe {
          display: block;
          width: 100%;
          max-width: 720px;
          aspect-ratio: 16 / 9;
          height: auto;
          margin: 2rem auto;
        }

        .anm-article-preview-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          table-layout: fixed;
        }

        .anm-article-preview-content th,
        .anm-article-preview-content td {
          border: 1px solid #d9d5cc;
          padding: 0.8rem;
          text-align: left;
          vertical-align: top;
        }

        .anm-article-preview-content th {
          background: #f8f5ed;
          color: #142b45;
          font-weight: 700;
        }

        .anm-article-preview-content hr {
          border: 0;
          border-top: 1px solid #d9d5cc;
          margin: 2.5rem 0;
        }

        .anm-article-preview-content mark {
          background: #f5e5a8;
          padding: 0.1em 0.15em;
        }
      `}</style>
    </div>
  );
}
