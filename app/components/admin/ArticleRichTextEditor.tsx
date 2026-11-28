
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
import Placeholder from "@tiptap/extension-placeholder";
import Highlight from "@tiptap/extension-highlight";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import {
  Table,
  TableRow,
  TableHeader,
  TableCell,
} from "@tiptap/extension-table";

type ArticleRichTextEditorProps = {
  value: JSONContent | null;
  onChange: (value: JSONContent) => void;
  placeholder?: string;
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
    resizable: true,
  }),
  TableRow,
  TableHeader,
  TableCell,
];

const buttonClass = (active = false) =>
  `flex h-9 min-w-9 items-center justify-center border px-2 text-sm font-semibold transition ${
    active
      ? "border-[#c9a45c] bg-[#f8f5ed] text-[#142b45]"
      : "border-transparent text-[#142b45] hover:border-[#142b45]/15 hover:bg-[#f8f5ed]"
  }`;

export default function ArticleRichTextEditor({
  value,
  onChange,
  placeholder = "Write your article here...",
}: ArticleRichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      ...extensions,
      Placeholder.configure({ placeholder }),
    ],
    content: value || {
      type: "doc",
      content: [{ type: "paragraph" }],
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[420px] px-5 py-5 text-sm leading-8 text-[#142b45] outline-none",
        spellcheck: "true",
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
      <div className="min-h-[460px] animate-pulse border border-[#142b45]/15 bg-white" />
    );
  }

  const activeEditor = editor;

  function addLink() {
    const previousUrl =
      activeEditor.getAttributes("link").href || "";

    const url = window.prompt("Enter the link URL", previousUrl);

    if (url === null) return;

    if (!url.trim()) {
      activeEditor.chain().focus().unsetLink().run();
      return;
    }

    const safeUrl = /^(https?:\/\/|mailto:)/i.test(url)
      ? url.trim()
      : `https://${url.trim()}`;

    activeEditor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({
        href: safeUrl,
        target: "_blank",
        rel: "noopener noreferrer",
      })
      .run();
  }

  function addImage() {
    const url = window.prompt("Enter the image URL");

    if (!url?.trim()) return;

    if (!/^https?:\/\//i.test(url.trim())) {
      window.alert(
        "Please enter a valid HTTP or HTTPS image URL."
      );
      return;
    }

    const alt =
      window.prompt("Enter image description (alt text)") || "";

    activeEditor
      .chain()
      .focus()
      .setImage({
        src: url.trim(),
        alt,
      })
      .run();
  }

  function addYoutubeVideo() {
    const url = window.prompt("Enter the YouTube video URL");

    if (!url?.trim()) return;

    activeEditor
      .chain()
      .focus()
      .setYoutubeVideo({
        src: url.trim(),
      })
      .run();
  }

  function insertTable() {
    activeEditor
      .chain()
      .focus()
      .insertTable({
        rows: 3,
        cols: 3,
        withHeaderRow: true,
      })
      .run();
  }

  return (
    <div className="overflow-hidden border border-[#142b45]/20 bg-white">
      {/* Main formatting toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-[#142b45]/10 bg-[#f8f5ed] p-2">
        <button
          type="button"
          title="Bold"
          aria-label="Bold"
          onClick={() =>
            activeEditor.chain().focus().toggleBold().run()
          }
          className={buttonClass(activeEditor.isActive("bold"))}
        >
          <strong>B</strong>
        </button>

        <button
          type="button"
          title="Italic"
          aria-label="Italic"
          onClick={() =>
            activeEditor.chain().focus().toggleItalic().run()
          }
          className={buttonClass(activeEditor.isActive("italic"))}
        >
          <em>I</em>
        </button>

        <button
          type="button"
          title="Underline"
          aria-label="Underline"
          onClick={() =>
            activeEditor.chain().focus().toggleUnderline().run()
          }
          className={buttonClass(activeEditor.isActive("underline"))}
        >
          <span className="underline">U</span>
        </button>

        <button
          type="button"
          title="Strikethrough"
          aria-label="Strikethrough"
          onClick={() =>
            activeEditor.chain().focus().toggleStrike().run()
          }
          className={buttonClass(activeEditor.isActive("strike"))}
        >
          <span className="line-through">S</span>
        </button>

        <span className="mx-1 h-6 w-px bg-[#142b45]/15" />

        <select
          aria-label="Text style"
          value={
            activeEditor.isActive("heading", { level: 2 })
              ? "h2"
              : activeEditor.isActive("heading", { level: 3 })
                ? "h3"
                : "paragraph"
          }
          onChange={(event) => {
            const selected = event.target.value;

            if (selected === "h2") {
              activeEditor
                .chain()
                .focus()
                .toggleHeading({ level: 2 })
                .run();
            } else if (selected === "h3") {
              activeEditor
                .chain()
                .focus()
                .toggleHeading({ level: 3 })
                .run();
            } else {
              activeEditor.chain().focus().setParagraph().run();
            }
          }}
          className="h-9 border border-[#142b45]/15 bg-white px-2 text-xs text-[#142b45] outline-none"
        >
          <option value="paragraph">Paragraph</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
        </select>

        <span className="mx-1 h-6 w-px bg-[#142b45]/15" />

        <button
          type="button"
          title="Bullet list"
          aria-label="Bullet list"
          onClick={() =>
            activeEditor.chain().focus().toggleBulletList().run()
          }
          className={buttonClass(activeEditor.isActive("bulletList"))}
        >
          • List
        </button>

        <button
          type="button"
          title="Numbered list"
          aria-label="Numbered list"
          onClick={() =>
            activeEditor.chain().focus().toggleOrderedList().run()
          }
          className={buttonClass(activeEditor.isActive("orderedList"))}
        >
          1. List
        </button>

        <button
          type="button"
          title="Blockquote"
          aria-label="Blockquote"
          onClick={() =>
            activeEditor.chain().focus().toggleBlockquote().run()
          }
          className={buttonClass(activeEditor.isActive("blockquote"))}
        >
          ❝ Quote
        </button>

        <button
          type="button"
          title="Horizontal divider"
          aria-label="Horizontal divider"
          onClick={() =>
            activeEditor.chain().focus().setHorizontalRule().run()
          }
          className={buttonClass()}
        >
          ―
        </button>
      </div>

      {/* Alignment and media toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-[#142b45]/10 bg-white p-2">
        <button
          type="button"
          title="Align left"
          onClick={() =>
            activeEditor.chain().focus().setTextAlign("left").run()
          }
          className={buttonClass(
            activeEditor.isActive({ textAlign: "left" })
          )}
        >
          ≡
        </button>

        <button
          type="button"
          title="Align center"
          onClick={() =>
            activeEditor.chain().focus().setTextAlign("center").run()
          }
          className={buttonClass(
            activeEditor.isActive({ textAlign: "center" })
          )}
        >
          ≣
        </button>

        <button
          type="button"
          title="Align right"
          onClick={() =>
            activeEditor.chain().focus().setTextAlign("right").run()
          }
          className={buttonClass(
            activeEditor.isActive({ textAlign: "right" })
          )}
        >
          ≡
        </button>

        <span className="mx-1 h-6 w-px bg-[#142b45]/15" />

        <button
          type="button"
          title="Insert link"
          onClick={addLink}
          className={buttonClass(activeEditor.isActive("link"))}
        >
          Link
        </button>

        <button
          type="button"
          title="Insert image"
          onClick={addImage}
          className={buttonClass()}
        >
          Image
        </button>

        <button
          type="button"
          title="Insert YouTube video"
          onClick={addYoutubeVideo}
          className={buttonClass()}
        >
          Video
        </button>

        <button
          type="button"
          title="Insert table"
          onClick={insertTable}
          className={buttonClass()}
        >
          Table
        </button>

        <span className="mx-1 h-6 w-px bg-[#142b45]/15" />

        <button
          type="button"
          title="Highlight text"
          onClick={() =>
            activeEditor.chain().focus().toggleHighlight().run()
          }
          className={buttonClass(activeEditor.isActive("highlight"))}
        >
          Highlight
        </button>

        <label
          title="Text color"
          className="flex h-9 cursor-pointer items-center gap-1 border border-transparent px-2 text-xs text-[#142b45] hover:bg-[#f8f5ed]"
        >
          Color
          <input
            type="color"
            aria-label="Choose text color"
            defaultValue="#142b45"
            onChange={(event) =>
              activeEditor
                .chain()
                .focus()
                .setColor(event.target.value)
                .run()
            }
            className="h-6 w-6 cursor-pointer border-0 bg-transparent"
          />
        </label>
      </div>

      {/* Table editing toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-[#142b45]/10 bg-[#f8f5ed]/60 p-2">
        <span className="px-2 text-[10px] font-bold uppercase tracking-wider text-[#142b45]/45">
          Table
        </span>

        <button
          type="button"
          onClick={() =>
            activeEditor.chain().focus().addColumnBefore().run()
          }
          disabled={!activeEditor.can().addColumnBefore()}
          className={buttonClass()}
        >
          + Column Before
        </button>

        <button
          type="button"
          onClick={() =>
            activeEditor.chain().focus().addColumnAfter().run()
          }
          disabled={!activeEditor.can().addColumnAfter()}
          className={buttonClass()}
        >
          + Column After
        </button>

        <button
          type="button"
          onClick={() =>
            activeEditor.chain().focus().addRowBefore().run()
          }
          disabled={!activeEditor.can().addRowBefore()}
          className={buttonClass()}
        >
          + Row
        </button>

        <button
          type="button"
          onClick={() =>
            activeEditor.chain().focus().deleteRow().run()
          }
          disabled={!activeEditor.can().deleteRow()}
          className={buttonClass()}
        >
          − Row
        </button>

        <button
          type="button"
          onClick={() =>
            activeEditor.chain().focus().deleteColumn().run()
          }
          disabled={!activeEditor.can().deleteColumn()}
          className={buttonClass()}
        >
          − Column
        </button>

        <button
          type="button"
          onClick={() =>
            activeEditor.chain().focus().deleteTable().run()
          }
          disabled={!activeEditor.can().deleteTable()}
          className={buttonClass()}
        >
          Delete Table
        </button>
      </div>

      {/* Editor writing area */}
      <EditorContent editor={activeEditor} />

      {/* Undo and redo */}
      <div className="flex items-center justify-between border-t border-[#142b45]/10 bg-[#f8f5ed] px-3 py-2">
        <span className="text-[10px] text-[#142b45]/45">
          ANM NEWSROOM EDITOR
        </span>

        <div className="flex gap-2">
          <button
            type="button"
            title="Undo"
            onClick={() =>
              activeEditor.chain().focus().undo().run()
            }
            disabled={!activeEditor.can().undo()}
            className={buttonClass()}
          >
            ↶ Undo
          </button>

          <button
            type="button"
            title="Redo"
            onClick={() =>
              activeEditor.chain().focus().redo().run()
            }
            disabled={!activeEditor.can().redo()}
            className={buttonClass()}
          >
            ↷ Redo
          </button>
        </div>
      </div>

      <style jsx global>{`
        .tiptap p {
          margin: 0 0 1rem;
        }

        .tiptap h2 {
          margin: 1.8rem 0 0.8rem;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.35;
        }

        .tiptap h3 {
          margin: 1.5rem 0 0.6rem;
          font-size: 1.2rem;
          font-weight: 700;
          line-height: 1.4;
        }

        .tiptap blockquote {
          margin: 1.5rem 0;
          border-left: 4px solid #c9a45c;
          padding: 0.75rem 1.25rem;
          background: #f8f5ed;
          font-style: italic;
        }

        .tiptap ul,
        .tiptap ol {
          margin: 1rem 0;
          padding-left: 1.75rem;
        }

        .tiptap ul {
          list-style: disc;
        }

        .tiptap ol {
          list-style: decimal;
        }

        .tiptap a {
          color: #9b762e;
          text-decoration: underline;
        }

        .tiptap img {
          display: block;
          max-width: 100%;
          height: auto;
          margin: 1.5rem auto;
        }

        .tiptap iframe {
          display: block;
          max-width: 100%;
          margin: 1.5rem auto;
        }

        .tiptap table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          table-layout: fixed;
        }

        .tiptap th,
        .tiptap td {
          border: 1px solid #142b4530;
          padding: 0.6rem;
          text-align: left;
          vertical-align: top;
        }

        .tiptap th {
          background: #f8f5ed;
          font-weight: 700;
        }

        .tiptap .selectedCell {
          background: #c9a45c30;
        }

        .tiptap hr {
          border: 0;
          border-top: 1px solid #142b4530;
          margin: 2rem 0;
        }

        .tiptap mark {
          background: #f5e5a8;
          padding: 0.1em 0.15em;
        }

        .tiptap p.is-editor-empty:first-child::before {
          color: #9ca3af;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
