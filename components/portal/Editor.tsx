"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import { Extension } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { useEffect } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

const FontSize = Extension.create({
  name: "fontSize",
  addOptions() {
    return { types: ["textStyle"] as string[] };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element: HTMLElement) =>
              element.style.fontSize?.replace(/['"]/g, "") || null,
            renderHTML: (attributes: { fontSize?: string | null }) => {
              if (!attributes.fontSize) return {};
              return { style: `font-size: ${attributes.fontSize}` };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize:
        (fontSize: string) =>
        ({ chain }: { chain: () => { setMark: (name: string, attrs: object) => { run: () => boolean } } }) =>
          chain().setMark("textStyle", { fontSize }).run(),
      unsetFontSize:
        () =>
        ({ chain }: { chain: () => { setMark: (name: string, attrs: object) => { run: () => boolean } } }) =>
          chain().setMark("textStyle", { fontSize: null }).run(),
    } as Record<string, (...args: unknown[]) => unknown>;
  },
});

const FONT_SIZES: { label: string; value: string }[] = [
  { label: "Klein", value: "14px" },
  { label: "Normal", value: "" },
  { label: "Groß", value: "20px" },
  { label: "Sehr groß", value: "24px" },
  { label: "Riesig", value: "30px" },
];

export function RichEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: { rel: "noopener noreferrer" },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
      }),
      TextStyle,
      FontSize,
    ],
    content: value || "<p></p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose-article min-h-[320px] max-w-none px-4 py-4 outline-none text-ink",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;
    if (value && value !== editor.getHTML()) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
  }, [value, editor]);

  if (!editor) {
    return (
      <div className="rounded border border-line bg-white p-4 text-sm text-ink-400">
        Editor wird geladen …
      </div>
    );
  }

  return (
    <div className="rounded border border-line bg-white">
      <Toolbar editor={editor} />
      <div className="px-4 pt-2 text-[12px] text-ink-400">
        Tipp: Text markieren, dann Stil auswählen. Enter erzeugt einen neuen Absatz.
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

function Toolbar({ editor }: { editor: Editor }) {
  const btn = (active: boolean, extra = "") =>
    `rounded px-2.5 py-1.5 text-[13px] border ${
      active
        ? "border-rot bg-rot-50 text-rot-600"
        : "border-transparent text-ink-600 hover:border-line hover:text-ink"
    } ${extra}`;

  const setLink = () => {
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link-URL (leer lassen zum Entfernen):", prev ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const currentSize = (editor.getAttributes("textStyle").fontSize as string | undefined) ?? "";

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-line bg-paper-100 px-2 py-2">
      <button
        type="button"
        title="Absatz"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={btn(editor.isActive("paragraph"))}
      >
        Absatz
      </button>
      <button
        type="button"
        title="Große Überschrift"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={btn(editor.isActive("heading", { level: 2 }))}
      >
        Überschrift
      </button>
      <button
        type="button"
        title="Zwischen-Überschrift"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={btn(editor.isActive("heading", { level: 3 }))}
      >
        Zwischen-Titel
      </button>

      <span className="mx-1 h-5 w-px bg-line" aria-hidden />

      <select
        title="Schriftgröße"
        value={currentSize}
        onChange={(e) => {
          const v = e.target.value;
          if (!v) {
            (editor.chain().focus() as unknown as { unsetFontSize: () => { run: () => boolean } })
              .unsetFontSize()
              .run();
          } else {
            (editor.chain().focus() as unknown as { setFontSize: (v: string) => { run: () => boolean } })
              .setFontSize(v)
              .run();
          }
        }}
        className="rounded border border-line bg-white px-2 py-1 text-[13px] text-ink-700"
      >
        {FONT_SIZES.map((f) => (
          <option key={f.label} value={f.value}>
            {f.label}
          </option>
        ))}
      </select>

      <span className="mx-1 h-5 w-px bg-line" aria-hidden />

      <button
        type="button"
        title="Fett"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={btn(editor.isActive("bold"))}
      >
        <strong>Fett</strong>
      </button>
      <button
        type="button"
        title="Kursiv"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={btn(editor.isActive("italic"))}
      >
        <em>Kursiv</em>
      </button>
      <button
        type="button"
        title="Unterstrichen"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={btn(editor.isActive("underline"))}
      >
        <span style={{ textDecoration: "underline" }}>Unterstrichen</span>
      </button>

      <span className="mx-1 h-5 w-px bg-line" aria-hidden />

      <button
        type="button"
        title="Linksbündig"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={btn(editor.isActive({ textAlign: "left" }))}
      >
        Links
      </button>
      <button
        type="button"
        title="Zentriert"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={btn(editor.isActive({ textAlign: "center" }))}
      >
        Mitte
      </button>
      <button
        type="button"
        title="Rechtsbündig"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={btn(editor.isActive({ textAlign: "right" }))}
      >
        Rechts
      </button>

      <span className="mx-1 h-5 w-px bg-line" aria-hidden />

      <button
        type="button"
        title="Aufzählung"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={btn(editor.isActive("bulletList"))}
      >
        • Liste
      </button>
      <button
        type="button"
        title="Nummerierte Liste"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={btn(editor.isActive("orderedList"))}
      >
        1. Liste
      </button>
      <button
        type="button"
        title="Zitat"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={btn(editor.isActive("blockquote"))}
      >
        Zitat
      </button>
      <button
        type="button"
        title="Trennlinie einfügen"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={btn(false)}
      >
        ― Trennlinie
      </button>
      <button
        type="button"
        title="Link einfügen oder entfernen"
        onClick={setLink}
        className={btn(editor.isActive("link"))}
      >
        Link
      </button>

      <span className="mx-1 h-5 w-px bg-line" aria-hidden />

      <button
        type="button"
        title="Formatierung entfernen"
        onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
        className={btn(false)}
      >
        Stil entfernen
      </button>
      <button
        type="button"
        title="Rückgängig"
        onClick={() => editor.chain().focus().undo().run()}
        className={btn(false)}
        aria-label="Rückgängig"
      >
        ↶
      </button>
      <button
        type="button"
        title="Wiederherstellen"
        onClick={() => editor.chain().focus().redo().run()}
        className={btn(false)}
        aria-label="Wiederherstellen"
      >
        ↷
      </button>
    </div>
  );
}
